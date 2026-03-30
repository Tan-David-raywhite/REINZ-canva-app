import { formatId } from '../i18n/strings';
export const NumberAbbreviationMessages = {
    thousands: (formattedNumber) => formatId("BQkOCQ", [formattedNumber], "{0}K"),
    tenThousands: (formattedNumber) => formatId("7KQN4Q", [formattedNumber], "{0}K"),
    hundredThousands: (formattedNumber) => formatId("k99f+Q", [formattedNumber], "{0}K"),
    millions: (formattedNumber) => formatId("A/yo4g", [formattedNumber], "{0}M"),
    tenMillions: (formattedNumber) => formatId("UY/ePA", [formattedNumber], "{0}M"),
    hundredMillions: (formattedNumber) => formatId("VD4ycQ", [formattedNumber], "{0}M"),
    billions: (formattedNumber) => formatId("B9m98A", [formattedNumber], "{0}B"),
};
