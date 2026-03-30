import * as React from 'react';
import type { Layout, ScrollState } from '../scroll_window';
type ScrollWindowProps<L extends Layout> = {
    layout: L
    innerRef?(el: HTMLElement | null): void
    doNotUseForceLTRForPageNavigator?: boolean
    children(
     opts: {
         scrollableRef(el: HTMLElement | null): void
         scrollState: Readonly<ScrollState<L>>
     }
    ): React.ReactNode
};
export declare function ScrollWindow<L extends Layout>(props: ScrollWindowProps<L>): React.ReactNode;
type OptionalScrollWindowProps<L extends Layout> = {
    layout: L
    enabled: boolean
    innerRef?(el: HTMLElement | null): void
    children(
     opts: {
         scrollableRef?(el: HTMLElement | null): void
         scrollState?: Readonly<ScrollState<L>>;
     }
    ): React.ReactNode
};
export declare function OptionalScrollWindow<L extends Layout>(props: OptionalScrollWindowProps<L>): React.ReactNode;
export {};
