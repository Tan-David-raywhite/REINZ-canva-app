import { createIntl, createIntlCache } from "@formatjs/intl";
import { createFormatMessage } from "../components/pseudolocalize";
const cache = createIntlCache();
/**
 * @internal
 * Singleton to prevent creating multiple instances.
 */
let intlInstance = null;
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
export function initIntl() {
    return getIntlInstance();
}
function getIntlInstance() {
    if (intlInstance != null) {
        return intlInstance;
    }
    const i18n = window.canva_sdk.platform.v2
        .i18n;
    const locale = document.documentElement.lang;
    // eslint-disable-next-line no-restricted-properties
    const getLocalizedMessages = i18n.getLocalizedMessages.bind(i18n);
    // eslint-disable-next-line no-restricted-properties
    const pseudolocalize = i18n.pseudolocalize.bind(i18n);
    intlInstance = buildIntlShape(locale, getLocalizedMessages().messages, undefined, // no custom config allowed when using getIntl()
    pseudolocalize);
    return intlInstance;
}
/**
 * @internal
 * Build an IntlShape instance with the specified output type.
 *
 * @template T - The type of rich text elements (defaults to string)
 */
export function buildIntlShape(locale, messages, config, pseudolocalize) {
    const isPseudolocaleEnabled = locale === "en-XA" /* PseudoAppLocale.PSEUDO_LTR */ ||
        locale === "en-XB" /* PseudoAppLocale.PSEUDO_RTL */;
    if (isPseudolocaleEnabled) {
        locale = "en"; // use "en" formatting for numbers, dates, time, lists, etc.
        messages = {}; // force app to use defaultMessages
    }
    const intlShape = createIntl({
        defaultLocale: "en",
        locale,
        messages,
        ...config,
    }, cache);
    if (isPseudolocaleEnabled && pseudolocalize) {
        intlShape.formatMessage = createFormatMessage(locale, pseudolocalize);
    }
    return intlShape;
}
