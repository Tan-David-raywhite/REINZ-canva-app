type Options = {
    leading?: boolean
};
export declare function debounce<A extends any[], R extends any>(func: (...a: A) => R, delay: number, options: Options): (...a: A) => Promise<Awaited<R>>;
export declare function debounce<A extends any[], R extends any>(func: (...a: A) => R, delay: number): (...a: A) => Promise<Awaited<R>>;
export declare function debounce<A extends any[], R extends any>(func: (...a: A) => R, options: Options): (...a: A) => Promise<Awaited<R>>;
export declare function debounce<A extends any[], R extends any>(func: (...a: A) => R): (...a: A) => Promise<Awaited<R>>;
export {};
