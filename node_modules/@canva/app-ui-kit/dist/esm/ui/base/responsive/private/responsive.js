import { Breakpoint } from '../../metrics/metrics';
export const conditions = [
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
export function generateStyle(propertyMap, responsiveValue, getCssValue) {
    const normalizedValue = normalizeResponsiveValue(responsiveValue);
    return Object.fromEntries(Object.entries(normalizedValue).map(([condition, value])=>[
            propertyMap[condition],
            getCssValue ? getCssValue(value) : value
        ]));
}
export function resolveResponsiveObject(value, breakpoint) {
    let resolvedValue;
    switch (breakpoint) {
case Breakpoint.XLARGE:
    resolvedValue ?? (resolvedValue = value.xLargeUp);
case Breakpoint.LARGE:
    resolvedValue ?? (resolvedValue = value.largeUp);
case Breakpoint.MEDIUM:
    resolvedValue ?? (resolvedValue = value.mediumUp);
case Breakpoint.SMALL:
    resolvedValue ?? (resolvedValue = value.smallUp);
case Breakpoint.DEFAULT:
default:
    return resolvedValue ?? value.default;
} }
