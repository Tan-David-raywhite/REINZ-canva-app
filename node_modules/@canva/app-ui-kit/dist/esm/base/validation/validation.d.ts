export declare const enum ValidationState {
 VALID = "valid",
 INVALID = "invalid"
}
type ValidResult = {
    state: 'valid';
};
type InvalidResult<E = undefined> = {
    state: 'invalid';
    error?: E;
};
export type ValidationResult<E = undefined> = ValidResult | InvalidResult<E>;
export type PredicateFn<T> = (value: T) => boolean;
export type ValidationFn<T, E = undefined> = (value: T) => ValidationResult<E>;
export type ValidationTuple<T, E> = [ValidationFn<T>, E];
export type Validator<T, E = undefined> = ValidationFn<T, E> | ValidationTuple<T, E>;
export declare class Validation {
    static all<T>(validators: ValidationFn<T>[]): ValidationFn<T>;
    static all<T, E>(validators: Validator<T, E>[]): ValidationFn<T, E>;
    static allErrors<T, E>(validators: Validator<T, E>[]): ValidationFn<T, E[]>;
    static any<T>(validators: ValidationFn<T>[]): ValidationFn<T>;
    static any<T, E>(validators: Validator<T, E>[]): ValidationFn<T, E>;
    static mapAll<T, E = undefined>(validator: PredicateFn<T> | ValidationFn<T, E>, errorFn?: (value: T) => E): ValidationFn<readonly T[], E>;
    static mapAny<T, E = undefined>(validator: PredicateFn<T> | ValidationFn<T, E>, error?: E): ValidationFn<T[], E>;
}
export declare function asValidator<T, E = undefined>(predicate: PredicateFn<T>, error?: E): ValidationFn<T, E>;
export declare function withError<T, E>(fn: PredicateFn<T>, error: E): ValidationFn<T, E>;
export declare function withError<T, E>(fn: ValidationFn<T>, error: E): ValidationFn<T, E>;
export declare function withErrorFn<T, E>(fn: PredicateFn<T>, errorFn: (value: T) => E): ValidationFn<T, E>;
export declare function withErrorFn<T, E>(fn: ValidationFn<T>, errorFn: (value: T) => E): ValidationFn<T, E>;
export declare function validResult(): ValidResult;
export declare function invalidResult(): InvalidResult;
export declare function invalidResult<E>(error: E): InvalidResult<E>;
export declare const run: <T, E = undefined>(validator: PredicateFn<T> | Validator<T, E>, value: T, error?: E) => ValidResult | InvalidResult<E | undefined>;
export declare function toValidationResult<E = undefined>(result: boolean, error?: E): ValidationResult<E>;
export {};
