import { TypeXializer } from './type_xialiser';
import type { Serializable } from './types';
export declare class TypeDeserializer<T extends Serializable> extends TypeXializer<T> {
    static STRING: TypeDeserializer<string>;
    static BOOLEAN: TypeDeserializer<boolean>;
    static NUMBER: TypeDeserializer<number>;
    static OBJECT: TypeDeserializer<object>;
    required(name: string, o: object): T;
    optional(name: string, o: object): T | undefined;
    repeated(name: string, o: object): readonly T[] | undefined;
}
