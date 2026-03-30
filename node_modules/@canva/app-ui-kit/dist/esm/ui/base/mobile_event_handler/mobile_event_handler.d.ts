import * as React from 'react';
type BackButtonHandler = (e: BackButtonEvent) => void;
export interface BackButtonEvent {
    stopPropagation(): void;
}
export declare const enum MobileEvents {
    BACK = "backbutton"
}
export declare function MobileEventHandler(
    { onBackButton, children, }: React.PropsWithChildren<{
        onBackButton: BackButtonHandler
    }>
): React.ReactNode;
export {};
