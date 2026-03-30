export { GlobalScrollWindow, OptionalGlobalScrollWindow } from './internal/global_scroll_window';
export { OptionalScrollWindow, ScrollWindow } from './internal/scroll_window';
export { WindowedList } from './internal/windowed_list';
export type Layout = 'vertical' | 'horizontal';
export type ScrollState<L extends Layout> = {
    layout: L;
    positions?: Readonly<{
        containerSize: number;
        scrollPosition: number;
    }>
};
