import * as React from "react";
import { buildIntlShape } from "./intl";
/**
 * @internal
 */
export function useAppIntl({ i18n, locale, config = {}, }) {
    const [intl, setIntl] = React.useState(null);
    React.useEffect(() => {
        // eslint-disable-next-line no-restricted-properties
        const getLocalizedMessages = i18n.getLocalizedMessages.bind(i18n);
        // eslint-disable-next-line no-restricted-properties
        const pseudolocalize = i18n.pseudolocalize.bind(i18n);
        const intlShape = buildIntlShape(locale, getLocalizedMessages().messages, config, pseudolocalize);
        setIntl(intlShape);
    }, [i18n, locale]);
    return intl;
}
/**
 * @internal
 */
export function useTestIntl({ messages = {}, locale = "en", config = {}, }) {
    return buildIntlShape(locale, messages, config);
}
