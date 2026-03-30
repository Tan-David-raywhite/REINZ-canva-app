export type MemoizedFunction<T, P extends unknown[] = []> = ((...args: P) => T) & {
    __memoized: never;
};
type MemoizeOpts = {
    readonly invalidateOnError: boolean;
};
export declare function memoize<T>(fn: () => T, { invalidateOnError }?: Readonly<MemoizeOpts>): MemoizedFunction<T>;
export declare function memoize1<K extends WeakKey, V>(fn: (k: K, ...rest: []) => V): MemoizedFunction<V, [K]>;
export {};
