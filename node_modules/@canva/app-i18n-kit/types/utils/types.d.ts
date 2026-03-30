import type { IntlConfig } from "@formatjs/intl";
export declare const USER_DEFINED_INTL_PROVIDER_CONFIG_KEYS: {
  onError: boolean;
};
export type UserDefinedIntlProviderConfigKeys =
  keyof typeof USER_DEFINED_INTL_PROVIDER_CONFIG_KEYS;
export type UserDefinedIntlConfig = Pick<
  IntlConfig,
  UserDefinedIntlProviderConfigKeys
>;
