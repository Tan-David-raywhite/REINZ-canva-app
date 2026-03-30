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
    get MasonryVirtualizationController () {
        return MasonryVirtualizationController;
    },
    get SingleWindowMasonryVirtualizationController () {
        return SingleWindowMasonryVirtualizationController;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _make_observable = require('../../../base/make_observable/make_observable');
const _debounce = require('../../../base/debounce');
const _dispose_on_unmount = require('../../../base/mobx_react/dispose_on_unmount');
const _mobx = require("mobx");
const _react = _interop_require_wildcard(require("react"));
const _scroll_window = require('../scroll_controls/scroll_window');
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
const LOAD_ELEMENTS_THROTTLE = 500;
const defaultRowVisibility = {
    renderedFirstVisible: 0,
    renderedLastVisible: 5,
    scrollingFirstVisible: 0,
    scrollingLastVisible: 0
};
class MasonryVirtualizationController extends _react.Component {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            verticalOffset: _mobx.observable.ref,
            offsetScrollState: _mobx.computed.struct
        });
    }
    componentDidMount() {
        (0, _dispose_on_unmount.disposeOnUnmount)(this, (0, _mobx.reaction)(()=>this.offsetScrollState.positions, (0, _debounce.debounce)((0, _mobx.action)((positions)=>{
            this.debouncedScrollState.positions = positions;
        }), LOAD_ELEMENTS_THROTTLE), {
            fireImmediately: true
        }));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.verticalOffset !== this.props.verticalOffset) (0, _mobx.runInAction)(()=>this.verticalOffset = this.props.verticalOffset);
    }
    get offsetScrollState() {
        const { layout, positions } = this.props.virtualization.scrollState;
        return positions ? {
            layout,
            positions: {
                containerSize: positions.containerSize,
                scrollPosition: positions.scrollPosition - this.verticalOffset
            }
        } : this.props.virtualization.scrollState;
    }
    render() {
        const { overscan } = this.props.virtualization;
        return (0, _jsxruntime.jsx)(_scroll_window.WindowedList, {
            scrollState: this.debouncedScrollState,
            itemSizes: this.props.rowHeights,
            overscan: overscan,
            children: (debouncedState)=>(0, _jsxruntime.jsx)(_scroll_window.WindowedList, {
                    scrollState: this.offsetScrollState,
                    itemSizes: this.props.rowHeights,
                    overscan: overscan,
                    children: (state)=>{
                        if (state == null || debouncedState == null) return this.props.children({
                            rowVisibility: defaultRowVisibility
                        });
                        const { firstVisible: scrollingFirstVisible, lastVisible: scrollingLastVisible } = state;
                        const { firstVisible: renderedFirstVisible, lastVisible: renderedLastVisible } = debouncedState;
                        return this.props.children({
                            rowVisibility: {
                                renderedFirstVisible,
                                renderedLastVisible,
                                scrollingFirstVisible,
                                scrollingLastVisible
                            }
                        });
                    }
                })
        });
    }
    constructor(...args){
        super(...args), this.debouncedScrollState = (MasonryVirtualizationController._makeObservable(this), _mobx.observable.object({
            layout: 'vertical'
        })), this.verticalOffset = this.props.verticalOffset;
    }
}
const SingleWindowMasonryVirtualizationController = (props)=>{
    return (0, _jsxruntime.jsx)(_scroll_window.WindowedList, {
        scrollState: props.virtualization.scrollState,
        itemSizes: props.rowHeights,
        overscan: 0,
        children: (state)=>{
            if (state == null) return props.children({
                rowVisibility: defaultRowVisibility
            });
            const { firstVisible: scrollingFirstVisible, lastVisible: scrollingLastVisible } = state;
            const { firstVisible: renderedFirstVisible, lastVisible: renderedLastVisible } = state;
            return props.children({
                rowVisibility: {
                    renderedFirstVisible,
                    renderedLastVisible,
                    scrollingFirstVisible,
                    scrollingLastVisible
                }
            });
        }
    });
};
