"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppIntl = useAppIntl;
exports.useTestIntl = useTestIntl;
const React = require("react");
const intl_1 = require("./intl");
/**
 * @internal
 */
function useAppIntl({ i18n, locale, config = {}, }) {
    const [intl, setIntl] = React.useState(null);
    React.useEffect(() => {
        // eslint-disable-next-line no-restricted-properties
        const getLocalizedMessages = i18n.getLocalizedMessages.bind(i18n);
        // eslint-disable-next-line no-restricted-properties
        const pseudolocalize = i18n.pseudolocalize.bind(i18n);
        const intlShape = (0, intl_1.buildIntlShape)(locale, getLocalizedMessages().messages, config, pseudolocalize);
        setIntl(intlShape);
    }, [i18n, locale]);
    return intl;
}
/**
 * @internal
 */
function useTestIntl({ messages = {}, locale = "en", config = {}, }) {
    return (0, intl_1.buildIntlShape)(locale, messages, config);
}
