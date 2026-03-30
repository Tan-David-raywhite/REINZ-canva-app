import * as React from 'react';
import type { LoadingState } from '../../../../../../base/thumbnail/thumbnail';
import type { IconElement } from '../../../icons/icons';
import type { DecoratedCardProps, InternalCardProps, Visibility } from '../internal_card';
type TopEndDecoratedCardProps = {
    /** 
         * A decorator that is rendered at the top end corner of the card.
         * Only an icon button decorator is currently supported.
         */
    topEnd?: {
        /** 
                 * The icon to a button that's rendered at the top end corner of the card.
                 */
        buttonIcon: () => IconElement;
        /** 
                 * An accessible description of what happens when the icon button is pressed.
                 */
        buttonAriaLabel: string;
        /** 
                 * A callback that runs when the icon button decorator is clicked.
                 */
        buttonOnClick: () => void;
    };
    /** 
         * Controls the visibility of the top end decorator.
         * For devices without hover support, decorators will always be visible.
         * @defaultValue "on-hover"
         */
    topEndVisibility?: Visibility;
};
/** 
 * The props for the `AudioCard` component.
 */
export type AudioCardProps = React.RefAttributes<AudioCardRef> & InternalCardProps & DecoratedCardProps & TopEndDecoratedCardProps & {
    /** 
         * An accessible description of what happens when the card is clicked. If omitted, the `title` prop is used instead. If there is no `title`, this prop must be set.
         * @example "Add audio track to design"
         */
    ariaLabel?: string;
    /** 
         * The duration of the audio track, in seconds.
         */
    durationInSeconds: number;
    /** 
         * A human readable title for the audio track.
         */
    title: string;
    /** 
         * Appears below the title. If provided with `durationInSeconds`, will appear after the duration, separated with ' • '.
         */
    description?: string;
    /** 
         * Custom content to render inside the card.
         *
         * Use this prop to display content that isn't covered by the standard content props such `title`, or `description`.
         * If both standard props and `content` props are passed, `content` will be appended after the standard elements.
         */
    content?: React.ReactNode;
    audioPreviewUrl: string;
    thumbnailUrl?: string;
    /** 
         * If `true`, the AudioCard will show greyed-out styles.
         *
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * If `true`, AudioCard will be selectable and an outline border will
         * appear on hover to indicate selection is available.
         *
         * @remarks
         * Set this value to `true` only if `onClick` selects and deselects the Card, as opposed to click to add to design.
         *
         * @defaultValue false
         */
    selectable?: boolean;
    /** 
         * If `true`, the AudioCard will show selected styles.
         *
         * @remarks
         * `selectable` must be set to true.
         *
         * @defaultValue false
         */
    selected?: boolean;
    /** 
         * Callback fired when the audio changes its loading state - the values are 'loading', 'loaded', and 'error'.
         */
    onAudioLoad?: (loadingState: LoadingState) => void;
    /** 
         * Callback fired when the thumbnail image changes its loading state - the values are 'loading', 'loaded', and 'error'.
         */
    onImageLoad?: (loadingState: LoadingState) => void;
    /** 
         * Callback fired whenever the audio time is updated.
         * @param timestampSeconds - The audio time in seconds e.g. 4.17
         */
    onTimeUpdate?: (timestampSeconds: number) => void;
    /** 
         * Callback fired when the audio starts playing either initially or when resumed after being paused.
         * @param timestampSeconds - The audio time in seconds e.g. 4.17
         */
    onPlay?: (timestampSeconds: number) => void;
    /** 
         * Callback fired when the audio is paused, either by clicking the pause button or when another audio plays.
         * @param timestampSeconds - The audio time in seconds e.g. 4.17
         */
    onPause?: (timestampSeconds: number) => void;
    /** 
         * Callback fired when the audio finishes playing naturally or when the component is unmounted.
         */
    onEnded?: () => void;
};
export type AudioCardRef = {
    /** 
         * Plays the audio preview.
         * If the audio is paused, it will be resumed.
         */
    play: () => void;
    /** 
         * Pauses the audio preview.
         */
    pause: () => void;
    /** 
         * Restarts the audio preview from the beginning.
         * If the audio is paused, it will be played.
         */
    restart: () => void;
    /** 
         * Returns `true` if the audio is currently playing.
         */
    isPlaying: () => boolean;
    /** 
         * Returns `true` if the audio is currently paused.
         */
    isPaused: () => boolean;
};
export declare const AudioCard: (props: AudioCardProps) => React.JSX.Element;
export {};
