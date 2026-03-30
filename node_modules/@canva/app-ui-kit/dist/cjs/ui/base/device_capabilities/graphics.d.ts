type NavigatorWithUA = {
    userAgent: string;
};
export declare function getCanvasAreaLimitPx(navigator?: NavigatorWithUA | undefined): number;
export declare function doesClipPathSupportPathValue(
 window?: {
     CSS: {
         supports: (s: string) => boolean;
     };
 } | undefined
): boolean;
export declare function isBlobSupported(blob: Blob): Promise<boolean>;
export declare function isHeicSupported(): Promise<boolean>;
export {};
