import { makeObservable } from '../../../../../base/make_observable/make_observable';
import * as mobx from 'mobx';
import * as React from 'react';
export class FormValidationStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            fields: mobx.observable.shallow
        });
    }
    constructor(){
        this.fields = (FormValidationStore._makeObservable(this), new Map());
    }
}
const registerField = mobx.action((store, fieldName, fieldValidationStore)=>{
    store.fields.set(fieldName, fieldValidationStore);
});
const deregisterField = mobx.action((store, fieldName)=>{
    store.fields.delete(fieldName);
});
export const FormValidationContext = React.createContext(null);
export function useRegisterFormValidation({ name, fieldValidation }) {
    const store = React.useContext(FormValidationContext)?.store;
    React.useEffect(()=>{
        if (store == null || name == null) return;
        registerField(store, name, fieldValidation);
        return ()=>{
            deregisterField(store, name);
        };
    }, [
        fieldValidation,
        name,
        store
    ]);
}
