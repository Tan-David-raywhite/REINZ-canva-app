import { formatId, getString } from '../../../i18n/strings';
export const InputDecoratorsMessages = {
    charsUsed: (charsUsed, maxChars) => formatId("n89B7A", [charsUsed, maxChars], "{0, number} out of {1, number} characters used"),
    wordsUsed: (wordsUsed, maxWords) => formatId("pBrsaw", [wordsUsed, maxWords], "{0, number} out of {1, number} words used"),
    clear: () => getString("nTW0FQ", "Clear"),
    copy: () => getString("URnvFw", "Copy"),
    copied: () => getString("eD7PPw", "Copied!"),
    showPassword: () => getString("DA8d4w", "Show"),
    hidePassword: () => getString("TxrGbw", "Hide"),
};
