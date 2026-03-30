"use strict"
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
    get maxBy () {
        return maxBy;
    },
    get minBy () {
        return minBy;
    }
});
function maxBy(xs, f) {
    let maxX;
    let maxY;
    for (const x of xs){
        const y = f(x);
        if (maxY == null ? !Number.isNaN(y) : y > maxY) {
            maxX = x;
            maxY = y;
        }
    }
    return maxX;
}
function minBy(xs, f) {
    return maxBy(xs, (x)=>-f(x));
}
