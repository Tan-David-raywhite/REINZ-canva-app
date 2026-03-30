import type { ValidationFn as BaseValidatorFn, ValidationResult as BaseValidationResult } from '../../../../../base/validation/validation';
import { validResult } from '../../../../../base/validation/validation';
import { ignoreUndefined } from '../../../../../base/validation/validators';
import * as React from 'react';
export type ValidationError = string | string[];
export type ValidationFn<T> = BaseValidatorFn<T | undefined, ValidationError>;
export type BooleanValidationFn<T> = BaseValidatorFn<T | undefined, true>;
export type ValidationMessageTuple<T> = [BooleanValidationFn<T>, string];
export type Validator<T> = ValidationFn<T> | ValidationMessageTuple<T> | (ValidationFn<T> | ValidationMessageTuple<T>)[];
export type ValidationResult = BaseValidationResult<ValidationError>;
export type BooleanValidationResult = BaseValidationResult<true>;
export declare const valid: typeof validResult;
export declare function invalid(): {
    state: 'invalid';
    error: true;
};
export declare function invalid<E>(error: E): {
    state: 'invalid';
    error: E;
};
export declare class FieldValidationStore<T> {
    value: T | undefined;
    validationStarted: boolean;
    private validationFn;
    constructor({ value, validator }: {
        value?: T;
        validator?: Validator<T>;
    });
    get validator(): ValidationFn<T> | undefined;
    setValidator(validator: Validator<T> | undefined): void;
}
export declare const setValue: <T>(store: FieldValidationStore<T>, value: T | undefined) => void;
export declare const startValidation: <T>(store: FieldValidationStore<T>) => void;
export declare const getResult: <T>(store: FieldValidationStore<T>) => BaseValidationResult<ValidationError>;
export declare const getError: <T>(store: FieldValidationStore<T>) => ValidationError | undefined;
export declare const validateAll: (...stores: (FieldValidationStore<any> | undefined)[]) => boolean;
export declare const isValid: (...stores: (FieldValidationStore<any> | undefined)[]) => boolean;
type UseFieldValidationProps<T> = {
    store?: FieldValidationStore<T>
    name: string | undefined
    value?: T
    validator?: Validator<T>
};
export declare function useFieldValidation<T>({ store: storeProp, name, value, validator, }: UseFieldValidationProps<T>): FieldValidationStore<T> | undefined;
export type WithFieldValidationProps<T> = {
    children: (props: {
        store?: FieldValidationStore<T>;
    }) => React.ReactNode
} & UseFieldValidationProps<T>;
export declare const WithFieldValidation: <T>(arg: WithFieldValidationProps<T>) => React.ReactNode;
export declare function getValidationFn<T>(validator: Validator<T>): ValidationFn<T>;
export declare const mapErrorMessage: <T>(boolValidator: BooleanValidationFn<T>, errorMessage: string) => ValidationFn<T>;
export declare const anyError: <T>(validators: (ValidationFn<T> | ValidationMessageTuple<T>)[]) => ValidationFn<T>;
export declare const ignoreNullValue: typeof ignoreUndefined;
export declare const ignoreNullValueInFactory: <T, E, A>(validatorFactory: (args: A) => BaseValidatorFn<T, E>) => (args: A) => BaseValidatorFn<T | undefined, E>;
export {};
