import * as React from 'react';
/** 
 * The appearance of an alert, indicating its meaning.
 */
export type Tone = 'critical' | 'warn' | 'positive' | 'info' | 'neutral';
/**
 * 
 * The props for the `Alert` component.
 */
export type AlertProps = {
    /** 
         * The content of the alert.
         */
    children?: React.ReactNode;
    /** 
         * The appearance of the alert, indicating its meaning.
         */
    tone: Tone;
    /** 
         * A callback that runs if the user dismisses the alert. The dismiss button is only rendered if this callback is provided.
         */
    onDismiss?: () => void;
    /** 
         * A string of bold text that appears before the alert content.
         */
    title?: string;
};
/** 
 * Highlights important information that the user needs to see.
 */
export declare function Alert(props: AlertProps): React.JSX.Element;
