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
    get assertDefined () {
        return assertDefined;
    },
    get equals () {
        return equals;
    },
    get ignoreUndefined () {
        return ignoreUndefined;
    },
    get isDefined () {
        return isDefined;
    },
    get not () {
        return not;
    }
});
const _preconditions = require('../preconditions');
const _validation = require("./validation");
function not(fn, error) {
    return (value)=>{
        const result = fn(value);
        if (typeof result === 'boolean') return (0, _validation.toValidationResult)(!result, error);
        switch(result.state){
            case 'valid':
                return (0, _validation.invalidResult)(error);
            case 'invalid':
                return (0, _validation.validResult)();
            default:
                throw new _preconditions.UnreachableError(result);
        }
    };
}
const isDefined = (0, _validation.asValidator)((value)=>value != null);
function equals(expectedValue, error) {
    return (0, _validation.asValidator)((value)=>value === (typeof expectedValue === 'function' ? expectedValue() : expectedValue), error);
}
function ignoreUndefined(validator, error) {
    return (value)=>value == null ? (0, _validation.validResult)() : (0, _validation.run)(validator, value, error);
}
function assertDefined(validator, error) {
    return (value)=>value == null ? (0, _validation.invalidResult)(error) : (0, _validation.run)(validator, value);
}
