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
    get ClientPosition () {
        return ClientPosition;
    },
    get isDistancePastThreshold () {
        return isDistancePastThreshold;
    }
});
class ClientPosition {
    static fromEvent({ clientX, clientY, pageX, pageY }) {
        return new ClientPosition(clientX, clientY, pageX, pageY);
    }
    constructor(clientX, clientY, pageX, pageY){
        this.clientX = clientX;
        this.clientY = clientY;
        this.pageX = pageX;
        this.pageY = pageY;
    }
}
function isDistancePastThreshold(a, b, threshold = 4) {
    const distance2 = (a.clientX - b.clientX) ** 2 + (a.clientY - b.clientY) ** 2;
    return distance2 >= threshold ** 2;
}
