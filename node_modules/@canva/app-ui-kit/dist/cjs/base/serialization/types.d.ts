export type Serializable = boolean | number | string | null | undefined | object;
export type ObjectSerializer<T> = (t: T) => object;
export type StringEnumSerializer<T> = (enumValue: T) => string;
export type ObjectDeserializer<T> = (serializedDatum: object) => T;
export type StringEnumDeserializer<T> = (enumValue: string) => T;
