interface ResultLike<T, E> {
    readonly ok: boolean;
    map<U>(f: (x: T) => U): Result<U, E>;
    mapError<F>(f: (x: E) => F): Result<T, F>;
}
declare class OkImpl<T> implements ResultLike<T, never> {
    readonly value: T;
    constructor(value: T);
    get ok(): true;
    map<U>(f: (x: T) => U): OkImpl<U>;
    mapError(): this;
}
declare class ErrImpl<E> implements ResultLike<never, E> {
    readonly error: E;
    constructor(error: E);
    get ok(): false;
    map(): this;
    mapError<F>(f: (x: E) => F): ErrImpl<F>;
}
export type Ok<T> = OkImpl<T>;
export type Err<E> = ErrImpl<E>;
export type Result<T, E> = Ok<T> | Err<E>;
export declare const Result: {
    Ok: typeof OkFactory;
    Err: typeof ErrFactory;
};
declare function OkFactory<T>(a: T): Ok<T>;
declare function OkFactory(): Ok<undefined>;
declare function ErrFactory<T>(a: T): Err<T>;
declare function ErrFactory(): Err<undefined>;
export {};
