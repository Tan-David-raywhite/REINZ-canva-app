export type FlagValue<T = boolean | number | string> = T extends boolean ? boolean : T extends number ? number : T extends string ? string : never;
export type Flags = Record<string, FlagValue>;
export type Interceptor = (name: string, defaultValue: FlagValue, flags: Flags | undefined) => FlagValue | undefined | void;
export declare const urlParamPrefix = "flag.";
export declare function featureFlag<T extends FlagValue>(name: string, defaultValue: T): FlagValue<T>;
export declare function DO_NOT_USE_hashFlagName(identifier: string): string;
export declare function DO_NOT_USE_addInterceptor(interceptor: Interceptor, onDispose?: () => void): () => void;
