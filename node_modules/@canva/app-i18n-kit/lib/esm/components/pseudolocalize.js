import { IntlMessageFormat, } from "intl-messageformat";
const AST_DOCS_LINK = "https://formatjs.io/docs/tooling/ts-transformer/#ast";
/**
 * @internal
 */
export function createFormatMessage(locale, pseudolocalize, 
// eslint-disable-next-line no-console
reportError = console.error) {
    function formatPseudolocalizedMessage(descriptor, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values, opts) {
        let defaultMessage = descriptor.defaultMessage;
        if (defaultMessage == null) {
            return "";
        }
        // pseudolocalize function cannot handle AST representation of ICU messages (MessageFormatElement[])
        if (typeof defaultMessage !== "string") {
            reportError(`defaultMessage could not be pseudolocalized.\n`, `ast option must be false when using @canva/app-i18n-kit. See: ${AST_DOCS_LINK}`);
        }
        else {
            defaultMessage = pseudolocalize(defaultMessage);
        }
        return new IntlMessageFormat(defaultMessage, locale, undefined, opts).format(values);
    }
    return formatPseudolocalizedMessage;
}
