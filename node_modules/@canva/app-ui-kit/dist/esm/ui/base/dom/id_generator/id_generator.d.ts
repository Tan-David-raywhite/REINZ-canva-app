export type GeneratedId = string & {
    __private: never;
};
export declare const domIdGenerator: {
    next: () => GeneratedId;
};
