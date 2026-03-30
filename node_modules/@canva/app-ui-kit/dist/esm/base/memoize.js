import { Preconditions } from './preconditions';
import { Result } from './result';
function isPromiseLike(p) {
  return p != null && p.then != null;
}
export function memoize(
  fn,
  {
    invalidateOnError
  } = {
    invalidateOnError: false
  }
) {
  let promiseDidReject = false;
  let result;
  const memoFn = (...args) => {
    Preconditions.checkArgument(args.length === 0);
    if (result == null || invalidateOnError && (!result.ok || promiseDidReject)) try {
      promiseDidReject = false;
      result = Result.Ok(fn());
      if (isPromiseLike(result.value))
        result.value.then(null, _e => promiseDidReject = true);
    } catch (e) {
      result = Result.Err(e);
    }
    if (result.ok) return result.value;else throw result.error;
  };
  return memoFn;
}
export function memoize1(fn) {
  const cache = new WeakMap();
  const memoFn = (key, ...rest) => {
    Preconditions.checkArgument(rest.length === 0);
    if (!cache.has(key)) cache.set(key, fn(key));
    return cache.get(key);
  };
  return memoFn;
}