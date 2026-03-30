import type * as React from 'react';
type OptionalRef<T> = React.Ref<T> | undefined;
type TwoOrMore<T> = [T, T, ...T[]];
export declare function composeRefs<T>(...refs: TwoOrMore<React.RefCallback<T>>): React.RefCallback<T>;
export declare function composeRefs<T>(...refs: TwoOrMore<OptionalRef<T>>): React.Ref<T>;
export {};
