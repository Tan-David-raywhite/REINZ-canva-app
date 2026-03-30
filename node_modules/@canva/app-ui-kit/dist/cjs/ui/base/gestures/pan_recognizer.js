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
    get PanRecognizer () {
        return PanRecognizer;
    },
    get getDirection () {
        return getDirection;
    },
    get getPanEventProperties () {
        return getPanEventProperties;
    }
});
const _recognizer = require("./recognizer");
class PanRecognizer {
    getBrowserHandledTouchActions() {
        if (!this.activePointers.includes('touch')) return [
            'auto'
        ];
        const allowedTouchActions = [
            'pinch-zoom'
        ];
        if (this.opts.direction) {
            if ([
                'up',
                'down',
                'vertical'
            ].includes(this.opts.direction))
            allowedTouchActions.push('pan-x');
            else if ([
                'left',
                'right',
                'horizontal'
            ].includes(this.opts.direction)) allowedTouchActions.push('pan-y');
        }
        return allowedTouchActions;
    }
    onPointerDown(pointer, allPointers) {
        if (pointer.start.button == null && this.activePointers.includes('touch') || pointer.start.button === 0 && this.activePointers.includes('mouse_main') || pointer.start.button === 1 && this.activePointers.includes('mouse_middle') || pointer.start.button === 2 && this.activePointers.includes('mouse_secondary'))
            this.checkState(allPointers);
    }
    onPointerUp(pointer, allPointers) {
        this.checkState(allPointers);
    }
    onPointerMove(pointers, allPointers) {
        if (!this.state)
        return;
        const { start, pointer: { current } } = this.state;
        const event = getPanEventProperties(current, start, current);
        if (this.state.recognized) {
            this.opts.onMove && this.opts.onMove(event);
            return;
        }
        if (this.shouldStart(event)) {
            this.state.recognized = true;
            this.opts.onStart && this.opts.onStart(event);
            return;
        }
    }
    onUnmount() {
        if (this.opts.onEnd && this.state?.recognized) {
            const { start, pointer: { current } } = this.state;
            this.opts.onEnd(getPanEventProperties(current, start, current));
        }
    }
    checkState(allPointers) {
        if (allPointers.size !== 1 && this.state) {
            const { recognized, start, pointer: { current } } = this.state;
            const event = getPanEventProperties(current, start, current);
            this.state = undefined;
            if (recognized) this.opts.onEnd?.(event);
            else this.opts.onUnrecognizedEnd?.(event);
        }
        if (allPointers.size === 1 && !this.state) {
            const pointer = allPointers.values().next().value;
            this.state = {
                recognized: false,
                pointer,
                start: pointer.current
            };
        }
    }
    shouldStart(event) {
        if (event.distance < (this.opts.minDistance ?? 10)) return false;
        return this.checkDirection(event);
    }
    checkDirection(event) {
        if (!this.opts.direction) return true;
        else if (this.opts.direction === 'vertical') return event.direction === 'up' || event.direction === 'down';
        else if (this.opts.direction === 'horizontal') return event.direction === 'left' || event.direction === 'right';
        else return event.direction === this.opts.direction;
    }
    constructor(opts){
        this.opts = opts;
        this.shouldDisableTextSelect = true;
        this.activePointers = opts.activePointers ?? [
            'touch',
            'mouse_main'
        ];
    }
}
function getPanEventProperties(pointer, start, current) {
    const distanceX = current.x - start.x;
    const distanceY = current.y - start.y;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const deltaX = current.x - start.x;
    const deltaY = current.y - start.y;
    const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const deltaTime = current.timestamp - start.timestamp;
    return {
        ...(0, _recognizer.getCommonEventProperties)(pointer, current),
        velocityX: deltaX / deltaTime,
        velocityY: deltaY / deltaTime,
        velocity: delta / deltaTime,
        distanceX,
        distanceY,
        distance,
        direction: getDirection(deltaX, deltaY),
        button: start.button
    };
}
function getDirection(distanceX, distanceY) {
    if (distanceX === distanceY) return 'none';
    if (Math.abs(distanceX) >= Math.abs(distanceY)) return distanceX < 0 ? 'left' : 'right';
    return distanceY < 0 ? 'up' : 'down';
}
