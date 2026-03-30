"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get encodeAsInvisibleUnicode () {
        return encodeAsInvisibleUnicode;
    },
    get formatId () {
        return formatId;
    },
    get formatString () {
        return formatString;
    },
    get getLocale () {
        return getLocale;
    },
    get getString () {
        return getString;
    },
    get intlNormalizedLocale () {
        return intlNormalizedLocale;
    },
    get setTranslationBundlesContainer () {
        return setTranslationBundlesContainer;
    }
});
const _intlmessageformat = _interop_require_default(require("intl-messageformat"));
const _expose_string_ids = require("./expose_string_ids");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const window_ = typeof globalThis === 'undefined' ? undefined : globalThis;
let strings_ = window_?.['cmsg']?.['strings'] || {};
const cache_ = new Map();
let locale_;
const getLocale = ()=>{
    if (typeof locale_ === 'function') return locale_();
    return locale_ = locale_ || window_?.['cmsg']?.['locale'] || 'en';
};
function encodeAsInvisibleUnicode(id) {
    return id.replace(/./g, (s)=>s.charCodeAt(0).toString(2).padStart(8, '0'))
    .replace(/0/g, '\u2062')
    .replace(/1/g, '\u2064');
}
function addInvisibleStringId(string, id) {
    return '\u2062' + string + encodeAsInvisibleUnicode(id);
}
function setTranslationBundlesContainer(cmsgContainer, locale) {
    cache_.clear();
    locale_ = locale;
    strings_ = cmsgContainer?.['cmsg']?.['strings'] || {};
}
function formatId(id, args, fallbackString, locale = getLocale(), strings = strings_, cache = cache_, createIntlMessageFormat = createIntlMessageFormat_) {
    const argumentzRecord = {};
    for(let i = 0; i < args.length; ++i)argumentzRecord[i] = args[i];
    const cacheKey = locale + '-' + id;
    const cached = cache.get(cacheKey);
    if (cached) {
        const result = cached.format(argumentzRecord);
        return _expose_string_ids.exposeStringIds ? addInvisibleStringId(result, id) : result;
    }
    const localeStrings = strings[locale];
    let string = localeStrings && localeStrings[id];
    if (string == null) string = fallbackString;
    if (string == null) throw new Error(`Could not find string for ${locale} ${id}`);
    const format = createIntlMessageFormat(string, locale);
    cache.set(cacheKey, format);
    const result = format.format(argumentzRecord);
    return _expose_string_ids.exposeStringIds ? addInvisibleStringId(result, id) : result;
}
function getString(id, fallbackString, locale = getLocale(), strings = strings_) {
    const localeStrings = strings[locale];
    let string = localeStrings && localeStrings[id];
    if (string == null) string = fallbackString;
    if (string == null) throw new Error(`Could not find string for ${locale} ${id}`);
    return _expose_string_ids.exposeStringIds ? addInvisibleStringId(string, id) : string;
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
const intlNormalizedLocale = (locale)=>{
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
        _intlmessageformat.default.resolveLocale(resolvedLocale);
    } catch (err) {
        resolvedLocale = _intlmessageformat.default.defaultLocale;
    }
    return resolvedLocale;
};
function createIntlMessageFormat_(ztring, locale) {
    return new _intlmessageformat.default(ztring, intlNormalizedLocale(locale), formats, {
        ignoreTag: true
    });
}
function formatString(ztring, values, locale) {
    return new _intlmessageformat.default(ztring, locale ? intlNormalizedLocale(locale) : undefined, formats, {
        ignoreTag: true
    }).format(Object.fromEntries(Object.entries(values)));
}
