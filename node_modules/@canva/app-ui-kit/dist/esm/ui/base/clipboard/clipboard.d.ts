export declare const Internal: {
    copyApi: (str: string, clipboard: Clipboard) => Promise<void>;
    copyLegacy: (str: string, document: Pick<Document, "createElement" | "body" | "execCommand" | "createRange" | "getSelection">) => Promise<void>;
};
export type Copy = (str: string, _window?: Window) => Promise<void>;
export declare function createClipboard(): Copy;
