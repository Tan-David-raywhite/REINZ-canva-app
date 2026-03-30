"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: Object.getOwnPropertyDescriptor(all, name).get
  });
}
_export(exports, {
  get Validation() {
    return Validation;
  },
  get ValidationState() {
    return ValidationState;
  },
  get asValidator() {
    return asValidator;
  },
  get invalidResult() {
    return invalidResult;
  },
  get run() {
    return run;
  },
  get toValidationResult() {
    return toValidationResult;
  },
  get validResult() {
    return validResult;
  },
  get withError() {
    return withError;
  },
  get withErrorFn() {
    return withErrorFn;
  }
});
const _exists = require('../exists');
const _preconditions = require('../preconditions');
const ValidationState = {
  VALID: "valid",
  INVALID: "invalid"
};
class Validation {
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
      return errors.length ? invalidResult(errors.filter(_exists.exists)) : validResult();
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
function asValidator(predicate, error) {
  return value => {
    const result = predicate(value);
    return toValidationResult(result, error);
  };
}
function withError(fn, error) {
  return value => {
    const result = fn(value);
    if (typeof result === 'boolean') return toValidationResult(result, error);
    switch (result.state) {
      case 'valid':
        return result;
      case 'invalid':
        return invalidResult(error);
      default:
        throw new _preconditions.UnreachableError(result);
    }
  };
}
function withErrorFn(fn, errorFn) {
  return value => {
    const result = fn(value);
    if (typeof result === 'boolean') return toValidationResult(result, errorFn(value));
    switch (result.state) {
      case 'valid':
        return result;
      case 'invalid':
        return invalidResult(errorFn(value));
      default:
        throw new _preconditions.UnreachableError(result);
    }
  };
}
function validResult() {
  return {
    state: "valid"
  };
}
function invalidResult(error) {
  return {
    state: "invalid",
    error
  };
}
const run = (validator, value, error) => {
  const fn = Array.isArray(validator) ? withError(...validator) : validator;
  const result = fn(value);
  if (typeof result === 'boolean') return toValidationResult(result, error);
  if (result.state === 'invalid' && result.error == null) return invalidResult(error);
  return result;
};
function toValidationResult(result, error) {
  return result ? validResult() : invalidResult(error);
}