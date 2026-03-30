export type SafeHtml = string & {
    __safeHtml: never;
};
export type HtmlEncodedContent = string & {
    __htmlEncodedContent: never;
};
export declare function encodeAsHtmlContent(str: string): HtmlEncodedContent;
export type HtmlEncodedCssList = string & {
    __htmlEncodedCssList: never;
};
export type HtmlEncodedAttributeValue = HtmlEncodedCssList | (string & {
    __htmlEncodedAttributeValue: never;
});
export declare function encodeAsHtmlAttributeValue(str: string): HtmlEncodedAttributeValue;
