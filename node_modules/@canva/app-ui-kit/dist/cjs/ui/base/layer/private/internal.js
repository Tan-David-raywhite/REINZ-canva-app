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
    get LAYER_MARKER_CLASS_NAME () {
        return LAYER_MARKER_CLASS_NAME;
    },
    get insertLayerIntoParent () {
        return insertLayerIntoParent;
    }
});
const _layercss = _interop_require_default(require("./layer.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const LAYER_MARKER_CLASS_NAME = _layercss.default.layerMarker;
function insertLayerIntoParent(layer, parent) {
    const lastLayerMarker = findLastLayerMarker(parent);
    if (lastLayerMarker != null) lastLayerMarker.after(layer);
    else parent.prepend(layer);
}
function findLastLayerMarker(parent) {
    for(let i = parent.children.length - 1; i >= 0; i--){
        const parentLayerChild = parent.children.item(i);
        if (parentLayerChild && parentLayerChild.classList.contains(LAYER_MARKER_CLASS_NAME)) return parentLayerChild;
    }
    return null;
}
