export declare function partition<T, U extends T>(xs: Iterable<T>, f: (x: T, i: number) => x is U): [U[], Exclude<T, U>[]];
export declare function partition<T>(xs: Iterable<T>, f: (x: T, i: number) => boolean): [T[], T[]];
