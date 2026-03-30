"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserDefinedConfig = validateUserDefinedConfig;
const types_1 = require("./types");
/**
 * @internal
 */
function validateUserDefinedConfig(config) {
    const invalidKeys = Object.keys(config).filter((key) => !(key in types_1.USER_DEFINED_INTL_PROVIDER_CONFIG_KEYS));
    if (invalidKeys.length > 0) {
        throw new Error(`Error: The config only allows to define the following keys: ${Object.keys(types_1.USER_DEFINED_INTL_PROVIDER_CONFIG_KEYS).join(", ")}`);
    }
}
