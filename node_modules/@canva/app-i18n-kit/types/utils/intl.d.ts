import type { IntlShape } from "@formatjs/intl";
/**
 * Returns a `@formatjs/intl` `IntlShape` instance that is pre-configured with the Canva
 * user's locale information, and will load localized messages after the app is translated.
 *
 * NOTE: DO NOT use `createIntl` from `@formatjs/intl` to create your own `IntlShape` instance.
 *
 * @example
 * ```typescript
 * import { initIntl } from '@canva/app-i18n-kit';
 *
 * const intl = initIntl();
 *
 * const formattedMessage = intl.formatMessage({ defaultMessage: 'Hello!', description: 'A greeting message' });
 * const formattedNumber = intl.formatNumber(1234.56);
 * const formattedDate = intl.formatDate(new Date());
 * ```
 *
 * @returns {IntlShape} intl instance
 */
export declare function initIntl(): IntlShape;
