import * as React from 'react';
export type AudioContextValue = {
    playingAudio?: HTMLAudioElement;
    isPaused: boolean;
    play: (audio: HTMLAudioElement) => void;
    pause: () => void;
    resume: () => void;
    stop: () => void;
};
export declare const AudioContext: React.Context<AudioContextValue | undefined>;
/**
 * 
 *  A wrapper that tracks the currently playing audio. By using this, we can ensure only 1 audio track is playing at a time.
 *  It also manages the situation where a user tries to play an audio file while another is playing.
 *  This component must appear once — and only once — at the root of an app, as the `AudioCard` component depends on it.
 */
export declare const AudioContextProvider: (props: React.PropsWithChildren) => React.JSX.Element;
