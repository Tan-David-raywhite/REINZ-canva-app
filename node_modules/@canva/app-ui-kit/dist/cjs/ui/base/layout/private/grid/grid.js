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
    get Grid () {
        return Grid;
    },
    get aligns () {
        return aligns;
    },
    get rowSizes () {
        return rowSizes;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../../base/preconditions');
const _callback_ref = require('../../../../../base/react/callback_ref');
require("react");
const _common_props = require('../../../box/common_props/common_props');
const _metrics = require('../../../metrics/metrics');
const _responsive = require('../../../responsive/responsive');
const _gridcss = _interop_require_wildcard(require("./grid.css"));
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
const rowSizes = [
    'auto',
    'equal'
];
const aligns = [
    'stretch',
    'start',
    'center',
    'end'
];
const spacingPropertyMap = {
    default: _gridcss.customProperties.spacing,
    smallUp: _gridcss.customProperties.smallUpSpacing,
    mediumUp: _gridcss.customProperties.mediumUpSpacing,
    largeUp: _gridcss.customProperties.largeUpSpacing,
    xLargeUp: _gridcss.customProperties.xLargeUpSpacing
};
const spacingXPropertyMap = {
    default: _gridcss.customProperties.spacingX,
    smallUp: _gridcss.customProperties.smallUpSpacingX,
    mediumUp: _gridcss.customProperties.mediumUpSpacingX,
    largeUp: _gridcss.customProperties.largeUpSpacingX,
    xLargeUp: _gridcss.customProperties.xLargeUpSpacingX
};
const spacingYPropertyMap = {
    default: _gridcss.customProperties.spacingY,
    smallUp: _gridcss.customProperties.smallUpSpacingY,
    mediumUp: _gridcss.customProperties.mediumUpSpacingY,
    largeUp: _gridcss.customProperties.largeUpSpacingY,
    xLargeUp: _gridcss.customProperties.xLargeUpSpacingY
};
const columnsPropertyMap = {
    default: _gridcss.customProperties.columns,
    smallUp: _gridcss.customProperties.smallUpColumns,
    mediumUp: _gridcss.customProperties.mediumUpColumns,
    largeUp: _gridcss.customProperties.largeUpColumns,
    xLargeUp: _gridcss.customProperties.xLargeUpColumns
};
const rowSizePropertyMap = {
    default: _gridcss.customProperties.rowSize,
    smallUp: _gridcss.customProperties.smallUpRowSize,
    mediumUp: _gridcss.customProperties.mediumUpRowSize,
    largeUp: _gridcss.customProperties.largeUpRowSize,
    xLargeUp: _gridcss.customProperties.xLargeUpRowSize
};
const alignYPropertyMap = {
    default: _gridcss.customProperties.alignY,
    smallUp: _gridcss.customProperties.smallUpAlignY,
    mediumUp: _gridcss.customProperties.mediumUpAlignY,
    largeUp: _gridcss.customProperties.largeUpAlignY,
    xLargeUp: _gridcss.customProperties.xLargeUpAlignY
};
const alignXPropertyMap = {
    default: _gridcss.customProperties.alignX,
    smallUp: _gridcss.customProperties.smallUpAlignX,
    mediumUp: _gridcss.customProperties.mediumUpAlignX,
    largeUp: _gridcss.customProperties.largeUpAlignX,
    xLargeUp: _gridcss.customProperties.xLargeUpAlignX
};
function Grid({ children, spacing, spacingX, spacingY, columns, rowSize, tagName: TagName = 'div', alignY, alignX, ref, ...rest }) {
    return ((0, _jsxruntime.jsx)(TagName, {
                className: _gridcss.default.grid,
                style: {
                    ...(spacing && (0, _responsive.generateStyle)(spacingPropertyMap, spacing, _metrics.getSpaceValue)),
                    ...(spacingX && (0, _responsive.generateStyle)(spacingXPropertyMap, spacingX, _metrics.getSpaceValue)),
                    ...(spacingY && (0, _responsive.generateStyle)(spacingYPropertyMap, spacingY, _metrics.getSpaceValue)),
                    ...(columns && (0, _responsive.generateStyle)(columnsPropertyMap, columns)),
                    ...(rowSize && (0, _responsive.generateStyle)(rowSizePropertyMap, rowSize, getRowSizeValue)),
                    ...(alignY && (0, _responsive.generateStyle)(alignYPropertyMap, alignY)),
                    ...(alignX && (0, _responsive.generateStyle)(alignXPropertyMap, alignX))
                },
                ref: (0, _callback_ref.toCallbackRef)(ref),
                ...(0, _common_props.commonPropsToDOMProps)(rest),
                children: children
            }));
}
function getRowSizeValue(rowSize) {
    switch(rowSize){
        case 'auto':
            return 'auto';
        case 'equal':
            return '1fr';
        default:
            throw new _preconditions.UnreachableError(rowSize);
    }
}
