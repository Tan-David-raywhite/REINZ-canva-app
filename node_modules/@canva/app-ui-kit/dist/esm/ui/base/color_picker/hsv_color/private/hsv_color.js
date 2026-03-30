import { RgbaColor, RgbColor } from '../../../../../base/color/color';
import { Preconditions } from '../../../../../base/preconditions';
export class HsvColor {
    static fromHexString(hex, alpha) {
        const rgbToHue = ({ r, g, b })=>{
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const d = max - min;
            let h;
            if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
            else if (max === g) h = (b - r) / d + 2;
            else h = (r - g) / d + 4;
            return h / 6;
        };
        const rgb = RgbColor.fromHexString(hex);
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        if (max === min)
            return new HsvColor(0, 0, max, alpha);
        return new HsvColor(rgbToHue(rgb), (max - min) / max, max, alpha);
    }
    with(channels) {
        return new HsvColor(channels.h ?? this.h, channels.s ?? this.s, channels.v ?? this.v, channels.alpha ?? this.alpha);
    }
    matchHexString(target) {
        if (this.toRgb().toHexString() === target)
        return this;
        const hsvTarget = HsvColor.fromHexString(target);
        if (hsvTarget.v === 0)
        return this.with({
            v: 0
        });
        else if (hsvTarget.s === 0)
        return this.with({
            s: 0,
            v: hsvTarget.v
        });
        else return hsvTarget;
    }
    toRgb() {
        const { s, v } = this, h = this.h * 6, i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = Math.round([
            v,
            q,
            p,
            p,
            t,
            v
        ][mod] * 255), g = Math.round([
            t,
            v,
            v,
            q,
            p,
            p
        ][mod] * 255), b = Math.round([
            p,
            p,
            t,
            v,
            v,
            q
        ][mod] * 255);
        return new RgbColor(r, g, b);
    }
    toRgba() {
        const { r, g, b } = this.toRgb();
        return new RgbaColor(r, g, b, this.alpha);
    }
    equals(that) {
        return this.h === that.h && this.s === that.s && this.v === that.v;
    }
    constructor(h, s, v, alpha = 1){
        this.h = h;
        this.s = s;
        this.v = v;
        this.alpha = alpha;
        Preconditions.checkArgument(0 <= s && s <= 1, '0 <= saturation <= 1: {}', s);
        Preconditions.checkArgument(0 <= v && v <= 1, '0 <= value <= 1: {}', v);
        this.h = h - Math.floor(h);
    }
}
