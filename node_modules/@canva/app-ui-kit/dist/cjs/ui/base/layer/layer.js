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
    get Layer () {
        return _layer.Layer;
    },
    get LayerError () {
        return _layer.LayerError;
    },
    get LayerLevel () {
        return _layer.LayerLevel;
    },
    get WithLayerParent () {
        return _layer.WithLayerParent;
    }
});
const _layer = require("./private/layer");
