import { UnreachableError } from '../preconditions';
import { asValidator, invalidResult, run, toValidationResult, validResult } from './validation';
export function not(fn, error) {
    return (value)=>{
        const result = fn(value);
        if (typeof result === 'boolean') return toValidationResult(!result, error);
        switch(result.state){
            case 'valid':
                return invalidResult(error);
            case 'invalid':
                return validResult();
            default:
                throw new UnreachableError(result);
        }
    };
}
export const isDefined = asValidator((value)=>value != null);
export function equals(expectedValue, error) {
    return asValidator((value)=>value === (typeof expectedValue === 'function' ? expectedValue() : expectedValue), error);
}
export function ignoreUndefined(validator, error) {
    return (value)=>value == null ? validResult() : run(validator, value, error);
}
export function assertDefined(validator, error) {
    return (value)=>value == null ? invalidResult(error) : run(validator, value);
}
