import type { IComputedValue } from 'mobx';
type ScreenWithDimensions = {
    width: number;
    height: number;
};
type WindowWithDimensions = {
    screen: ScreenWithDimensions;
};
type NavigatorWithUA = {
    userAgent: string;
};
export declare function supportsSafeAreaInsetValues(navigator?: NavigatorWithUA | undefined): boolean;
export declare function supportsSafeAreaInsetTopValue(navigator?: NavigatorWithUA | undefined): boolean;
export declare function isPortraitMobileScreen(screenWidth?: number, width?: number): boolean;
export declare function useIsPortraitMobileScreen(): boolean;
export declare function getScreenSize(
 window?: WindowWithDimensions | undefined,
 navigator?: NavigatorWithUA | undefined
): ScreenWithDimensions;
export declare const computedScreenSize: IComputedValue<ScreenWithDimensions>;
export {};
