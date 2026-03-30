"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Result", {
    enumerable: true,
    get: function() {
        return Result;
    }
});
class OkImpl {
    get ok() {
        return true;
    }
    map(f) {
        return new OkImpl(f(this.value));
    }
    mapError() {
        return this;
    }
    constructor(value){
        this.value = value;
    }
}
class ErrImpl {
    get ok() {
        return false;
    }
    map() {
        return this;
    }
    mapError(f) {
        return new ErrImpl(f(this.error));
    }
    constructor(error){
        this.error = error;
    }
}
const Result = {
    Ok: OkFactory,
    Err: ErrFactory
};
function OkFactory(a) {
    return new OkImpl(a);
}
function ErrFactory(x) {
    return new ErrImpl(x);
}
