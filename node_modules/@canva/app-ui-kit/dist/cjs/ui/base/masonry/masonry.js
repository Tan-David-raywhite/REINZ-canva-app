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
    get Masonry () {
        return _Masonry;
    },
    get MasonryItem () {
        return MasonryItem;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _make_observable = require('../../../base/make_observable/make_observable');
const _dispose_on_unmount = require('../../../base/mobx_react/dispose_on_unmount');
const _observer_for_class = require('../../../base/mobx_react/observer_for_class');
const _mobx = _interop_require_wildcard(require("mobx"));
const _react = _interop_require_wildcard(require("react"));
const _reactmeasure = _interop_require_default(require("react-measure"));
const _internal_masonry = require("./internal/internal_masonry");
const _masonry_presenter = require("./masonry_presenter");
const _masonry_virtualization_controller = require("./masonry_virtualization_controller");
const _skip_links = require("./skip_links");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
function applyDecs2203RFactory() {
    function createAddInitializerMethod(initializers, decoratorFinishedRef) {
        return function addInitializer(initializer) {
            assertNotFinished(decoratorFinishedRef, "addInitializer");
            assertCallable(initializer, "An initializer");
            initializers.push(initializer);
        };
    }
    function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value) {
        var kindStr;
        switch(kind){
            case 1:
                kindStr = "accessor";
                break;
            case 2:
                kindStr = "method";
                break;
            case 3:
                kindStr = "getter";
                break;
            case 4:
                kindStr = "setter";
                break;
            default:
                kindStr = "field";
        }
        var ctx = {
            kind: kindStr,
            name: isPrivate ? "#" + name : name,
            static: isStatic,
            private: isPrivate,
            metadata: metadata
        };
        var decoratorFinishedRef = {
            v: false
        };
        ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
        var get, set;
        if (kind === 0) {
            if (isPrivate) {
                get = desc.get;
                set = desc.set;
            } else {
                get = function() {
                    return this[name];
                };
                set = function(v) {
                    this[name] = v;
                };
            }
        } else if (kind === 2) {
            get = function() {
                return desc.value;
            };
        } else {
            if (kind === 1 || kind === 3) {
                get = function() {
                    return desc.get.call(this);
                };
            }
            if (kind === 1 || kind === 4) {
                set = function(v) {
                    desc.set.call(this, v);
                };
            }
        }
        ctx.access = get && set ? {
            get: get,
            set: set
        } : get ? {
            get: get
        } : {
            set: set
        };
        try {
            return dec(value, ctx);
        } finally{
            decoratorFinishedRef.v = true;
        }
    }
    function assertNotFinished(decoratorFinishedRef, fnName) {
        if (decoratorFinishedRef.v) {
            throw new Error("attempted to call " + fnName + " after decoration was finished");
        }
    }
    function assertCallable(fn, hint) {
        if (typeof fn !== "function") {
            throw new TypeError(hint + " must be a function");
        }
    }
    function assertValidReturnValue(kind, value) {
        var type = typeof value;
        if (kind === 1) {
            if (type !== "object" || value === null) {
                throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
            }
            if (value.get !== undefined) {
                assertCallable(value.get, "accessor.get");
            }
            if (value.set !== undefined) {
                assertCallable(value.set, "accessor.set");
            }
            if (value.init !== undefined) {
                assertCallable(value.init, "accessor.init");
            }
        } else if (type !== "function") {
            var hint;
            if (kind === 0) {
                hint = "field";
            } else if (kind === 10) {
                hint = "class";
            } else {
                hint = "method";
            }
            throw new TypeError(hint + " decorators must return a function or void 0");
        }
    }
    function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata) {
        var decs = decInfo[0];
        var desc, init, value;
        if (isPrivate) {
            if (kind === 0 || kind === 1) {
                desc = {
                    get: decInfo[3],
                    set: decInfo[4]
                };
            } else if (kind === 3) {
                desc = {
                    get: decInfo[3]
                };
            } else if (kind === 4) {
                desc = {
                    set: decInfo[3]
                };
            } else {
                desc = {
                    value: decInfo[3]
                };
            }
        } else if (kind !== 0) {
            desc = Object.getOwnPropertyDescriptor(base, name);
        }
        if (kind === 1) {
            value = {
                get: desc.get,
                set: desc.set
            };
        } else if (kind === 2) {
            value = desc.value;
        } else if (kind === 3) {
            value = desc.get;
        } else if (kind === 4) {
            value = desc.set;
        }
        var newValue, get, set;
        if (typeof decs === "function") {
            newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
            if (newValue !== void 0) {
                assertValidReturnValue(kind, newValue);
                if (kind === 0) {
                    init = newValue;
                } else if (kind === 1) {
                    init = newValue.init;
                    get = newValue.get || value.get;
                    set = newValue.set || value.set;
                    value = {
                        get: get,
                        set: set
                    };
                } else {
                    value = newValue;
                }
            }
        } else {
            for(var i = decs.length - 1; i >= 0; i--){
                var dec = decs[i];
                newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, metadata, value);
                if (newValue !== void 0) {
                    assertValidReturnValue(kind, newValue);
                    var newInit;
                    if (kind === 0) {
                        newInit = newValue;
                    } else if (kind === 1) {
                        newInit = newValue.init;
                        get = newValue.get || value.get;
                        set = newValue.set || value.set;
                        value = {
                            get: get,
                            set: set
                        };
                    } else {
                        value = newValue;
                    }
                    if (newInit !== void 0) {
                        if (init === void 0) {
                            init = newInit;
                        } else if (typeof init === "function") {
                            init = [
                                init,
                                newInit
                            ];
                        } else {
                            init.push(newInit);
                        }
                    }
                }
            }
        }
        if (kind === 0 || kind === 1) {
            if (init === void 0) {
                init = function(instance, init) {
                    return init;
                };
            } else if (typeof init !== "function") {
                var ownInitializers = init;
                init = function(instance, init) {
                    var value = init;
                    for(var i = 0; i < ownInitializers.length; i++){
                        value = ownInitializers[i].call(instance, value);
                    }
                    return value;
                };
            } else {
                var originalInitializer = init;
                init = function(instance, init) {
                    return originalInitializer.call(instance, init);
                };
            }
            ret.push(init);
        }
        if (kind !== 0) {
            if (kind === 1) {
                desc.get = value.get;
                desc.set = value.set;
            } else if (kind === 2) {
                desc.value = value;
            } else if (kind === 3) {
                desc.get = value;
            } else if (kind === 4) {
                desc.set = value;
            }
            if (isPrivate) {
                if (kind === 1) {
                    ret.push(function(instance, args) {
                        return value.get.call(instance, args);
                    });
                    ret.push(function(instance, args) {
                        return value.set.call(instance, args);
                    });
                } else if (kind === 2) {
                    ret.push(value);
                } else {
                    ret.push(function(instance, args) {
                        return value.call(instance, args);
                    });
                }
            } else {
                Object.defineProperty(base, name, desc);
            }
        }
    }
    function applyMemberDecs(Class, decInfos, metadata) {
        var ret = [];
        var protoInitializers;
        var staticInitializers;
        var existingProtoNonFields = new Map();
        var existingStaticNonFields = new Map();
        for(var i = 0; i < decInfos.length; i++){
            var decInfo = decInfos[i];
            if (!Array.isArray(decInfo)) continue;
            var kind = decInfo[1];
            var name = decInfo[2];
            var isPrivate = decInfo.length > 3;
            var isStatic = kind >= 5;
            var base;
            var initializers;
            if (isStatic) {
                base = Class;
                kind = kind - 5;
                staticInitializers = staticInitializers || [];
                initializers = staticInitializers;
            } else {
                base = Class.prototype;
                protoInitializers = protoInitializers || [];
                initializers = protoInitializers;
            }
            if (kind !== 0 && !isPrivate) {
                var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;
                var existingKind = existingNonFields.get(name) || 0;
                if (existingKind === true || existingKind === 3 && kind !== 4 || existingKind === 4 && kind !== 3) {
                    throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
                } else if (!existingKind && kind > 2) {
                    existingNonFields.set(name, kind);
                } else {
                    existingNonFields.set(name, true);
                }
            }
            applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers, metadata);
        }
        pushInitializers(ret, protoInitializers);
        pushInitializers(ret, staticInitializers);
        return ret;
    }
    function pushInitializers(ret, initializers) {
        if (initializers) {
            ret.push(function(instance) {
                for(var i = 0; i < initializers.length; i++){
                    initializers[i].call(instance);
                }
                return instance;
            });
        }
    }
    function applyClassDecs(targetClass, classDecs, metadata) {
        if (classDecs.length > 0) {
            var initializers = [];
            var newClass = targetClass;
            var name = targetClass.name;
            for(var i = classDecs.length - 1; i >= 0; i--){
                var decoratorFinishedRef = {
                    v: false
                };
                try {
                    var nextNewClass = classDecs[i](newClass, {
                        kind: "class",
                        name: name,
                        addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef),
                        metadata
                    });
                } finally{
                    decoratorFinishedRef.v = true;
                }
                if (nextNewClass !== undefined) {
                    assertValidReturnValue(10, nextNewClass);
                    newClass = nextNewClass;
                }
            }
            return [
                defineMetadata(newClass, metadata),
                function() {
                    for(var i = 0; i < initializers.length; i++){
                        initializers[i].call(newClass);
                    }
                }
            ];
        }
    }
    function defineMetadata(Class, metadata) {
        return Object.defineProperty(Class, Symbol.metadata || Symbol.for("Symbol.metadata"), {
            configurable: true,
            enumerable: true,
            value: metadata
        });
    }
    return function applyDecs2203R(targetClass, memberDecs, classDecs, parentClass) {
        if (parentClass !== void 0) {
            var parentMetadata = parentClass[Symbol.metadata || Symbol.for("Symbol.metadata")];
        }
        var metadata = Object.create(parentMetadata === void 0 ? null : parentMetadata);
        var e = applyMemberDecs(targetClass, memberDecs, metadata);
        if (!classDecs.length) defineMetadata(targetClass, metadata);
        return {
            e: e,
            get c () {
                return applyClassDecs(targetClass, classDecs, metadata);
            }
        };
    };
}
function _apply_decs_2203_r(targetClass, memberDecs, classDecs, parentClass) {
    return (_apply_decs_2203_r = applyDecs2203RFactory())(targetClass, memberDecs, classDecs, parentClass);
}
function _identity(x) {
    return x;
}
var _class;
var _initClass, _React_Component;
let _Masonry;
new (_class = class extends _identity {
    constructor(){
        super(_Masonry), _initClass();
    }
}, (()=>{
    class Masonry extends (_React_Component = _react.Component) {
        static _makeObservable(instance) {
            (0, _make_observable.makeObservable)(instance, {
                horizontalGutterPx: _mobx.computed,
                verticalGutterPx: _mobx.computed
            });
        }
        componentDidMount() {
            (0, _dispose_on_unmount.disposeOnUnmount)(this, _mobx.reaction(()=>this.props, ()=>{
                _mobx.runInAction(()=>{
                    this.initState(this.props);
                });
            }));
            (0, _dispose_on_unmount.disposeOnUnmount)(this, (0, _mobx.reaction)(()=>{
                return this.masonryState.rows.reduce((count, curValue)=>{
                    return count + curValue.elements.length;
                }, 0);
            }, (itemsRendered)=>{
                this.props.onRenderedItems && this.props.onRenderedItems(itemsRendered);
            }));
        }
        initState(props) {
            this.masonryState.minRowHeightPx = props.minRowHeightPx;
            this.masonryState.maxRowHeightPx = props.maxRowHeightPx;
            this.masonryState.targetRowHeightPx = props.targetRowHeightPx;
            this.masonryState.horizontalGutterPx = this.horizontalGutterPx;
            this.masonryState.verticalGutterPx = this.verticalGutterPx;
            this.masonryState.rowLimit = props.rowLimit;
            this.masonryState.minElements = props.minElements;
            if (props.containerWidth != null && props.containerWidth > 0) this.masonryState.containerWidth = props.containerWidth;
            if (props.minItemWidthPx) this.masonryState.minItemWidthPx = props.minItemWidthPx;
            this.masonryState.hideIncompleteRow = !!props.hideIncompleteRow;
            this.masonryState.computeMidPoints = !!props.computeMidPoints;
            this.masonryState.alignLastRowHeight = !!props.alignLastRowHeight;
            this.presenter.updateChildren(this.masonryState, props.children);
            this.presenter.applyBanner(this.masonryState, props.Banner);
        }
        get horizontalGutterPx() {
            return typeof this.props.gutterPx === 'object' ? this.props.gutterPx.horizontal : this.props.gutterPx;
        }
        get verticalGutterPx() {
            return typeof this.props.gutterPx === 'object' ? this.props.gutterPx.vertical : this.props.gutterPx;
        }
        render() {
            const { containerWidth, virtualization } = this.props;
            const masonryContainerProps = {
                containerWidth: this.masonryState.containerWidth,
                rows: this.masonryState.rows,
                horizontalGutterPx: this.horizontalGutterPx,
                verticalGutterPx: this.verticalGutterPx
            };
            return (0, _jsxruntime.jsxs)("div", {
                children: [
                    (0, _jsxruntime.jsx)(_reactmeasure.default, {
                        offset: true,
                        client: containerWidth == null,
                        onResize: this.onContainerResize,
                        children: ({ measureRef })=>(0, _jsxruntime.jsx)("div", {
                                ref: measureRef
                            })
                    }),
                    (0, _jsxruntime.jsx)(this.ComposedSkipLinks, {
                        children: virtualization ? (0, _jsxruntime.jsx)(this.MasonryVirtualizationControllerComponent, {
                            virtualization: virtualization,
                            verticalOffset: this.masonryState.verticalOffset,
                            rowHeights: this.masonryState.rowHeights,
                            children: ({ rowVisibility })=>(0, _jsxruntime.jsx)(_internal_masonry.InternalMasonryContainer, {
                                    ...masonryContainerProps,
                                    rowVisibility: rowVisibility
                                })
                        }) : (0, _jsxruntime.jsx)(_internal_masonry.InternalMasonryContainer, {
                            ...masonryContainerProps
                        })
                    })
                ]
            });
        }
        constructor(props){
            super(props), this.masonryState = (_Masonry._makeObservable(this), new _masonry_presenter.MasonryState()), this.presenter = new _masonry_presenter.MasonryPresenter(), this.onContainerResize = (contentRect)=>{
                this.measureContainerWidth(contentRect);
                this.measureVerticalOffset(contentRect);
            }, this.measureContainerWidth = (contentRect)=>{
                if (contentRect.client == null || contentRect.client.width === 0) return;
                this.presenter.setContainerWidth(this.masonryState, contentRect.client.width);
                this.presenter.applyBanner(this.masonryState, this.props.Banner);
            }, this.measureVerticalOffset = (contentRect)=>{
                if (!contentRect.offset) return;
                this.presenter.setContainerOffset(this.masonryState, contentRect.offset.top);
            }, this.ComposedSkipLinks = ({ children })=>this.props.skipLinkMessages != null ? (0, _jsxruntime.jsx)(_skip_links.SkipLinks, {
                    messages: this.props.skipLinkMessages,
                    children: children
                }) : children;
            const defaultContainerWidth = this.props.containerWidth || this.props.defaultContainerWidth;
            if (defaultContainerWidth != null && defaultContainerWidth > 0) this.masonryState.containerWidth = defaultContainerWidth;
            this.MasonryVirtualizationControllerComponent = this.props.virtualization?.enableRealTimeScrollVirtualization ? _masonry_virtualization_controller.SingleWindowMasonryVirtualizationController : _masonry_virtualization_controller.MasonryVirtualizationController;
            this.initState(props);
        }
    }
    ({ c: [_Masonry, _initClass] } = _apply_decs_2203_r(Masonry, [], [
        _observer_for_class.observerForClass
    ], _React_Component));
})(), _class)();
const MasonryItem = _react.memo((props)=>{
    const { children, resizing } = props;
    return typeof children === 'function' ? children({
        resizing: resizing === true
    }) : children;
});
