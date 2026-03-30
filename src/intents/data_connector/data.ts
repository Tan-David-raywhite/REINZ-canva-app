// For usage information, see the README.md file.

import type {
  DataTable,
  DataTableImageUpload,
  DataTableVideoUpload,
  GetDataTableRequest,
} from "@canva/intents/data";

// Available filter options for real estate project sales stages
export const saleStageOptions: string[] = [
  "3290153",
  "3387673",
  "3417514",
];

// Configuration object that defines the structure of a data source query
export type RealEstateDataConfig = {
  listingIds?: string[];
};

// Fetches data from the mock API and transforms it into Canva's DataTable format
export const getRealEstateData = async (
  request: GetDataTableRequest,
): Promise<DataTable> => {

  const { dataSourceRef, limit } = request;

  if (!dataSourceRef) {
    throw new Error("Missing dataSourceRef");
  }

  // Parse saved config
  const dataRef = JSON.parse(dataSourceRef.source) as RealEstateDataConfig;
  console.log(dataRef)

  // Use selected stages or default
  const selectedlistingIds = dataRef.listingIds?.length
    ? dataRef.listingIds
    : saleStageOptions;

  const projects = await getListings(selectedlistingIds);

  // If you plan to filter by stage, you'd do it here:
  // const filteredProjects = projects.filter(p => selectedStages.includes(p.stage));

  const dataTable = transformToDataTable(projects);

  dataTable.rows = dataTable.rows.slice(0, limit.row);

  return dataTable; // ✅ just return
};

// Structure representing a real estate project from the mock API
// interface RealEstateProject {
//   Address: string;
//   bed: number;
//   bath: number;
//   carSpace: number;
//   media: (DataTableImageUpload | DataTableVideoUpload)[];
// }

/**
 * Sample data for real estate projects.
 * Each project has a name, sales stage values, and media assets.
 */

const getListings = async (selectedlistingIds) => {
  const bodyData = {
    id: selectedlistingIds
  };

  const response = await fetch(
    "https://raywhiteapi.ep.dynamics.net/v1/listings?apiKey=df83a96e-0f55-4a20-82d9-eaa5f3e30335",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bodyData),
    },
  );

  const result = await response.json();
  return result.data; // ✅ return actual data
};

const getProjects = () => [
  {
    Address: "88 Duporth Avenue",
    bed: 3,
    bath: 3,
    carSpace: 3,
    // media: staticMediaData,
    media:
      "https://cdn6.ep.dynamics.net/s3/rw-propertyimages/d85e-H3417514-1764571080-2-1719641016-c15a119d-5086-493e-a22b-6ac04857a0a4401-88-Duporth-Ave-Dusk-7933.w.1920.zc.C.q.70.jpg?height=1096&maxheight=2841&maxwidth=2841&quality=90&scale=down&width=1644&format=webp",
  },
  {
    Address: "95 Pacific Road",
    bed: 5,
    bath: 4,
    carSpace: 2,
    media:
      "https://cdn6.ep.dynamics.net/s3/rw-propertyimages/638a-H3290153-145414728__1745817747-87205-Drone2a.jpg?height=1480&maxheight=2841&maxwidth=2841&quality=90&scale=down&width=1973&format=webp",
  },
  {
    Address: "19A Coolong Road",
    bed: 5,
    bath: 6,
    carSpace: 3,
    media:
      "https://cdn6.ep.dynamics.net/s3/rw-propertyimages/3854-H3417514-1764571080-1-1719113662-31ac4c21-4fc0-4060-8234-4b70ae90f03f401-88-Duporth-day-new-453.w.1920.zc.C.q.70.jpg?height=1096&maxheight=2841&maxwidth=2841&quality=90&scale=down&width=1644&format=webp",
  },
];

// Converts the mock API project data into Canva's DataTable format with dynamic column configuration
const transformToDataTable = (projects): DataTable => {
  console.log(projects);
  // Define column structure based on user's selected stages
  const columnConfigs = [
    { name: "Image", type: "media" as const },
    { name: "Address", type: "string" as const },
    { name: "Title", type: "string" as const }, 
    { name: "Description", type: "string" as const }, 
    { name: "Unit Number", type: "string" as const }, 
    { name: "Street Number", type: "string" as const }, 
    { name: "Street name", type: "string" as const }, 
    { name: "Street type", type: "string" as const }, 
    { name: "Suburb", type: "string" as const },
    { name: "State", type: "string" as const },
    { name: "Post Code", type: "string" as const },
    { name: "Bathroom", type: "number" as const },
    { name: "Bedrooms", type: "number" as const },
    { name: "Car Spaces", type: "number" as const },
    { name: "Car ports", type: "number" as const },
    { name: "Garages", type: "number" as const },
    { name: "Dining Rooms", type: "number" as const },
    { name: "Open Spaces", type: "number" as const },
    // { name: "Bedrooms", type: "number" as const }
    // ,

    // { name: "Bathrooms", type: "number" as const }
    //   ,

    // { name: "Car Spaces", type: "number" as const }
    // ,
    // { name: "Media", type: "media" as const },
  ];

  // Generate table rows with data cells matching the column structure
  const rows = projects.map((project) => ({
    cells: [
       { type: "media" as const, value:  [
          {
            type: "image_upload",
            url: project.value.images[0].url,
            thumbnailUrl: project.value.images[0].url,
            width: 800,
            height: 800,
            mimeType: "image/jpeg",
            aiDisclosure: "none",
          },
        ],},
      { type: "string" as const, value: project.value.address.formatted },
      { type: "string" as const, value: project.value.title },
      { type: "string" as const, value: project.value.Description },
      { type: "string" as const, value: project.value.address.unitNumber },
      { type: "string" as const, value: project.value.address.streetNumber },
      { type: "string" as const, value: project.value.address.streetName },
      { type: "string" as const, value: project.value.address.streetType },
      { type: "string" as const, value: project.value.address.suburb },
      { type: "string" as const, value: project.value.address.state },
      { type: "string" as const, value: project.value.address.postCode },
      { type: "number" as const, value: project.value.bathrooms },
      { type: "number" as const, value: project.value.bedrooms },
      { type: "number" as const, value: project.value.carSpaces },
      { type: "number" as const, value: project.value.carPorts },
      { type: "number" as const, value: project.value.garages },
      { type: "number" as const, value: project.value.diningRooms },
      { type: "number" as const, value: project.value.openSpaces },
      //   { type: "number" as const, value: project.bed },

      //   { type: "number" as const, value: project.bath },

      //   { type: "number" as const, value: project.carSpace },
      //   { type: "media" as const, value:  [
      //     {
      //       type: "image_upload",
      //       url: project.media,
      //       thumbnailUrl: project.media,
      //       width: 800,
      //       height: 800,
      //       mimeType: "image/webp",
      //       aiDisclosure: "none",
      //     },
      //   ],},
    ],
  }));

  return { columnConfigs, rows };
};

// Static media assets used for demonstration purposes in all projects
const staticMediaData: (DataTableImageUpload | DataTableVideoUpload)[] = [
  {
    type: "video_upload",
    mimeType: "video/mp4",
    url: "https://www.canva.dev/example-assets/video-import/video.mp4",
    thumbnailImageUrl:
      "https://www.canva.dev/example-assets/video-import/thumbnail-image.jpg",
    thumbnailVideoUrl:
      "https://www.canva.dev/example-assets/video-import/thumbnail-video.mp4",
    width: 405,
    height: 720,
    aiDisclosure: "none",
  },
  {
    type: "image_upload",
    mimeType: "image/jpeg",
    url: "https://www.canva.dev/example-assets/image-import/image.jpg",
    thumbnailUrl:
      "https://www.canva.dev/example-assets/image-import/thumbnail.jpg",
    width: 540,
    height: 720,
    aiDisclosure: "none",
  },
];

// Generates random sales values for demonstration purposes
// function getRandomSalesValue(): number {
//   const min = 10;
//   const max = 100;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
