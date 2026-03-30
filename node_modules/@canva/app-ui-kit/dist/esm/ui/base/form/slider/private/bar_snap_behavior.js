export class NeverSnap {
    onKeyDown() {
        return undefined;
    }
    onKeyUp() {
        return undefined;
    }
    onChange(props, newValue) {
        props.onChange(newValue);
    }
}
export class Snap {
    maybeSnapWithMouse(pxPerUnit, newValue) {
        if (this.sideOfSnap == null)
            this.sideOfSnap = Math.sign(newValue - this.snapPoint);
        if (Math.sign(newValue - this.snapPoint) !== this.sideOfSnap) {
            if (Math.abs(newValue - this.snapPoint) <= Snap.SNAP_RANGE_IN_PX / pxPerUnit)
                return this.snapPoint;
            else
                this.sideOfSnap = Math.sign(newValue - this.snapPoint);
        }
        return newValue;
    }
    maybeSnapWithKeys(oldValue, newValue) {
        if (this.valueAtKeyDown == null) this.valueAtKeyDown = oldValue;
        if (this.valueAtKeyDown !== this.snapPoint && oldValue === this.snapPoint) {
            this.sideOfSnap = this.snapPoint;
            return this.snapPoint;
        } else return newValue;
    }
    constructor(snapPoint){
        this.snapPoint = snapPoint;
        this.usingArrowKeys = false;
        this.onKeyDown = ()=>this.usingArrowKeys = true;
        this.onKeyUp = ()=>{
            this.usingArrowKeys = false;
            this.valueAtKeyDown = undefined;
        };
        this.onChange = ({ onChange, value: oldValue }, newValue, pxPerUnit)=>{
            newValue = this.usingArrowKeys ? this.maybeSnapWithKeys(oldValue, newValue) : this.maybeSnapWithMouse(pxPerUnit, newValue);
            if (newValue !== oldValue) onChange(newValue);
        };
    }
}
Snap.SNAP_RANGE_IN_PX = 10;
