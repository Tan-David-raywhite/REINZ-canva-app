import type * as React from 'react';
export type Fit = 'cover' | 'coverCrop';
export declare function getDimensions(
 fit: Fit | undefined,
 containerRatio: number,
 thumbnailRatio: number,
 containerPadding: number
): React.CSSProperties;
