export declare class IdGenerator {
    private readonly prefix;
    private idCount;
    constructor(prefix?: string);
    next(): string;
}
