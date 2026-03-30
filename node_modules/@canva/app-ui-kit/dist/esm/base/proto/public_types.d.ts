export declare const enum MessageKind {
    CONCRETE = 1,
    ONEOF = 2
}
export type PublicMessageCtr<Opts, MessageKind> = {
    new (opts: Opts): MessageKind;
    createUnchecked?(opts: Opts): MessageKind;
    serialize(m: MessageKind): object;
    deserialize(o: object): MessageKind;
};
export type MessageFromCtr<T> = T extends PublicMessageCtr<any, infer S> ? S : never;
export declare const enum FieldLabel {
    CONSTANT = 1,
    REQUIRED = 2,
    OPTIONAL = 3,
    REPEATED = 4,
    MAP = 5
}
export interface JsonKeyEncodings {
    primaryJsonKey: string;
    secondaryJsonKey?: string;
}
export interface JsonValueEncodings {
    primaryJsonValue: string;
    secondaryJsonValue?: string;
}
export type PublicMessageMetadata = {
    kind: MessageKind.CONCRETE;
    fields: PublicFieldMetadata[];
} | {
    kind: MessageKind.ONEOF;
    cases: () => Record<string, PublicMessageMetadata>;
    discriminatorJsonKeyEncodings: JsonKeyEncodings;
};
export type PublicEnumMetadata = {
    values: Record<number, string>;
};
export declare const enum FieldKind {
    PRIMITIVE = 1,
    MESSAGE = 2,
    ENUM = 3
}
export type FieldValueMetadata = {
    kind: FieldKind.PRIMITIVE;
} | {
    kind: FieldKind.MESSAGE;
    message: PublicMessageMetadata;
} | {
    kind: FieldKind.ENUM;
    enum: PublicEnumMetadata;
};
export type PublicFieldMetadata = {
    label: FieldLabel;
    valueMetadata: () => FieldValueMetadata;
    name: string;
} & JsonKeyEncodings & Partial<JsonValueEncodings>;
