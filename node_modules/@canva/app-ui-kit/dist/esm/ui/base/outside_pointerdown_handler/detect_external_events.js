import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styles from './detect_external_events.css';
export class DetectExternalEvents extends React.Component {
    render() {
        const { children, component: Component = 'div', reactEvents, onExternalEvent } = this.props;
        let events = {};
        if (onExternalEvent) events = reactEvents.reduce((obj, eventName)=>{
            obj[eventName] = this._handleWrapperEvent;
            return obj;
        }, {});
        return _jsx(Component, {
            className: styles.detectExternalEvents,
            ...events,
            children: children
        });
    }
    componentDidMount() {
        this.props.onExternalEvent && this._setupTopLevelEvents();
    }
    componentDidUpdate() {
        this.props.onExternalEvent && this._setupTopLevelEvents();
    }
    componentWillUnmount() {
        if (this._disposeTopLevelEvents) {
            this._disposeTopLevelEvents();
            this._disposeTopLevelEvents = null;
        }
    }
    _setupTopLevelEvents() {
        if (this._disposeTopLevelEvents) {
            this._disposeTopLevelEvents();
            this._disposeTopLevelEvents = null;
        }
        const { domEvents } = this.props;
        domEvents.forEach((eventName)=>{
            window.addEventListener(eventName, this._handleTopLevelEvent);
        });
        this._disposeTopLevelEvents = ()=>{
            domEvents.forEach((eventName)=>{
                window.removeEventListener(eventName, this._handleTopLevelEvent);
            });
        };
    }
    constructor(...args){
        super(...args), this._disposeTopLevelEvents = null, this._lastInterceptedEvent = null, this._handleWrapperEvent = (event)=>{
            this._lastInterceptedEvent = event.nativeEvent;
        }, this._handleTopLevelEvent = (event)=>{
            const { onExternalEvent } = this.props;
            const wasEventIntercepted = this._lastInterceptedEvent === event;
            if (onExternalEvent && !wasEventIntercepted) onExternalEvent(event);
            this._lastInterceptedEvent = null;
        };
    }
}
