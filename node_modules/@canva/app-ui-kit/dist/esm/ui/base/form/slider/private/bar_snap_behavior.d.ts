export interface BarSnapBehavior {
    onKeyDown(): void;
    onKeyUp(): void;
    onChange: OnChange;
}
type OnChange = (props: {
    onChange(value: number): void;
    value: number;
}, newValue: number, pxPerUnit: number) => void;
export declare class NeverSnap implements BarSnapBehavior {
    onKeyDown(): undefined;
    onKeyUp(): undefined;
    onChange(props: {
        onChange(value: number): void;
    }, newValue: number): void;
}
export declare class Snap implements BarSnapBehavior {
    private readonly snapPoint;
    private static readonly SNAP_RANGE_IN_PX;
    private valueAtKeyDown?;
    private usingArrowKeys;
    private sideOfSnap?;
    constructor(snapPoint: number);
    readonly onKeyDown: () => boolean;
    readonly onKeyUp: () => void;
    readonly onChange: OnChange;
    private maybeSnapWithMouse;
    private maybeSnapWithKeys;
}
export {};
