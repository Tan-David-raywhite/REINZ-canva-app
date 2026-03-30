import { exists } from '../exists';
import { UnreachableError } from '../preconditions';
export const ValidationState = {
  VALID: "valid",
  INVALID: "invalid"
};
export class Validation {
  static all(validators) {
    return value => {
      for (const validator of validators) {
        const result = run(validator, value);
        if (result.state === 'invalid') return result;
      }
      return validResult();
    };
  }
  static allErrors(validators) {
    return value => {
      const errors = [];
      for (const validator of validators) {
        const result = run(validator, value);
        if (result.state === 'invalid') errors.push(result.error);
      }
      return errors.length ? invalidResult(errors.filter(exists)) : validResult();
    };
  }
  static any(validators) {
    return value => {
      for (const validator of validators) {
        const result = run(validator, value);
        if (result.state === 'valid') return result;
      }
      return invalidResult();
    };
  }
  static mapAll(validator, errorFn) {
    return values => {
      for (const value of values) {
        const result = run(validator, value);
        if (result.state === 'invalid') return errorFn != null ? invalidResult(errorFn(value)) : result;
      }
      return validResult();
    };
  }
  static mapAny(validator, error) {
    return values => {
      for (const value of values) {
        const result = run(validator, value);
        if (result.state === 'valid') return result;
      }
      return invalidResult(error);
    };
  }
}
export function asValidator(predicate, error) {
  return value => {
    const result = predicate(value);
    return toValidationResult(result, error);
  };
}
export function withError(fn, error) {
  return value => {
    const result = fn(value);
    if (typeof result === 'boolean') return toValidationResult(result, error);
    switch (result.state) {
      case 'valid':
        return result;
      case 'invalid':
        return invalidResult(error);
      default:
        throw new UnreachableError(result);
    }
  };
}
export function withErrorFn(fn, errorFn) {
  return value => {
    const result = fn(value);
    if (typeof result === 'boolean') return toValidationResult(result, errorFn(value));
    switch (result.state) {
      case 'valid':
        return result;
      case 'invalid':
        return invalidResult(errorFn(value));
      default:
        throw new UnreachableError(result);
    }
  };
}
export function validResult() {
  return {
    state: "valid"
  };
}
export function invalidResult(error) {
  return {
    state: "invalid",
    error
  };
}
export const run = (validator, value, error) => {
  const fn = Array.isArray(validator) ? withError(...validator) : validator;
  const result = fn(value);
  if (typeof result === 'boolean') return toValidationResult(result, error);
  if (result.state === 'invalid' && result.error == null) return invalidResult(error);
  return result;
};
export function toValidationResult(result, error) {
  return result ? validResult() : invalidResult(error);
}