import { makeObservable } from '../../../../../base/make_observable/make_observable';
import { invalidResult, Validation, validResult } from '../../../../../base/validation/validation';
import { ignoreUndefined } from '../../../../../base/validation/validators';
import * as mobx from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useRegisterFormValidation } from './form_validation_store';
export const valid = validResult;
export function invalid(error) {
    return error != null ? {
        state: 'invalid',
        error
    } : {
        state: 'invalid',
        error: true
    };
}
export class FieldValidationStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            value: mobx.observable.ref,
            validationStarted: mobx.observable.ref,
            validationFn: mobx.observable.ref
        });
    }
    get validator() {
        return this.validationFn;
    }
    setValidator(validator) {
        this.validationFn = validator != null ? getValidationFn(validator) : undefined;
    }
    constructor({ value, validator }){
        this.value = (FieldValidationStore._makeObservable(this), undefined);
        this.validationStarted = false;
        this.value = value;
        this.setValidator(validator);
    }
}
export const setValue = mobx.action((store, value)=>{
    store.value = value;
});
export const startValidation = mobx.action((store)=>{
    store.validationStarted = true;
});
export const getResult = (store)=>{
    return store.validator?.(store.value) ?? validResult();
};
export const getError = (store)=>{
    const result = store.validationStarted ? getResult(store) : undefined;
    if (result?.state === 'invalid') return result.error;
};
export const validateAll = (...stores)=>{
    let isValid = true;
    for (const v of stores){
        if (v == null) continue;
        startValidation(v);
        isValid && (isValid = getResult(v).state === 'valid');
    }
    return isValid;
};
export const isValid = (...stores)=>{
    for (const v of stores){
        if (v != null && getError(v) != null) return false;
    }
    return true;
};
export function useFieldValidation({ store: storeProp, name, value, validator }) {
    const [store, setStore] = React.useState(()=>{
        if (storeProp != null) return storeProp;
        if (validator != null) return new FieldValidationStore({
            value,
            validator
        });
    });
    React.useEffect(()=>{
        if (store == null && validator != null) setStore(new FieldValidationStore({
            value,
            validator
        }));
    }, [
        store,
        validator,
        value
    ]);
    useRegisterFormValidation({
        name,
        fieldValidation: store
    });
    React.useEffect(()=>{
        if (storeProp == null && store != null) mobx.runInAction(()=>{
            store.value = value;
            store.setValidator(validator);
        });
    }, [
        store,
        storeProp,
        value,
        validator
    ]);
    return store;
}
export const WithFieldValidation = observer(function WithFieldValidation({ children, ...rest }) {
    const store = useFieldValidation(rest);
    return children({
        store
    });
});
export function getValidationFn(validator) {
    if (Array.isArray(validator)) {
        if (isValidationMessageTuple(validator))
            return mapErrorMessage(...validator);
        return anyError(validator);
    }
    return validator;
}
function isValidationMessageTuple(validator) {
    return validator.length === 2 && typeof validator[1] === 'string';
}
export const mapErrorMessage = (boolValidator, errorMessage)=>{
    return (value)=>{
        const result = boolValidator(value);
        if (result.state === 'invalid') return invalidResult(errorMessage);
        return result;
    };
};
export const anyError = (validators)=>Validation.all(validators.map((v)=>getValidationFn(v)));
export const ignoreNullValue = ignoreUndefined;
export const ignoreNullValueInFactory = (validatorFactory)=>{
    return (args)=>ignoreUndefined(validatorFactory(args));
};
