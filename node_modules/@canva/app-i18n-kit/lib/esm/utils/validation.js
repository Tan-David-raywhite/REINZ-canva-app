import { USER_DEFINED_INTL_PROVIDER_CONFIG_KEYS } from "./types";
/**
 * @internal
 */
export function validateUserDefinedConfig(config) {
    const invalidKeys = Object.keys(config).filter((key) => !(key in USER_DEFINED_INTL_PROVIDER_CONFIG_KEYS));
    if (invalidKeys.length > 0) {
        throw new Error(`Error: The config only allows to define the following keys: ${Object.keys(USER_DEFINED_INTL_PROVIDER_CONFIG_KEYS).join(", ")}`);
    }
}
