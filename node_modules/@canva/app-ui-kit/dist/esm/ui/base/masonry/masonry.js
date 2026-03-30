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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var _initClass, _React_Component;
import { makeObservable } from '../../../base/make_observable/make_observable';
import { disposeOnUnmount } from '../../../base/mobx_react/dispose_on_unmount';
import { observerForClass } from '../../../base/mobx_react/observer_for_class';
import * as mobx from 'mobx';
import { reaction } from 'mobx';
import * as React from 'react';
import Measure from 'react-measure';
import { InternalMasonryContainer } from './internal/internal_masonry';
import { MasonryPresenter, MasonryState } from './masonry_presenter';
import { MasonryVirtualizationController, SingleWindowMasonryVirtualizationController } from './masonry_virtualization_controller';
import { SkipLinks } from './skip_links';
let _Masonry;
new (_class = class extends _identity {
    constructor(){
        super(_Masonry), _initClass();
    }
}, (()=>{
    class Masonry extends (_React_Component = React.Component) {
        static _makeObservable(instance) {
            makeObservable(instance, {
                horizontalGutterPx: mobx.computed,
                verticalGutterPx: mobx.computed
            });
        }
        componentDidMount() {
            disposeOnUnmount(this, mobx.reaction(()=>this.props, ()=>{
                mobx.runInAction(()=>{
                    this.initState(this.props);
                });
            }));
            disposeOnUnmount(this, reaction(()=>{
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
            return _jsxs("div", {
                children: [
                    _jsx(Measure, {
                        offset: true,
                        client: containerWidth == null,
                        onResize: this.onContainerResize,
                        children: ({ measureRef })=>_jsx("div", {
                                ref: measureRef
                            })
                    }),
                    _jsx(this.ComposedSkipLinks, {
                        children: virtualization ? _jsx(this.MasonryVirtualizationControllerComponent, {
                            virtualization: virtualization,
                            verticalOffset: this.masonryState.verticalOffset,
                            rowHeights: this.masonryState.rowHeights,
                            children: ({ rowVisibility })=>_jsx(InternalMasonryContainer, {
                                    ...masonryContainerProps,
                                    rowVisibility: rowVisibility
                                })
                        }) : _jsx(InternalMasonryContainer, {
                            ...masonryContainerProps
                        })
                    })
                ]
            });
        }
        constructor(props){
            super(props), this.masonryState = (_Masonry._makeObservable(this), new MasonryState()), this.presenter = new MasonryPresenter(), this.onContainerResize = (contentRect)=>{
                this.measureContainerWidth(contentRect);
                this.measureVerticalOffset(contentRect);
            }, this.measureContainerWidth = (contentRect)=>{
                if (contentRect.client == null || contentRect.client.width === 0) return;
                this.presenter.setContainerWidth(this.masonryState, contentRect.client.width);
                this.presenter.applyBanner(this.masonryState, this.props.Banner);
            }, this.measureVerticalOffset = (contentRect)=>{
                if (!contentRect.offset) return;
                this.presenter.setContainerOffset(this.masonryState, contentRect.offset.top);
            }, this.ComposedSkipLinks = ({ children })=>this.props.skipLinkMessages != null ? _jsx(SkipLinks, {
                    messages: this.props.skipLinkMessages,
                    children: children
                }) : children;
            const defaultContainerWidth = this.props.containerWidth || this.props.defaultContainerWidth;
            if (defaultContainerWidth != null && defaultContainerWidth > 0) this.masonryState.containerWidth = defaultContainerWidth;
            this.MasonryVirtualizationControllerComponent = this.props.virtualization?.enableRealTimeScrollVirtualization ? SingleWindowMasonryVirtualizationController : MasonryVirtualizationController;
            this.initState(props);
        }
    }
    ({ c: [_Masonry, _initClass] } = _apply_decs_2203_r(Masonry, [], [
        observerForClass
    ], _React_Component));
})(), _class)();
export const MasonryItem = React.memo((props)=>{
    const { children, resizing } = props;
    return typeof children === 'function' ? children({
        resizing: resizing === true
    }) : children;
});
export { _Masonry as Masonry };
