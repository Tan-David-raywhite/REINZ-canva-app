type NavigatorWithUA = {
    userAgent: string;
    maxTouchPoints?: number;
};
export declare const Internal: {
    isIOSDevice(navigator?: NavigatorWithUA | undefined): boolean
    isIpad(navigator?: NavigatorWithUA | undefined): boolean
    isAndroidDevice(navigator?: NavigatorWithUA | undefined): boolean
};
export {};
