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
    get conditions () {
        return conditions;
    },
    get generateStyle () {
        return generateStyle;
    },
    get resolveResponsiveObject () {
        return resolveResponsiveObject;
    }
});
const _metrics = require('../../metrics/metrics');
const conditions = [
    'default',
    'smallUp',
    'mediumUp',
    'largeUp',
    'xLargeUp'
];
function normalizeResponsiveValue(value) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return {
        default: value
    };
    return value;
}
function generateStyle(propertyMap, responsiveValue, getCssValue) {
    const normalizedValue = normalizeResponsiveValue(responsiveValue);
    return Object.fromEntries(Object.entries(normalizedValue).map(([condition, value])=>[
            propertyMap[condition],
            getCssValue ? getCssValue(value) : value
        ]));
}
function resolveResponsiveObject(value, breakpoint) {
    let resolvedValue;
    switch (breakpoint) {
case _metrics.Breakpoint.XLARGE:
    resolvedValue ?? (resolvedValue = value.xLargeUp);
case _metrics.Breakpoint.LARGE:
    resolvedValue ?? (resolvedValue = value.largeUp);
case _metrics.Breakpoint.MEDIUM:
    resolvedValue ?? (resolvedValue = value.mediumUp);
case _metrics.Breakpoint.SMALL:
    resolvedValue ?? (resolvedValue = value.smallUp);
case _metrics.Breakpoint.DEFAULT:
default:
    return resolvedValue ?? value.default;
} }
