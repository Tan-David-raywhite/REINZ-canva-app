import { jsx as _jsx } from "react/jsx-runtime";
import { _allowStateChanges,
_allowStateReadsEnd,
_allowStateReadsStart, createAtom, Reaction } from 'mobx';
import { _observerFinalizationRegistry as observerFinalizationRegistry, isUsingStaticRendering } from 'mobx-react-lite';
import { PureComponent, useLayoutEffect, useSyncExternalStore } from 'react';
import { patch, shallowEqual } from './utils/utils';
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
        ['propsAtom']: createAtom('props'),
        ['stateAtom']: createAtom('state'),
        ['contextAtom']: createAtom('context'),
        isRerenderPending: false,
        store: new MobxObserverStore(),
        triggerComponentDidUpdate: ()=>{
            component.componentDidUpdate?.(component.props, component.state);
        }
    });
}
export function observerForClass(ClassComponent) {
    const { prototype } = ClassComponent;
    if (ClassComponent[isMobXReactObserverSymbol]) {
        const displayName = getDisplayName(ClassComponent);
        throw new Error(`The provided component class (${displayName}) has already been declared as an observer component.`);
    } else ClassComponent[isMobXReactObserverSymbol] = true;
    if (prototype.componentWillReact) throw new Error('The componentWillReact life-cycle event is no longer supported');
    if (Object.getPrototypeOf(ClassComponent) !== PureComponent) {
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
        this.render = isUsingStaticRendering() ? originalRender : createReactiveRender.call(this, originalRender);
        return this.render();
    };
    else prototype.render = function() {
        Object.defineProperty(this, 'render', {
            configurable: false,
            writable: false,
            value: isUsingStaticRendering() ? originalRender : createReactiveRender.call(this, originalRender)
        });
        return this.render();
    };
    patch(prototype, 'componentDidMount', function() {
        const admin = getAdministration(this);
        admin.mounted = true;
        observerFinalizationRegistry.unregister(this);
        if (!admin.reaction)
        this.forceUpdate();
    });
    patch(prototype, 'componentWillUnmount', function() {
        if (isUsingStaticRendering()) return;
        const admin = getAdministration(this);
        admin.reaction?.dispose();
        admin.reaction = null;
        admin.mounted = false;
    });
    if (prototype.componentDidCatch) patch(prototype, 'componentDidCatch', function() {
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
    const symbolValue = useSyncExternalStore(props.store.subscribe, props.store.getValue, props.store.getValue);
    const triggerComponentDidUpdate = props.triggerComponentDidUpdate;
    useLayoutEffect(()=>{
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
            observerFinalizationRegistry.register(this, admin, this);
        }
        let error;
        let renderResult;
        admin.reaction.track(()=>{
            try {
                renderResult = _allowStateChanges(false, boundOriginalRender);
                admin.isRerenderPending = false;
            } catch (e) {
                error = e;
            }
        });
        if (error) throw error;
        return renderResult;
    };
    return ()=>_jsx(SyncUpdateComponent, {
            triggerComponentDidUpdate: admin.triggerComponentDidUpdate,
            getChildren: reactiveRender,
            store: admin.store
        });
}
function createReaction(admin) {
    return new Reaction(`${admin.name}.render()`, ()=>{
        if (admin.isRerenderPending)
        return;
        admin.isRerenderPending = true;
        admin.store.setValue(Symbol());
    });
}
function observerSCU(nextProps, nextState) {
    if (isUsingStaticRendering())
    console.warn('[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.');
    const propsChanged = !shallowEqual(this.props, nextProps);
    const stateChanged = !shallowEqual(this.state, nextState);
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
            const prevReadState = _allowStateReadsStart(true);
            admin[atomKey].reportObserved();
            _allowStateReadsEnd(prevReadState);
            return admin[key];
        },
        set (value) {
            const admin = getAdministration(this);
            if (!shallowEqual(admin[key], value)) {
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
