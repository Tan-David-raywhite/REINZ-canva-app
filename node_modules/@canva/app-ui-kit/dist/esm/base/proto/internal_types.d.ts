import type { JsonKeyEncodings as PublicJsonKeyEncodings, JsonValueEncodings as PublicJsonValueEncodings } from './public_types';
import { FieldLabel, MessageKind } from './public_types';
export { FieldLabel, MessageKind };
export type JsonKeyEncodings = PublicJsonKeyEncodings;
export type JsonValueEncodings = PublicJsonValueEncodings;
export interface EnumUtil<T> {
    serialize: (enumValue: T) => string;
    serializeWithPath: (enumValue: T, path: string[]) => string;
    deserialize: (enumValue: any) => T;
    deserializeWithPath: (enumValue: any, path: string[]) => T;
    producibleValues(): T[];
    values(): readonly T[];
}
interface ConcreteMessageMetadata {
    fields: Record<string, FieldConfig<any>>;
    fieldsByTag: Record<number, FieldConfig<any> & {
        name: string;
    }>;
    fieldMetadata: FieldMetadata[];
    constantsByTag: Record<number, Extract<FieldConfig<any>, {
        fieldLabel: FieldLabel.CONSTANT;
    }> & {
        name: string;
    }>;
}
export type FieldMetadata = {
    config: FieldConfig<any>;
    name: string;
} & JsonKeyEncodings & Partial<JsonValueEncodings>;
export type MessageMetadata = ({
    kind: MessageKind.CONCRETE;
} & ConcreteMessageMetadata) | ({
    kind: MessageKind.ONEOF;
    discriminatorKey: string;
    discriminatorTag: number;
    nameToObject: Map<string, InternalMessage<any>>;
    defaultObject?: InternalMessage<any>;
    discriminatorJsonKeyEncodings: JsonKeyEncodings;
    serializedToObject: Map<string, InternalMessage<any>>;
    tagToObject: Map<number, {
        Msg: InternalMessage<any>;
        value: string;
    }>;
} & ConcreteMessageMetadata);
export interface ExternalMessage<T> {
    serialize: (t: T) => object;
    deserialize: (serializedDatum: any) => T;
}
export interface InternalMessage<T> extends ExternalMessage<T> {
    init(): MessageMetadata;
    serializeWithPath: (t: T, path: string[]) => object;
    deserializeWithPath: (serializedDatum: any, path: string[]) => T;
    prototype?: object;
}
export type FieldConfig<T, U = T> = {
    tag: number;
    jsonFullKey?: string;
    default?: T;
    _constructorParam?: U;
    defaultValue?: T;
    typeOfValue: string;
} & ({
    fieldLabel: FieldLabel.OPTIONAL | FieldLabel.REPEATED | FieldLabel.REQUIRED;
    obj?: InternalMessage<any> | EnumUtil<any>;
} | {
    fieldLabel: FieldLabel.CONSTANT;
    jsonFullValue?: string;
    value: T;
    defaults: boolean;
    obj?: undefined;
} | {
    fieldLabel: FieldLabel.MAP;
    obj?: InternalMessage<any> | EnumUtil<any>;
    typeOfKey: string;
});
export interface Type<T> {
    typeOfValue: string;
    fixedSize?: number
    defaultValue?: T;
}
export type PropertyTypes<T extends Record<string, FieldConfig<any>>> = {
    [k in keyof T]: T[k] extends FieldConfig<infer U, any> ? U : never;
};
