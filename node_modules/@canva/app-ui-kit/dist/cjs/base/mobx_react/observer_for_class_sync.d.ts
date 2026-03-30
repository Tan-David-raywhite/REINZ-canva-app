import type { ComponentClass } from 'react';
declare const isMobXReactObserverSymbol: unique symbol;
export declare function observerForClass<T extends ComponentClass<any> & {
    [isMobXReactObserverSymbol]?: boolean;
}>(ClassComponent: T): T;
export {};
