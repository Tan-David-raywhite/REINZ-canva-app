import * as React from 'react';
interface FocusLockManager {
    kind: 'real' | 'fake'
    surrenderLock: boolean
    isReady: boolean
}
declare class FakeFocusLockManager implements FocusLockManager {
    kind: "fake";
    surrenderLock: boolean;
    isReady: boolean;
}
declare class RealFocusLockManager implements FocusLockManager {
    private readonly parentManager?;
    kind: "real";
    private windowToChildrenManagers;
    private browserWindow;
    private _isReady;
    private _isEnabled;
    constructor(parentManager?: RealFocusLockManager | undefined);
    private get hasEnabledDescendant();
    private get isActiveBranch();
    get surrenderLock(): boolean;
    get isReady(): boolean;
    setReady(): void;
    private get isEnabled();
    setEnabled(enabled: boolean): void;
    setWindow(browserWindow: Window): void;
    addChildManager(newManager: RealFocusLockManager, browserWindow: Window): void;
    removeChildManager(manager: RealFocusLockManager, browserWindow: Window): void;
}
export declare const FocusLockManagerContextProvider: React.Provider<FocusLockManager>;
export declare function useFocusLockManager({ browserWindow, disabled, }: {
    browserWindow: Window | undefined
    disabled: boolean
}): {
    manager: RealFocusLockManager | FakeFocusLockManager;
};
export {};
