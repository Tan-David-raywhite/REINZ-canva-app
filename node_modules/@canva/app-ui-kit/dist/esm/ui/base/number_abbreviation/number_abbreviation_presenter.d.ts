export type BreakPoint = {
    breakPoint: number;
    formatFn: (num: string) => string;
};
type NumberFormatOptions = {
    maximumSignificantDigits?: number;
    maximumFractionDigits?: number;
    useGrouping?: boolean;
};
export declare class NumberAbbreviationPresenter {
    private readonly forceLocale?;
    private readonly formatOptions?;
    private static breakPoints;
    constructor(forceLocale?: string | undefined, formatOptions?: NumberFormatOptions | undefined);
    private isBreakPointEmpty;
    private getNextBreakpoint;
    abbreviateNumber(numberToAbbreviate: number): string;
    private maybeRoundNumber;
}
export {};
