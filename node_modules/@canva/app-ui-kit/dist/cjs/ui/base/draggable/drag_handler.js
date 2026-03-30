"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DragHandler", {
    enumerable: true,
    get: function() {
        return DragHandler;
    }
});
const _client_position = require("./client_position");
const DEFAULT_HOLD_DURATION = 300;
const SHORT_HOLD_DURATION = 150;
class DragHandler {
    static modifiersFromEvent(evt) {
        const { shiftKey, altKey, ctrlKey, metaKey } = evt;
        return {
            shiftKey,
            altKey,
            ctrlKey,
            metaKey
        };
    }
    get started() {
        return this.started_;
    }
    get currentPosition() {
        return this.currentPosition_;
    }
    get modifiers() {
        return this.modifiers_;
    }
    forceStart() {
        if (this.started_) return;
        this.cancelled = false;
        this.callbacks.onDragStart({
            ...this.modifiers_,
            ...this.initialPosition
        });
        if (this.cancelled) return;
        document.addEventListener('keyup', this.onKeyChange);
        document.addEventListener('keydown', this.onKeyChange);
        this.started_ = true;
        this.didStart && this.didStart();
    }
    stop() {
        window.clearTimeout(this.holdTimer);
        this.cancelled = true;
        if (!this.started_) return;
        try {
            this.willStop && this.willStop();
        } finally{
            this.started_ = false;
            document.removeEventListener('keyup', this.onKeyChange);
            document.removeEventListener('keydown', this.onKeyChange);
            this.callbacks.onDragEnd({
                ...this.modifiers_,
                ...this.currentPosition_
            });
        }
    }
    updateAndMayStart(pos, modifiers) {
        this.currentPosition_ = pos;
        if (this.started && !modifiersEqual(modifiers, this.modifiers))
        this.callbacks.onDragKeyChange({
            ...modifiers,
            ...this.currentPosition_
        });
        this.modifiers_ = modifiers;
        const overThreshold = (0, _client_position.isDistancePastThreshold)(this.initialPosition, this.currentPosition_);
        if (!this.started_ && this.holdToDrag === 'off' && overThreshold) this.forceStart();
    }
    handleMove(pos, modifiers) {
        this.updateAndMayStart(pos, modifiers);
        if (this.started_) this.callbacks.onDragMove({
            ...modifiers,
            ...pos
        });
        else if (this.holdToDrag !== 'off' && (0, _client_position.isDistancePastThreshold)(this.initialPosition, this.currentPosition_)) this.stop();
    }
    constructor(initialPosition, callbacks, holdToDrag, didStart, willStop){
        this.initialPosition = initialPosition;
        this.callbacks = callbacks;
        this.holdToDrag = holdToDrag;
        this.didStart = didStart;
        this.willStop = willStop;
        this.cancelled = false;
        this.started_ = false;
        this.modifiers_ = {
            shiftKey: false,
            altKey: false,
            ctrlKey: false,
            metaKey: false
        };
        this.holdTimer = 0;
        this.onKeyChange = (e)=>{
            const { altKey, shiftKey, ctrlKey, metaKey } = e;
            if (modifiersEqual(e, this.modifiers)) return;
            this.modifiers_ = {
                altKey,
                shiftKey,
                ctrlKey,
                metaKey
            };
            this.callbacks.onDragKeyChange({
                ...this.modifiers_,
                ...this.currentPosition_
            });
        };
        this.currentPosition_ = initialPosition;
        if (this.holdToDrag !== 'off')
        this.holdTimer = window.setTimeout(()=>{
            window.navigator.vibrate?.(50);
            this.forceStart();
        }, this.holdToDrag === 'short' ? SHORT_HOLD_DURATION : DEFAULT_HOLD_DURATION);
    }
}
function modifiersEqual(a, b) {
    return a.shiftKey === b.shiftKey && a.ctrlKey === b.ctrlKey && a.metaKey === b.metaKey && a.altKey === b.altKey;
}
