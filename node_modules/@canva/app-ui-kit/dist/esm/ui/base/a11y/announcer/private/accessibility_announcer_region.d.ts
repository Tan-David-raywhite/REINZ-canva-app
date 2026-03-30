import type { JSX } from 'react';
import * as React from 'react';
type AccessibilityAnnouncerProps = {
    onMount: (regions: {
        assertiveRegion: React.RefObject<HTMLDivElement | null>;
        politeRegion: React.RefObject<HTMLDivElement | null>;
    }) => void
    onUnmount: () => void
};
export declare const AccessibilityAnnouncerRegion: ({ onMount, onUnmount, }: AccessibilityAnnouncerProps) => JSX.Element;
export {};
