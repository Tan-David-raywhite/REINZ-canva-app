export type AvatarBundle = {
    readonly sizes: ReadonlyMap<string, AvatarBundleImage>;
    readonly isDefault?: boolean;
};
export type Avatar = {
    readonly images: readonly AvatarImage[];
    readonly isDefault?: boolean;
};
export type AvatarBundleImage = {
    readonly size: number;
    readonly url: string;
};
export type AvatarImage = {
    readonly width: number;
    readonly url: string;
};
