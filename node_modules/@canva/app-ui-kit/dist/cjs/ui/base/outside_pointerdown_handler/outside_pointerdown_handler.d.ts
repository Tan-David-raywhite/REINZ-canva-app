import * as React from 'react';
export type OutsidePointerDownHandlerProps = {
    children: React.ReactNode
    onOutsidePointerDown?(event: Event): void
};
export declare const OutsidePointerDownHandler: (props: React.PropsWithChildren<OutsidePointerDownHandlerProps>) => React.JSX.Element;
