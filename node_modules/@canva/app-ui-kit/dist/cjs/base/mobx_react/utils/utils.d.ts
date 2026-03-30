export declare function shallowEqual(objA: any, objB: any): boolean;
export interface Mixins extends Record<string, any> {
    locks: number;
    methods: Function[];
}
export declare function patch(target: any, methodName: string, mixinMethod: Function): void;
