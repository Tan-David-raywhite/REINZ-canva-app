import * as React from 'react';
import type { FieldValidationStore } from './field_validation';
export declare class FormValidationStore {
    fields: Map<string, FieldValidationStore<any> | undefined>;
}
export type FormValidationContextType = {
    store: FormValidationStore
} | null;
export declare const FormValidationContext: React.Context<FormValidationContextType>;
export declare function useRegisterFormValidation(
    { name, fieldValidation, }: {
        name: string | undefined
        fieldValidation: FieldValidationStore<any> | undefined
    }
): void;
