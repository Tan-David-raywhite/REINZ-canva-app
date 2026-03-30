import * as React from 'react';
import type { Layout, ScrollState } from '../scroll_window';
type GlobalScrollWindowProps<L extends Layout> = {
    layout: L
    children(
     opts: {
         scrollState: Readonly<ScrollState<L>>;
     }
    ): React.ReactNode
};
export declare function GlobalScrollWindow<L extends Layout>(props: GlobalScrollWindowProps<L>): React.ReactNode;
type OptionalGlobalScrollWindowProps<L extends Layout> = {
    layout: L
    enabled: boolean
    children(
     opts: {
         scrollState?: Readonly<ScrollState<L>>;
     }
    ): React.ReactNode
};
export declare function OptionalGlobalScrollWindow<L extends Layout>(props: OptionalGlobalScrollWindowProps<L>): React.ReactNode;
export {};
