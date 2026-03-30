"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTypographyAriaAttributes", {
    enumerable: true,
    get: function() {
        return getTypographyAriaAttributes;
    }
});
function getTypographyAriaAttributes(props) {
    const ariaAttrs = {};
    if (props.ariaHidden)
        ariaAttrs['aria-hidden'] = true;
    if (props.ariaLabel) ariaAttrs['aria-label'] = props.ariaLabel;
    if (props.ariaLive) ariaAttrs['aria-live'] = props.ariaLive;
    return ariaAttrs;
}
