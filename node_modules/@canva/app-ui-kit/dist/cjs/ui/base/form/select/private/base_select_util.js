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
    get defaultAreEqual () {
        return defaultAreEqual;
    },
    get defaultFilterFn () {
        return defaultFilterFn;
    },
    get defaultGetLabel () {
        return defaultGetLabel;
    },
    get defaultIsSelected () {
        return defaultIsSelected;
    },
    get deriveIdentifier () {
        return deriveIdentifier;
    },
    get flattenOptions () {
        return flattenOptions;
    },
    get joinLabels () {
        return joinLabels;
    },
    get normalizeOptionGroups () {
        return normalizeOptionGroups;
    },
    get sliceOptionGroups () {
        return sliceOptionGroups;
    }
});
const _preconditions = require('../../../../../base/preconditions');
const defaultAreEqual = (a, b)=>{
    return a === b;
};
const defaultIsSelected = (option, value)=>{
    return Array.isArray(value) ? value.includes(option.value) : option.value === value;
};
const defaultGetLabel = (option)=>{
    return option.label || option.value || '';
};
const joinLabels = (labels)=>{
    return labels.every((label)=>typeof label === 'string') ? labels.join(', ') : labels;
};
const normalizeQuery = (value)=>value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
function defaultFilterFn(query, options, value, isSelected) {
    const normalizedQuery = normalizeQuery(query);
    if (!normalizedQuery) return options;
    const startMatches = [];
    const otherMatches = [];
    options.forEach((option)=>{
        _preconditions.Preconditions.checkArgument(typeof option.label === 'string', 'Provide a custom `filterFn` to work with options without labels');
        const normalizedLabel = normalizeQuery(option.label);
        if (!normalizedLabel.includes(normalizedQuery)) {
            if (isSelected(option, value)) otherMatches.push(option);
            return;
        }
        if (normalizedLabel.startsWith(normalizedQuery)) startMatches.push(option);
        else otherMatches.push(option);
    });
    return startMatches.concat(otherMatches);
}
function normalizeOptionGroups(options) {
    const optionGroups = [];
    let currentImplicitGroup;
    options.forEach((optionOrGroup)=>{
        if (optionOrGroup.options != null) {
            currentImplicitGroup = undefined;
            optionGroups.push(optionOrGroup);
        } else {
            if (currentImplicitGroup == null) {
                currentImplicitGroup ?? (currentImplicitGroup = {
                    options: []
                });
                optionGroups.push(currentImplicitGroup);
            }
            currentImplicitGroup.options.push(optionOrGroup);
        }
    });
    return optionGroups;
}
function flattenOptions(options) {
    const result = [];
    options.forEach((option)=>{
        if (option.options != null) result.push(...option.options);
        else result.push(option);
    });
    return result;
}
function deriveIdentifier(id, subid) {
    return subid == null ? undefined : `${id}--${subid}`;
}
function sliceOptionGroups(optionGroups, start, end) {
    const slice = [];
    let groupStart = 0;
    for(let groupIndex = 0; groupIndex < optionGroups.length; groupIndex++){
        const optionGroup = optionGroups[groupIndex];
        const groupLength = optionGroup.options.length;
        const groupEnd = groupStart + groupLength;
        if (groupEnd <= start) {
            groupStart += groupLength;
            continue;
        }
        if (groupStart >= end)
            break;
        if (groupStart < start && groupEnd <= end) {
            const optionsStart = start - groupStart;
            slice.push({
                label: optionGroup.label,
                options: optionGroup.options.slice(optionsStart),
                originalIndex: groupIndex,
                slice: [
                    optionsStart,
                    groupLength
                ]
            });
            groupStart += groupLength;
            continue;
        }
        if (groupStart >= start && groupEnd <= end) {
            slice.push({
                label: optionGroup.label,
                options: optionGroup.options.slice(),
                originalIndex: groupIndex,
                slice: [
                    0,
                    groupLength
                ]
            });
            groupStart += groupLength;
            continue;
        }
        if (groupStart >= start && groupEnd > end) {
            const optionsEnd = end - groupStart;
            slice.push({
                label: optionGroup.label,
                options: optionGroup.options.slice(0, optionsEnd),
                originalIndex: groupIndex,
                slice: [
                    0,
                    optionsEnd
                ]
            });
            groupStart += groupLength;
            continue;
        }
        if (groupStart < start && groupEnd > end) {
            const optionsStart = start - groupStart;
            const optionsEnd = end - groupStart;
            slice.push({
                label: optionGroup.label,
                options: optionGroup.options.slice(optionsStart, optionsEnd),
                originalIndex: groupIndex,
                slice: [
                    optionsStart,
                    optionsEnd
                ]
            });
            groupStart += groupLength;
            continue;
        }
    }
    return slice;
}
