import IntlMessageFormat from 'intl-messageformat';
import { exposeStringIds } from './expose_string_ids';
const window_ = typeof globalThis === 'undefined' ? undefined : globalThis;
let strings_ = window_?.['cmsg']?.['strings'] || {};
const cache_ = new Map();
let locale_;
export const getLocale = ()=>{
    if (typeof locale_ === 'function') return locale_();
    return locale_ = locale_ || window_?.['cmsg']?.['locale'] || 'en';
};
export function encodeAsInvisibleUnicode(id) {
    return id.replace(/./g, (s)=>s.charCodeAt(0).toString(2).padStart(8, '0'))
    .replace(/0/g, '\u2062')
    .replace(/1/g, '\u2064');
}
function addInvisibleStringId(string, id) {
    return '\u2062' + string + encodeAsInvisibleUnicode(id);
}
export function setTranslationBundlesContainer(cmsgContainer, locale) {
    cache_.clear();
    locale_ = locale;
    strings_ = cmsgContainer?.['cmsg']?.['strings'] || {};
}
export function formatId(
    id,
    args,
    fallbackString,
    locale = getLocale(),
    strings = strings_,
    cache = cache_,
    createIntlMessageFormat = createIntlMessageFormat_
) {
    const argumentzRecord = {};
    for(let i = 0; i < args.length; ++i)argumentzRecord[i] = args[i];
    const cacheKey = locale + '-' + id;
    const cached = cache.get(cacheKey);
    if (cached) {
        const result = cached.format(argumentzRecord);
        return exposeStringIds ? addInvisibleStringId(result, id) : result;
    }
    const localeStrings = strings[locale];
    let string = localeStrings && localeStrings[id];
    if (string == null) string = fallbackString;
    if (string == null) throw new Error(`Could not find string for ${locale} ${id}`);
    const format = createIntlMessageFormat(string, locale);
    cache.set(cacheKey, format);
    const result = format.format(argumentzRecord);
    return exposeStringIds ? addInvisibleStringId(result, id) : result;
}
export function getString(id, fallbackString, locale = getLocale(), strings = strings_) {
    const localeStrings = strings[locale];
    let string = localeStrings && localeStrings[id];
    if (string == null) string = fallbackString;
    if (string == null) throw new Error(`Could not find string for ${locale} ${id}`);
    return exposeStringIds ? addInvisibleStringId(string, id) : string;
}
const formats = {
    date: {
        ['weekday']: {
            weekday: 'long'
        },
        ['mediumNoYear']: {
            month: 'short',
            day: 'numeric'
        },
        ['mediumNoYearUTC']: {
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC'
        },
        ['monthUTC']: {
            month: 'long',
            timeZone: 'UTC'
        },
        ['shortMonthUTC']: {
            month: 'short',
            timeZone: 'UTC'
        },
        ['monthYear']: {
            month: 'long',
            year: 'numeric'
        },
        ['monthYearUTC']: {
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC'
        },
        ['longNoYear']: {
            month: 'long',
            day: 'numeric'
        },
        ['longUTC']: {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC'
        }
    }
};
export const intlNormalizedLocale = (locale)=>{
    let resolvedLocale = locale;
    switch(locale){
        case 'en-psaccent':
            resolvedLocale = 'en';
            break;
        case 'ar':
        case 'ar-AE':
        case 'ar-EG':
        case 'ar-SA':
        case 'fa-IR':
        case 'he-IL':
        case 'pa-PK':
        case 'ur-PK':
        case 'ckb-IQ':
        case 'ug-CN':
            resolvedLocale = `${locale}-u-nu-latn`;
            break;
        default:
            resolvedLocale = locale;
            break;
    }
    try {
        IntlMessageFormat.resolveLocale(resolvedLocale);
    } catch (err) {
        resolvedLocale = IntlMessageFormat.defaultLocale;
    }
    return resolvedLocale;
};
function createIntlMessageFormat_(ztring, locale) {
    return new IntlMessageFormat(ztring, intlNormalizedLocale(locale), formats, {
        ignoreTag: true
    });
}
export function formatString(ztring, values, locale) {
    return new IntlMessageFormat(ztring, locale ? intlNormalizedLocale(locale) : undefined, formats, {
        ignoreTag: true
    }).format(Object.fromEntries(Object.entries(values)));
}
