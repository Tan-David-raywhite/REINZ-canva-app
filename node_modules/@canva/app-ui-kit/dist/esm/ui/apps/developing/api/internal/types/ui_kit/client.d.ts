import type { RegisterAppUiKitVersionRequest, UiContext, UiContextChangeHandler } from './types';
export interface UiKit {
    getUiKitVersion(): string | undefined;
    onUiKitVersionRegistered(callback: (uiKitVersion: string) => void): () => void;
    getUiContext(): Promise<UiContext>;
    onUiContextChange(callback: UiContextChangeHandler): () => void;
    registerAppUiKitVersion(req: RegisterAppUiKitVersionRequest): Promise<void>;
}
