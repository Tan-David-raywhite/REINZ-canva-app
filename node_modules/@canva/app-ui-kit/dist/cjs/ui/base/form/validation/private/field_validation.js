"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get FieldValidationStore () {
        return FieldValidationStore;
    },
    get WithFieldValidation () {
        return WithFieldValidation;
    },
    get anyError () {
        return anyError;
    },
    get getError () {
        return getError;
    },
    get getResult () {
        return getResult;
    },
    get getValidationFn () {
        return getValidationFn;
    },
    get ignoreNullValue () {
        return ignoreNullValue;
    },
    get ignoreNullValueInFactory () {
        return ignoreNullValueInFactory;
    },
    get invalid () {
        return invalid;
    },
    get isValid () {
        return isValid;
    },
    get mapErrorMessage () {
        return mapErrorMessage;
    },
    get setValue () {
        return setValue;
    },
    get startValidation () {
        return startValidation;
    },
    get useFieldValidation () {
        return useFieldValidation;
    },
    get valid () {
        return valid;
    },
    get validateAll () {
        return validateAll;
    }
});
const _make_observable = require('../../../../../base/make_observable/make_observable');
const _validation = require('../../../../../base/validation/validation');
const _validators = require('../../../../../base/validation/validators');
const _mobx = _interop_require_wildcard(require("mobx"));
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _form_validation_store = require("./form_validation_store");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const valid = _validation.validResult;
function invalid(error) {
    return error != null ? {
        state: 'invalid',
        error
    } : {
        state: 'invalid',
        error: true
    };
}
class FieldValidationStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            value: _mobx.observable.ref,
            validationStarted: _mobx.observable.ref,
            validationFn: _mobx.observable.ref
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
const setValue = _mobx.action((store, value)=>{
    store.value = value;
});
const startValidation = _mobx.action((store)=>{
    store.validationStarted = true;
});
const getResult = (store)=>{
    return store.validator?.(store.value) ?? (0, _validation.validResult)();
};
const getError = (store)=>{
    const result = store.validationStarted ? getResult(store) : undefined;
    if (result?.state === 'invalid') return result.error;
};
const validateAll = (...stores)=>{
    let isValid = true;
    for (const v of stores){
        if (v == null) continue;
        startValidation(v);
        isValid && (isValid = getResult(v).state === 'valid');
    }
    return isValid;
};
const isValid = (...stores)=>{
    for (const v of stores){
        if (v != null && getError(v) != null) return false;
    }
    return true;
};
function useFieldValidation({ store: storeProp, name, value, validator }) {
    const [store, setStore] = _react.useState(()=>{
        if (storeProp != null) return storeProp;
        if (validator != null) return new FieldValidationStore({
            value,
            validator
        });
    });
    _react.useEffect(()=>{
        if (store == null && validator != null) setStore(new FieldValidationStore({
            value,
            validator
        }));
    }, [
        store,
        validator,
        value
    ]);
    (0, _form_validation_store.useRegisterFormValidation)({
        name,
        fieldValidation: store
    });
    _react.useEffect(()=>{
        if (storeProp == null && store != null) _mobx.runInAction(()=>{
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
const WithFieldValidation = (0, _mobxreactlite.observer)(function WithFieldValidation({ children, ...rest }) {
    const store = useFieldValidation(rest);
    return children({
        store
    });
});
function getValidationFn(validator) {
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
const mapErrorMessage = (boolValidator, errorMessage)=>{
    return (value)=>{
        const result = boolValidator(value);
        if (result.state === 'invalid') return (0, _validation.invalidResult)(errorMessage);
        return result;
    };
};
const anyError = (validators)=>_validation.Validation.all(validators.map((v)=>getValidationFn(v)));
const ignoreNullValue = _validators.ignoreUndefined;
const ignoreNullValueInFactory = (validatorFactory)=>{
    return (args)=>(0, _validators.ignoreUndefined)(validatorFactory(args));
};
