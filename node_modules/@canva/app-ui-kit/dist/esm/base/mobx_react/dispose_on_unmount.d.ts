import * as React from 'react';
type Disposer = () => void;
type PatchedReactComponent = React.Component<any, any> & {
    [instStoreKey]?: Disposer[];
};
export declare const instStoreKey: unique symbol;
export declare function disposeOnUnmount(target: PatchedReactComponent, propertyFunction: Disposer): Disposer;
export declare function disposeOnUnmount(target: PatchedReactComponent, propertyFunctions: Disposer[]): Disposer[];
export {};
