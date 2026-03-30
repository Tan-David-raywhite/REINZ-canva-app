import { intlNormalizedLocale } from '../i18n/strings';
import { NumberAbbreviationMessages } from './number_abbreviation.messages';
export class NumberAbbreviationPresenter {
    isBreakPointEmpty(breakPoint) {
        return breakPoint.formatFn('') === '';
    }
    getNextBreakpoint(newBreakPoint, oldBreakPoint) {
        if (oldBreakPoint == null) return newBreakPoint;
        else {
            const oldFormatResult = oldBreakPoint.formatFn('');
            const newFormatResult = newBreakPoint.formatFn('');
            return oldFormatResult === newFormatResult ? oldBreakPoint : newBreakPoint;
        }
    }
    abbreviateNumber(numberToAbbreviate) {
        const locale = intlNormalizedLocale(this.forceLocale || window.navigator.language);
        let lastAbbreviation;
        for(let i = 0; i < NumberAbbreviationPresenter.breakPoints.length; i++){
            const abbreviation = NumberAbbreviationPresenter.breakPoints[i];
            if (abbreviation.breakPoint > this.maybeRoundNumber(numberToAbbreviate)) {
                if (lastAbbreviation == null || this.isBreakPointEmpty(lastAbbreviation)) return numberToAbbreviate.toLocaleString(locale, this.formatOptions);
                else {
                    const fractionToAbbreviate = numberToAbbreviate / lastAbbreviation.breakPoint;
                    const abbreviatedFraction = fractionToAbbreviate.toLocaleString(locale, this.formatOptions);
                    return lastAbbreviation.formatFn(abbreviatedFraction);
                }
            }
            lastAbbreviation = this.getNextBreakpoint(abbreviation, lastAbbreviation);
        }
        return numberToAbbreviate.toLocaleString(locale, this.formatOptions);
    }
    maybeRoundNumber(number) {
        if (!this.formatOptions?.maximumSignificantDigits) return number;
        return Number(number.toPrecision(this.formatOptions.maximumSignificantDigits)) || number;
    }
    constructor(forceLocale, formatOptions){
        this.forceLocale = forceLocale;
        this.formatOptions = formatOptions;
    }
}
NumberAbbreviationPresenter.breakPoints = [
    {
        breakPoint: 1000,
        formatFn: NumberAbbreviationMessages.thousands
    },
    {
        breakPoint: 10000,
        formatFn: NumberAbbreviationMessages.tenThousands
    },
    {
        breakPoint: 100000,
        formatFn: NumberAbbreviationMessages.hundredThousands
    },
    {
        breakPoint: 1000000,
        formatFn: NumberAbbreviationMessages.millions
    },
    {
        breakPoint: 10000000,
        formatFn: NumberAbbreviationMessages.tenMillions
    },
    {
        breakPoint: 100000000,
        formatFn: NumberAbbreviationMessages.hundredMillions
    },
    {
        breakPoint: 1000000000,
        formatFn: NumberAbbreviationMessages.billions
    }
];
