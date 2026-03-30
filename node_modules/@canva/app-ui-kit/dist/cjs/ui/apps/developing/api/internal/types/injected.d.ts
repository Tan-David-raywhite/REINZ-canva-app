import type { SdkRegistrationClientInternal } from './sdk_registration/client';
import type { UiKit } from './ui_kit/client';
export type PrivateInjected = {
    __canva__: {
        uiKit: UiKit;
        sdkRegistration: SdkRegistrationClientInternal;
        context: {
            locale?: string;
            country?: string;
        };
    };
};
