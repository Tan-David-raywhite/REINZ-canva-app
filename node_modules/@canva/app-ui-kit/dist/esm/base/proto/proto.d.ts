import type { EnumUtil, ExternalMessage, FieldConfig, InternalMessage, PropertyTypes } from './internal_types';
export type { EnumUtil };
export type OneofMessage<T> = InternalMessage<T>;
export interface MessageCtr<T extends Record<string, FieldConfig<any>>> extends InternalMessage<any> {
    new (opts?: ConstructorParams<T>): PropertyTypes<T>;
    createUnchecked(opts?: ConstructorParams<T>): PropertyTypes<T>;
}
interface RequiredFactory<T> {
    (tag: number): FieldConfig<T>;
    (tag: number, def: T): FieldConfig<T, T | undefined>;
    (jsonFullKey: string, tag: number): FieldConfig<T>;
    (jsonFullKey: string, tag: number, def: T): FieldConfig<T, T | undefined>;
}
interface OptionalField<T> {
    (tag: number): FieldConfig<T | undefined>;
    (jsonFullKey: string, tag: number): FieldConfig<T | undefined>;
}
interface RepeatedField<T> {
    (tag: number): FieldConfig<readonly T[], readonly T[] | undefined>;
    (jsonFullKey: string, tag: number): FieldConfig<readonly T[], readonly T[] | undefined>;
}
type MapField<K, V> = {
    (tag: number): FieldConfig<ReadonlyMap<K, V>, ReadonlyMap<K, V> | undefined>;
    (jsonFullKey: string, tag: number): FieldConfig<ReadonlyMap<K, V>, ReadonlyMap<K, V> | undefined>;
};
type MapFieldObject<K> = {
    <V>(tag: number, Msg: ExternalMessage<V>): FieldConfig<ReadonlyMap<K, V>, ReadonlyMap<K, V> | undefined>;
    <V>(jsonFullKey: string, tag: number, Msg: ExternalMessage<V>): FieldConfig<ReadonlyMap<K, V>, ReadonlyMap<K, V> | undefined>;
};
type MapFieldEnum<K> = {
    <V>(tag: number, EnumUtil: EnumUtil<V>): FieldConfig<ReadonlyMap<K, V>, ReadonlyMap<K, V> | undefined>;
    <V>(jsonFullKey: string, tag: number, EnumUtil: EnumUtil<V>): FieldConfig<ReadonlyMap<K, V>, ReadonlyMap<K, V> | undefined>;
};
export declare class Proto {
    static constantString<T extends string>(jsonMiniKey: string, tag: number, value: T): FieldConfig<T, T | undefined>;
    static constantString<T extends string>(jsonFullKey: string, jsonFullValue: string, tag: number, value: T): FieldConfig<T, T | undefined>;
    static constantStringWithDefault<T extends string>(jsonMiniKey: string, tag: number, value: T): FieldConfig<T, T | undefined>;
    static constantStringWithDefault<T extends string>(jsonFullKey: string, jsonFullValue: string, tag: number, value: T): FieldConfig<T, T | undefined>;
    static readonly requiredDouble: RequiredFactory<number>;
    static readonly requiredInt32: RequiredFactory<number>;
    static readonly requiredInt64: RequiredFactory<number>;
    static readonly optionalDouble: OptionalField<number>;
    static readonly optionalInt32: OptionalField<number>;
    static readonly optionalInt64: OptionalField<number>;
    static readonly repeatedDouble: RepeatedField<number>;
    static readonly repeatedInt32: RepeatedField<number>;
    static readonly repeatedInt64: RepeatedField<number>;
    static readonly requiredString: RequiredFactory<string>;
    static readonly optionalString: OptionalField<string>;
    static readonly repeatedString: RepeatedField<string>;
    static readonly requiredBoolean: RequiredFactory<boolean>;
    static readonly optionalBoolean: OptionalField<boolean>;
    static readonly repeatedBoolean: RepeatedField<boolean>;
    static readonly requiredBytes: RequiredFactory<Uint8Array>;
    static readonly optionalBytes: OptionalField<Uint8Array>;
    static readonly repeatedBytes: RepeatedField<Uint8Array>;
    static requiredObject<T>(tag: number, obj: ExternalMessage<T>): FieldConfig<T>;
    static requiredObject<T>(jsonFullKey: string, tag: number, obj: ExternalMessage<T>): FieldConfig<T>;
    static optionalObject<T>(tag: number, obj: ExternalMessage<T>): FieldConfig<T | undefined, T | undefined>;
    static optionalObject<T>(jsonFullKey: string, tag: number, obj: ExternalMessage<T>): FieldConfig<T | undefined, T | undefined>;
    static repeatedObject<T>(tag: number, obj: ExternalMessage<T>): FieldConfig<readonly T[], readonly T[] | undefined>;
    static repeatedObject<T>(jsonFullKey: string, tag: number, obj: ExternalMessage<T>): FieldConfig<readonly T[], readonly T[] | undefined>;
    static requiredStringEnum<T>(tag: number, obj: EnumUtil<T>): FieldConfig<T>;
    static requiredStringEnum<T>(tag: number, obj: EnumUtil<T>, def: T): FieldConfig<T, T | undefined>;
    static requiredStringEnum<T>(jsonFullKey: string, tag: number, obj: EnumUtil<T>): FieldConfig<T>;
    static requiredStringEnum<T>(jsonFullKey: string, tag: number, obj: EnumUtil<T>, def: T): FieldConfig<T, T | undefined>;
    static optionalStringEnum<T>(tag: number, obj: EnumUtil<T>): FieldConfig<T | undefined, T | undefined>;
    static optionalStringEnum<T>(jsonFullKey: string, tag: number, obj: EnumUtil<T>): FieldConfig<T | undefined, T | undefined>;
    static repeatedStringEnum<T>(tag: number, obj: EnumUtil<T>): FieldConfig<readonly T[], readonly T[] | undefined>;
    static repeatedStringEnum<T>(jsonFullKey: string, tag: number, obj: EnumUtil<T>): FieldConfig<readonly T[], readonly T[] | undefined>;
    static readonly booleanInt64Map: MapField<boolean, number>;
    static readonly int32Int32Map: MapField<number, number>;
    static readonly int32Int64Map: MapField<number, number>;
    static readonly int32BoolMap: MapField<number, boolean>;
    static readonly int32DoubleMap: MapField<number, number>;
    static readonly int32StringMap: MapField<number, string>;
    static readonly int32StringEnumMap: MapFieldEnum<number>;
    static readonly int32ObjectMap: MapFieldObject<number>;
    static readonly int32BytesMap: MapField<number, Uint8Array<ArrayBufferLike>>;
    static readonly int64Int32Map: MapField<number, number>;
    static readonly int64Int64Map: MapField<number, number>;
    static readonly int64BooleanMap: MapField<number, boolean>;
    static readonly int64DoubleMap: MapField<number, number>;
    static readonly int64StringMap: MapField<number, string>;
    static readonly int64StringEnumMap: MapFieldEnum<number>;
    static readonly int64ObjectMap: MapFieldObject<number>;
    static readonly int64BytesMap: MapField<number, Uint8Array<ArrayBufferLike>>;
    static readonly doubleInt32Map: MapField<number, number>;
    static readonly doubleInt64Map: MapField<number, number>;
    static readonly doubleBoolMap: MapField<number, boolean>;
    static readonly doubleDoubleMap: MapField<number, number>;
    static readonly doubleStringMap: MapField<number, string>;
    static readonly doubleStringEnumMap: MapFieldEnum<number>;
    static readonly doubleObjectMap: MapFieldObject<number>;
    static readonly doubleBytesMap: MapField<number, Uint8Array<ArrayBufferLike>>;
    static readonly stringInt32Map: MapField<string, number>;
    static readonly stringInt64Map: MapField<string, number>;
    static readonly stringBooleanMap: MapField<string, boolean>;
    static readonly stringDoubleMap: MapField<string, number>;
    static readonly stringStringMap: MapField<string, string>;
    static readonly stringStringEnumMap: MapFieldEnum<string>;
    static readonly stringObjectMap: MapFieldObject<string>;
    static readonly stringBytesMap: MapField<string, Uint8Array<ArrayBufferLike>>;
    static createMessage<T extends Record<string, FieldConfig<any, any>>>(
        schema: () => T,
        options?: {
            unproducible?: true;
            dualDeserializationConfig?: DualDeserializationConfig;
        }
    ): MessageCtr<T>;
    static createOneof<T extends Record<string, any>>(
        schema: () => Record<string, (number | ExternalMessage<any>)[]>,
        commonFields: () => Record<string, FieldConfig<unknown>>,
        options?: {
            unproducible?: true;
            dualDeserializationConfig?: DualDeserializationConfig;
            defaultCase?: () => ExternalMessage<any>;
        }
    ): OneofMessage<T>;
    static createEnumUtil<T>(
        schema: () => (number | string | {
            unproducible: true;
        })[],
        baseNumber?: number,
        options?: {
            dualDeserializationConfig?: DualDeserializationConfig;
        }
    ): EnumUtil<T>;
}
type ConstructorParams<T extends Record<string, FieldConfig<any>>> = {
    [k in OptionalKeys<T>]?: T[k] extends FieldConfig<any, infer U> ? U : never;
} & {
    [k in RequiredKeys<T>]: T[k] extends FieldConfig<any, infer U> ? U : never;
};
type OptionalKeys<T extends Record<string, FieldConfig<any>>> = Exclude<{
    [k in keyof T]: T[k] extends FieldConfig<infer X, infer U> ? undefined extends U ? k : X extends number | boolean ? k : never : never;
}[keyof T], undefined>;
type RequiredKeys<T extends Record<string, FieldConfig<any>>> = {
    [k in keyof T]: T[k] extends FieldConfig<infer X, infer U> ? undefined extends U ? never : X extends number | boolean ? never : k : never;
}[keyof T];
export declare const enum DualDeserializationConfig {
    MINI_PRIMARY_FULL_SECONDARY = 0,
    FULL_PRIMARY_MINI_SECONDARY = 1
}
