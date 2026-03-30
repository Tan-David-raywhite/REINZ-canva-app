export type EasingFunction = (startPosition: number, endPosition: number, progress: number, duration: number) => number;
export declare namespace Easings {
    const quadraticIn: EasingFunction;
    const quadraticOut: EasingFunction;
    const quadraticInOut: EasingFunction;
    const linear: EasingFunction;
    const cubicIn: EasingFunction;
    const cubicOut: EasingFunction;
    const cubicInOut: EasingFunction;
    const quarticIn: EasingFunction;
    const quarticOut: EasingFunction;
    const exponentialOut: EasingFunction;
    const sineIn: EasingFunction;
}
