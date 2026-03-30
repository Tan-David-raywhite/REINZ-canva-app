"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "observerForClass", {
    enumerable: true,
    get: function() {
        return observerForClass;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobx = require("mobx");
const _mobxreactlite = require("mobx-react-lite");
const _react = require("react");
const _utils = require("./utils/utils");
const administrationSymbol = Symbol('ObserverAdministration');
const isMobXReactObserverSymbol = Symbol('isMobXReactObserver');
const initStore = Symbol('initStore');
function getAdministration(component) {
    var _component, _administrationSymbol;
    return (_component = component)[_administrationSymbol = administrationSymbol] ?? (_component[_administrationSymbol] = {
        reaction: null,
        mounted: false,
        name: getDisplayName(component.constructor),
        ['state']: undefined,
        ['props']: undefined,
        ['context']: undefined,
        ['propsAtom']: (0, _mobx.createAtom)('props'),
        ['stateAtom']: (0, _mobx.createAtom)('state'),
        ['contextAtom']: (0, _mobx.createAtom)('context'),
        isRerenderPending: false,
        store: new MobxObserverStore(),
        triggerComponentDidUpdate: ()=>{
            component.componentDidUpdate?.(component.props, component.state);
        }
    });
}
function observerForClass(ClassComponent) {
    const { prototype } = ClassComponent;
    if (ClassComponent[isMobXReactObserverSymbol]) {
        const displayName = getDisplayName(ClassComponent);
        throw new Error(`The provided component class (${displayName}) has already been declared as an observer component.`);
    } else ClassComponent[isMobXReactObserverSymbol] = true;
    if (prototype.componentWillReact) throw new Error('The componentWillReact life-cycle event is no longer supported');
    if (Object.getPrototypeOf(ClassComponent) !== _react.PureComponent) {
        if (!prototype.shouldComponentUpdate) prototype.shouldComponentUpdate = observerSCU;
        else if (prototype.shouldComponentUpdate !== observerSCU)
        throw new Error('It is not allowed to use shouldComponentUpdate in observer based components.');
    }
    Object.defineProperties(prototype, {
        props: observablePropsDescriptor,
        state: observableStateDescriptor,
        context: observableContextDescriptor
    });
    const originalRender = prototype.render;
    if (typeof originalRender !== 'function') {
        const displayName = getDisplayName(ClassComponent);
        throw new Error(`[mobx-react] class component (${displayName}) is missing \`render\` method.` + `\n\`observer\` requires \`render\` being a function defined on prototype.` + `\n\`render = () => {}\` or \`render = function() {}\` is not supported.`);
    }
    const isJest = typeof jest !== 'undefined' && jest != null;
    if (isJest)
    prototype.render = function() {
        this.render = (0, _mobxreactlite.isUsingStaticRendering)() ? originalRender : createReactiveRender.call(this, originalRender);
        return this.render();
    };
    else prototype.render = function() {
        Object.defineProperty(this, 'render', {
            configurable: false,
            writable: false,
            value: (0, _mobxreactlite.isUsingStaticRendering)() ? originalRender : createReactiveRender.call(this, originalRender)
        });
        return this.render();
    };
    (0, _utils.patch)(prototype, 'componentDidMount', function() {
        const admin = getAdministration(this);
        admin.mounted = true;
        _mobxreactlite._observerFinalizationRegistry.unregister(this);
        if (!admin.reaction)
        this.forceUpdate();
    });
    (0, _utils.patch)(prototype, 'componentWillUnmount', function() {
        if ((0, _mobxreactlite.isUsingStaticRendering)()) return;
        const admin = getAdministration(this);
        admin.reaction?.dispose();
        admin.reaction = null;
        admin.mounted = false;
    });
    if (prototype.componentDidCatch) (0, _utils.patch)(prototype, 'componentDidCatch', function() {
        const admin = getAdministration(this);
        admin.store.setValue(initStore);
        this.forceUpdate();
    });
    return ClassComponent;
}
class MobxObserverStore {
    constructor(){
        this.listeners = new Set();
        this.setValue = (newValue)=>{
            if (this.value !== newValue) {
                this.value = newValue;
                this.notifyListeners();
            }
        };
        this.getValue = ()=>{
            return this.value;
        };
        this.subscribe = (listener)=>{
            this.listeners.add(listener);
            return ()=>{
                this.listeners.delete(listener);
            };
        };
        this.notifyListeners = ()=>{
            this.listeners.forEach((listener)=>listener());
        };
        this.value = initStore;
    }
}
function getDisplayName(ClassComponent) {
    return ClassComponent.displayName || ClassComponent.name || '<component>';
}
function SyncUpdateComponent(props) {
    const symbolValue = (0, _react.useSyncExternalStore)(props.store.subscribe, props.store.getValue, props.store.getValue);
    const triggerComponentDidUpdate = props.triggerComponentDidUpdate;
    (0, _react.useLayoutEffect)(()=>{
        if (symbolValue !== initStore)
            triggerComponentDidUpdate();
    }, [
        symbolValue,
        triggerComponentDidUpdate
    ]);
    return props.getChildren();
}
function createReactiveRender(originalRender) {
    const boundOriginalRender = originalRender.bind(this);
    const admin = getAdministration(this);
    const reactiveRender = ()=>{
        if (!admin.reaction) {
            admin.reaction = createReaction(admin);
            if (!admin.mounted)
            _mobxreactlite._observerFinalizationRegistry.register(this, admin, this);
        }
        let error;
        let renderResult;
        admin.reaction.track(()=>{
            try {
                renderResult = (0, _mobx._allowStateChanges)(false, boundOriginalRender);
                admin.isRerenderPending = false;
            } catch (e) {
                error = e;
            }
        });
        if (error) throw error;
        return renderResult;
    };
    return ()=>(0, _jsxruntime.jsx)(SyncUpdateComponent, {
            triggerComponentDidUpdate: admin.triggerComponentDidUpdate,
            getChildren: reactiveRender,
            store: admin.store
        });
}
function createReaction(admin) {
    return new _mobx.Reaction(`${admin.name}.render()`, ()=>{
        if (admin.isRerenderPending)
        return;
        admin.isRerenderPending = true;
        admin.store.setValue(Symbol());
    });
}
function observerSCU(nextProps, nextState) {
    if ((0, _mobxreactlite.isUsingStaticRendering)())
    console.warn('[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.');
    const propsChanged = !(0, _utils.shallowEqual)(this.props, nextProps);
    const stateChanged = !(0, _utils.shallowEqual)(this.state, nextState);
    const shouldUpdate = propsChanged || stateChanged;
    if (shouldUpdate) {
        const admin = getAdministration(this);
        admin.store.setValue(initStore);
    }
    return shouldUpdate;
}
function createObservablePropDescriptor(key) {
    const atomKey = `${key}Atom`;
    return {
        configurable: true,
        enumerable: true,
        get () {
            const admin = getAdministration(this);
            const prevReadState = (0, _mobx._allowStateReadsStart)(true);
            admin[atomKey].reportObserved();
            (0, _mobx._allowStateReadsEnd)(prevReadState);
            return admin[key];
        },
        set (value) {
            const admin = getAdministration(this);
            if (!(0, _utils.shallowEqual)(admin[key], value)) {
                admin[key] = value;
                admin.isRerenderPending = true;
                try {
                    admin[atomKey].reportChanged();
                } catch (e) {
                    const observers = Array.from(admin[atomKey].observers_.values()).map((observer)=>observer.name_);
                    throw new Error(`Error during reportChanged. key: ${key}, type: ${this.constructor.name}, observers: ${observers.join(', ')}`, {
                        cause: e
                    });
                }
            } else admin[key] = value;
        }
    };
}
const observablePropsDescriptor = createObservablePropDescriptor('props');
const observableStateDescriptor = createObservablePropDescriptor('state');
const observableContextDescriptor = createObservablePropDescriptor('context');
