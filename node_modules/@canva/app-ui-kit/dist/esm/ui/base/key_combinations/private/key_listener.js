import { Preconditions } from '../../../../base/preconditions';
import { isElementInput } from '../../dom/input/input';
import { KeyMap } from './key_map';
const eventKinds = [
    'keydown',
    'keyup',
    'keypress'
];
export class KeyListener {
    static getEnglishKey(event) {
        const eventKey = event.key != null && KeyMap.englishKeys.has(event.key) ? event.key.toLowerCase() : KeyMap.codeToKey[event.code];
        if (eventKey == null)
            return event.key;
        if (event.shiftKey && !event.code.startsWith('Numpad') && eventKey >= 'a' && eventKey <= 'z') return KeyMap.shiftMap[eventKey] ? KeyMap.shiftMap[eventKey] : eventKey;
        return eventKey;
    }
    static isKeyMatch(event, trigger) {
        const eventKey = trigger.ignoreKeyboardLayout === false ? event.key : KeyListener.getEnglishKey(event);
        const isModifiersOtherThanShiftMatch = (event.altKey === !!trigger.altKey || eventKey === 'Alt') && (event.ctrlKey === !!trigger.ctrlKey || eventKey === 'Control') && (event.metaKey === !!trigger.metaKey || eventKey === 'Meta');
        if (!isModifiersOtherThanShiftMatch) return false;
        const specialChars = new Set([
            '*',
            '+'
        ]);
        const charsToIgnoreShift = new Set([
            'Shift',
            '/'
        ]);
        if (eventKey === trigger.key) {
            if (KeyMap.reverseShiftMap[trigger.key] != null)
            return specialChars.has(trigger.key) ? event.shiftKey === !!trigger.shiftKey : true;
            return event.shiftKey === !!trigger.shiftKey || charsToIgnoreShift.has(eventKey);
        } else if (KeyMap.shiftMap[trigger.key] != null && trigger.shiftKey) return specialChars.has(KeyMap.shiftMap[trigger.key]) ?
        false :
        eventKey === KeyMap.shiftMap[trigger.key];
        return false;
    }
    addListener(kind, trigger, callback) {
        const triggerClone = {
            ...trigger
        };
        const handler = (ev)=>{
            if (KeyListener.isKeyMatch(ev, triggerClone) && !this.shouldIgnoreEvent(ev)) callback(ev);
        };
        this.element.addEventListener(kind, handler);
        this.events[kind].push(handler);
    }
    shouldIgnoreEvent(ev) {
        const eventTarget = Preconditions.checkExists(ev.target, 'event target must exist');
        const ownerDocument = Preconditions.checkExists(eventTarget.ownerDocument, 'event target must be node and ownerDocument must exist');
        if (ev.keyCode === 229)
            return true;
        return this.opt.ignoreInput && isElementInput(eventTarget, ownerDocument.defaultView);
    }
    reset() {
        for (const eventType of eventKinds){
            this.events[eventType].forEach((handler)=>this.element.removeEventListener(eventType, handler));
            this.events[eventType] = [];
        }
    }
    constructor(element, opt){
        this.element = element;
        this.opt = opt;
        this.events = {
            ['keydown']: [],
            ['keyup']: [],
            ['keypress']: []
        };
    }
}
let keyListenerOnBody;
export function addListenerOnBody(kind, trigger, callback) {
    if (keyListenerOnBody == null) keyListenerOnBody = new KeyListener(document.body, {
        ignoreInput: true
    });
    keyListenerOnBody.addListener(kind, trigger, callback);
}
