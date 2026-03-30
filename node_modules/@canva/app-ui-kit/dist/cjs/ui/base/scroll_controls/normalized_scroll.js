"use strict";
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
    get getContextualizedScrollLeft () {
        return getContextualizedScrollLeft;
    },
    get getNormalizedScrollLeft () {
        return getNormalizedScrollLeft;
    },
    get setNormalizedScrollLeft () {
        return setNormalizedScrollLeft;
    }
});
const _normalizescrollleft = _interop_require_wildcard(require("normalize-scroll-left"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function getContextualizedScrollLeft(element, scrollLeft, isRtl) {
    if (isRtl) switch(_normalizescrollleft.detectScrollType()){
        case 'negative':
            return element.clientWidth - element.scrollWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
        default:
            return scrollLeft;
    }
    return scrollLeft;
}
function getNormalizedScrollLeft(element, isRtl) {
    const direction = getDirection(isRtl);
    return _normalizescrollleft.getNormalizedScrollLeft(element, direction);
}
function setNormalizedScrollLeft(element, scrollLeft, isRtl) {
    const direction = getDirection(isRtl);
    return _normalizescrollleft.setNormalizedScrollLeft(element, scrollLeft, direction);
}
function getDirection(isRtl) {
    return isRtl ? 'rtl' : 'ltr';
}
