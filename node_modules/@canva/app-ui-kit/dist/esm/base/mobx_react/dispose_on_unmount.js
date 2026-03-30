import * as React from 'react';
import { patch } from './utils/utils';
export const instStoreKey = Symbol('disposeOnUnmountInst');
function runDisposersOnWillUnmount() {
    [
        ...(this[instStoreKey] || [])
    ].forEach((prop)=>{
        if (prop != null) prop();
    });
    if (this[instStoreKey])
        this[instStoreKey].length = 0;
}
export function disposeOnUnmount(target, propertyFunctions) {
    if (Array.isArray(propertyFunctions))
    return propertyFunctions.map((fn)=>disposeOnUnmount(target, fn));
    const c = Object.getPrototypeOf(target).constructor;
    const c2 = Object.getPrototypeOf(target.constructor);
    const c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));
    if (!(c === React.Component || c === React.PureComponent || c2 === React.Component || c2 === React.PureComponent || c3 === React.Component || c3 === React.PureComponent)) throw new Error('[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.');
    const componentWasAlreadyModified = !!target[instStoreKey];
    const store = target[instStoreKey] || (target[instStoreKey] = []);
    store.push(propertyFunctions);
    if (!componentWasAlreadyModified)
        patch(target, 'componentWillUnmount', runDisposersOnWillUnmount);
    return propertyFunctions;
}
