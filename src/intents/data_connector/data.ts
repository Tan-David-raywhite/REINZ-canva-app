// For usage information, see the README.md file.

import type { DataTable, GetDataTableRequest } from "@canva/intents/data";
import type { ImageMimeType } from "@canva/asset";

const LISTINGS_API_URL =
  "https://raywhiteapi.ep.dynamics.net/v1/listings?apiKey=df83a96e-0f55-4a20-82d9-eaa5f3e30335";

// Listing IDs used when the saved config doesn't specify a selection.
export const defaultListingIds: string[] = ["3290153", "3387673", "3417514"];

// Configuration object that defines the structure of a data source query
export type RealEstateDataConfig = {
  listingIds?: string[];
};

// Fetches data from the API and transforms it into Canva's DataTable format
export const getRealEstateData = async (
  request: GetDataTableRequest,
): Promise<DataTable> => {
  const { dataSourceRef } = request;

  if (!dataSourceRef) {
    throw new Error("Missing dataSourceRef");
  }

  const config = JSON.parse(dataSourceRef.source) as RealEstateDataConfig;

  const selectedListingIds = config.listingIds?.length
    ? config.listingIds
    : defaultListingIds;

  const listings = await getListings(selectedListingIds);

  return transformToDataTable(listings);
};

const getListings = async (ids: string[]) => {
  const response = await fetch(LISTINGS_API_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: ids }),
  });

  const result = await response.json();
  return result.data;
};

// Maps a file format/extension to a Canva-supported image MIME type.
// Checks the `format` query param first (CDN output format), then the file
// extension, and falls back to image/jpeg.
const getImageMimeType = (url: string): ImageMimeType => {
  const mimeByExt: Record<string, ImageMimeType> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    heic: "image/heic",
    svg: "image/svg+xml",
  };

  // 1. Prefer the CDN's requested output format, e.g. ...&format=webp
  const formatParam = url.match(/[?&]format=([^&]+)/i)?.[1]?.toLowerCase();
  if (formatParam && mimeByExt[formatParam]) {
    return mimeByExt[formatParam];
  }

  // 2. Fall back to the file extension in the path (ignoring the query string)
  const path = url.split("?")[0] ?? "";
  const ext = path.split(".").pop()?.toLowerCase();
  if (ext && mimeByExt[ext]) {
    return mimeByExt[ext];
  }

  // 3. Default
  return "image/jpeg";
};

const stripHtml = (html?: string): string => {
  if (!html) return "";
  return html
    .replace(/<\s*br\s*\/?\s*>/gi, "\n") // <br>, <br/>, <br /> -> newline
    .replace(/<\/\s*(p|div|li|h[1-6])\s*>/gi, "\n") // close of block tags -> newline
    .replace(/<[^>]+>/g, "") // strip all remaining tags
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/[ \t]+\n/g, "\n") // trim trailing spaces before newlines
    .replace(/\n{3,}/g, "\n\n") // collapse 3+ newlines to a blank line
    .trim();
};

// Appends query params to a URL, choosing `?` or `&` as appropriate.
const appendParams = (url: string, params: string): string => {
  if (!url) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${params}`;
};

const buildImageUpload = (image: {
  url: string;
  width?: number;
  height?: number;
}) => {
  return {
    type: "image_upload" as const,
    url: appendParams(image.url, "purpose=import"),
    thumbnailUrl: appendParams(image.url, "width=400&purpose=thumb"),
    width: image.width ?? 800,
    height: image.height ?? 800,
    mimeType: getImageMimeType(image.url),
    aiDisclosure: "none" as const,
  };
};

// Formats a 10-digit AU mobile as "0400 000 000"; other values pass through unchanged.
const formatPhoneNumber = (contact?: string): string => {
  if (!contact) return "";
  if (!/^\d{10}$/.test(contact)) return contact;
  return contact.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
};

// Converts the API listing data into Canva's DataTable format.
const transformToDataTable = (listings: any[]): DataTable => {
  // Define column structure
  const columnConfigs = [
    { name: "Listing id", type: "number" as const },
    { name: "Image", type: "media" as const },
    { name: "Other image", type: "media" as const },
    { name: "Other image 2", type: "media" as const },

    { name: "Address", type: "string" as const },
    { name: "Address 2", type: "string" as const },
    { name: "Address 3", type: "string" as const },
    { name: "Title", type: "string" as const },
    { name: "Description", type: "string" as const },

    { name: "Unit Number", type: "string" as const },
    { name: "Street Number", type: "string" as const },
    { name: "Street name", type: "string" as const },
    { name: "Street type", type: "string" as const },
    { name: "Suburb", type: "string" as const },
    { name: "State", type: "string" as const },
    { name: "Post Code", type: "string" as const },

    { name: "Bathrooms", type: "number" as const },
    { name: "Bedrooms", type: "number" as const },
    { name: "Parking Spaces", type: "number" as const }, // Car Spaces
    { name: "Car ports", type: "number" as const },
    { name: "Garages", type: "number" as const },
    { name: "Dining Rooms", type: "number" as const },
    { name: "Open Spaces", type: "number" as const },

    { name: "Listing Type", type: "string" as const },
    { name: "Listing status", type: "string" as const },
    { name: "Building Area", type: "number" as const },
    { name: "Lot Size", type: "number" as const }, // Land area

    { name: "Listing price", type: "string" as const },
    { name: "Property Website", type: "string" as const },

    { name: "Auction date", type: "string" as const },
    { name: "Auction location", type: "string" as const },
    { name: "Agent Name", type: "string" as const },
    { name: "Agent Email", type: "string" as const },
    { name: "Agent Contact", type: "string" as const },
    { name: "Agent Name 2", type: "string" as const },
    { name: "Agent Email 2", type: "string" as const },
    { name: "Agent Contact 2", type: "string" as const },
    { name: "Agent Name 3", type: "string" as const },
    { name: "Agent Email 3", type: "string" as const },
    { name: "Agent Contact 3", type: "string" as const },
    { name: "Office name", type: "string" as const },
  ];

  // Generate table rows with data cells matching the column structure
  const rows = listings.map((project) => {
    const { unitNumber, streetNumber, streetName, streetType } =
      project.value.address;
    const streetAddress = `${streetNumber} ${streetName} ${streetType}`;
    const address2 = unitNumber
      ? `${unitNumber}/${streetAddress}`
      : streetAddress;

    const buildingArea = project.value.measurements?.find(
      (m) => m.code === "BAS",
    )?.value;

    const landArea = project.value.measurements?.find(
      (m) => m.code === "LAS",
    )?.value;

    const propertyWebsite = project.value.links?.find((m) => m.code === "PRL");

    const [agent1, agent2, agent3] = project.value.agents ?? [];

    const images = project.value.images ?? [];

    const auction = project.value.auction;

    return {
      cells: [
        { type: "number" as const, value: project.value.id ?? 0 },
        {
          type: "media" as const,
          value: images.length >= 1 ? [buildImageUpload(images[0])] : [],
        },
        {
          type: "media" as const,
          value: images.length >= 2 ? [buildImageUpload(images[1])] : [],
        },
        {
          type: "media" as const,
          value: images.length >= 3 ? [buildImageUpload(images[2])] : [],
        },

        { type: "string" as const, value: project.value.address.formatted },
        { type: "string" as const, value: address2 },
        {
          type: "string" as const,
          value: `${project.value.address.suburb}, ${project.value.address.postCode}`,
        },
        { type: "string" as const, value: project.value.title },
        { type: "string" as const, value: stripHtml(project.value.description) },

        { type: "string" as const, value: unitNumber },
        { type: "string" as const, value: streetNumber },
        { type: "string" as const, value: streetName },
        { type: "string" as const, value: streetType },
        { type: "string" as const, value: project.value.address.suburb },
        { type: "string" as const, value: project.value.address.state },
        { type: "string" as const, value: project.value.address.postCode },

        { type: "number" as const, value: project.value.bathrooms ?? 0 },
        { type: "number" as const, value: project.value.bedrooms ?? 0 },
        { type: "number" as const, value: project.value.carSpaces ?? 0 },
        { type: "number" as const, value: project.value.carports ?? 0 },
        { type: "number" as const, value: project.value.garages ?? 0 },
        { type: "number" as const, value: project.value.diningRooms ?? 0 },
        { type: "number" as const, value: project.value.openSpaces ?? 0 },

        { type: "string" as const, value: project.value.status }, // Listing Type
        {
          type: "string" as const,
          value: auction ? "Auction" : (project.value.subType ?? ""), // Listing Status
        },
        { type: "number" as const, value: buildingArea ?? 0 },
        { type: "number" as const, value: landArea ?? 0 },

        { type: "string" as const, value: project.value.price },
        { type: "string" as const, value: propertyWebsite?.url ?? "" },

        {
          type: "string" as const,
          value: auction
            ? new Date(auction.date).toLocaleDateString("en-AU", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "",
        },
        { type: "string" as const, value: auction?.location ?? "" },

        { type: "string" as const, value: agent1?.fullName ?? "" },
        { type: "string" as const, value: agent1?.email ?? "" },
        { type: "string" as const, value: formatPhoneNumber(agent1?.mobilePhone) },

        { type: "string" as const, value: agent2?.fullName ?? "" },
        { type: "string" as const, value: agent2?.email ?? "" },
        { type: "string" as const, value: formatPhoneNumber(agent2?.mobilePhone) },

        { type: "string" as const, value: agent3?.fullName ?? "" },
        { type: "string" as const, value: agent3?.email ?? "" },
        { type: "string" as const, value: formatPhoneNumber(agent3?.mobilePhone) },

        {
          type: "string" as const,
          value: project.value.office?.businessName ?? "",
        },
      ],
    };
  });

  return { columnConfigs, rows };
};
