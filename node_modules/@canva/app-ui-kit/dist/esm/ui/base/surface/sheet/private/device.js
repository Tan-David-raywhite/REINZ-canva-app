import { isPortraitMobileScreen, useIsPortraitMobileScreen } from '../../../device_capabilities/screen';
export function useTypicalSheetAdaptation() {
    return useIsPortraitMobileScreen();
}
export function getTypicalSheetAdaptation() {
    return isPortraitMobileScreen();
}
