import type { PublicMessageCtr } from '../proto/public_types';
import type { ObjectDeserializer } from '../serialization/types';
export type BootstrapKey = GlobalBootstrapKey;
export type BootstrapRecord<T> = GlobalBootstrapRecord<T>;
export type SerializedBootstrap = GlobalSerializedBootstrap;
export declare function declareBootstrap<K extends string, MessageKind extends object>(bootstrapKey: K, bootstrapClass: PublicMessageCtr<any, MessageKind>): BootstrapDeclaration<K, MessageKind>;
export type BootstrapDeclaration<K extends string, MessageKind extends object> = {
    bootstrapKey: K;
    bootstrapClass: PublicMessageCtr<any, MessageKind>;
};
export declare function loadFromWindow<T>(key: BootstrapKey, deserializer: ObjectDeserializer<T>, opts?: {
    applyOverrides?: boolean;
    retainOnWindow?: boolean;
}): T;
export declare function loadFromBootstrapContainer<T, K extends BootstrapKey>(container: Pick<SerializedBootstrap, K>, key: K, deserializer: ObjectDeserializer<T>, overrides?: Map<string, string>): T;
export declare function clearCacheForDevelopment(): void;
export declare function urlParamPrefix(key: GlobalBootstrapKey): string;
export declare function getBootstrapOverridesFromUrlParams(urlQuery: string): Partial<BootstrapRecord<Map<string, string>>>;
export declare function coerce(s: string, hint?: any): any;
