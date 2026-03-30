export declare abstract class TypeXializer<T> {
    protected type: string;
    constructor(type: string);
    protected isT(val: any): val is T;
    protected isTs(val: any): val is T[];
}
