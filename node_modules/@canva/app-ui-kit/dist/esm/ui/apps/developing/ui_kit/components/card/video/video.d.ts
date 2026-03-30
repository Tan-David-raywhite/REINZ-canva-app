import * as React from 'react';
import type { LoadingState } from '../../../../../../base/thumbnail/thumbnail';
import type { DecoratedCardProps, InternalCardProps } from '../internal_card';
export type VideoMimeType = 'video/avi' | 'video/x-msvideo' | 'image/gif' | 'video/x-m4v' | 'video/x-matroska' | 'video/quicktime' | 'video/mp4' | 'video/mpeg' | 'video/webm';
type BaseVideoCardProps = InternalCardProps & DecoratedCardProps & {
    /** 
         * An accessible description of what happens when the card is clicked.
         *
         * @remarks
         * Must be provided when the card is interactive, i.e. when it's clickable
         *
         * @example "Add video to design"
         */
    ariaLabel?: string;
    /** 
         * The URL of an image to render as the card's thumbnail.
         * If the video is a GIF, use the GIF as the thumbnail. Otherwise, use a still frame from the video.
         */
    thumbnailUrl: string;
    /** 
         * The rounding of the card's corners.
         *
         * @remarks
         * This should only be set to 'none' if the card is rendered without an accompanying title and/or description.
         * @defaultValue "none"
         */
    borderRadius?: 'none' | 'standard';
    /** 
         * A fixed height for the card, regardless of its contents. If omitted, the card grows to fit the size of its contents.
         */
    thumbnailHeight?: number;
    /** 
         * The ratio of the width to the height of the card thumbnail, given as the width divided by the height. If omitted, the thumbnail image will be displayed at its natural aspect ratio.
         * For example, if the image is 200px wide and 200px high, the aspect ratio is 1;
         * if the image is 200px wide and 100px high, the aspect ratio is 2 (200/100 = 2);
         * if the image is 300px wide and 200px high, the aspect ratio is 1.5 (300/200 = 1.5).
         * If thumbnailHeight is provided, this should also be provided to ensure the image does not change size on loading.
         */
    thumbnailAspectRatio?: number;
    /** 
         * If `true`, VideoCard will be selectable and an outline border will
         * appear on hover to indicate selection is available.
         *
         * @remarks
         * Set this value to `true` only if `onClick` selects and deselects the Card, as opposed to click to add to design.
         *
         * @defaultValue false
         */
    selectable?: boolean;
    /** 
         * If `true`, the VideoCard will show selected styles.
         *
         * @remarks
         * `selectable` must be set to true.
         *
         * @defaultValue false
         */
    selected?: boolean;
    /** 
         * If `true`, the VideoCard will show greyed-out styles.
         *
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * Callback fired when the video changes its loading state - the values are 'loading', 'loaded', and 'error'.
         */
    onVideoLoad?: (loadingState: LoadingState) => void;
    /** 
         * Callback fired when the thumbnail image changes its loading state - the values are 'loading', 'loaded', and 'error'.
         */
    onImageLoad?: (loadingState: LoadingState) => void;
};
type VideoProps = BaseVideoCardProps & {
    /** 
         * The MIME type of the video.
         *
         * @remarks
         * While our APIs support uploading `video/x-msvideo` videos, the `VideoCard` component cannot preview them due to lack of native support from browsers.
         * Either provide a different format preview video, or use a custom component.
         */
    mimeType: Exclude<VideoMimeType, 'image/gif'>;
    /** 
         * The URL of a video to display as a preview. This video should be no longer than 10 seconds.
         */
    videoPreviewUrl: string;
    /** 
         * The duration of the full video, in seconds. If provided, this duration is displayed as a badge on the thumbnail.
         */
    durationInSeconds?: number;
};
type GifProps = BaseVideoCardProps & {
    mimeType: 'image/gif';
    /** 
         * An accessible description for the GIF. */
    alt: string;
};
/** 
 * The props for the `VideoCard` component.
 */
export type VideoCardProps = VideoProps | GifProps;
export declare const VideoCard: (props: VideoProps | GifProps) => React.JSX.Element;
export {};
