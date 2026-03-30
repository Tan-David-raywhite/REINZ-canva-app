export declare class TooltipState {
    open: boolean;
    timeoutId: number;
    constructor({ open, }?: {
        open?: boolean | undefined;
    });
}
export declare class TooltipPresenter {
    showTooltip(tooltip: {
        state: TooltipState;
    }, fadeInDelayMs: number): Promise<void>;
    hideTooltip(tooltip: {
        state: TooltipState;
    }, fadeOutDelayMs: number): Promise<void>;
    private setOpen;
    private static fadeWithDelay;
    private clearDelay;
}
