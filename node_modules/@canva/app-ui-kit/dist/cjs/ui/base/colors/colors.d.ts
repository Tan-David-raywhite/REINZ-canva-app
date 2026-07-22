type ContrastAlgorithm = 'wcag' | 'apca';
export declare function getContrastingForegroundColor(
 backgroundColor: string,
 candidates?: string[],
 algorithm?: ContrastAlgorithm
): string;
export declare function getContrastingBackgroundColor(
 foregroundColor: string,
 candidates?: string[],
 algorithm?: ContrastAlgorithm
): string;
export {};
