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
    get Carousel () {
        return _carousel.Carousel;
    },
    get CarouselCenterAlignSpacer () {
        return _carousel.CarouselCenterAlignSpacer;
    },
    get CarouselItem () {
        return _carousel.CarouselItem;
    },
    get ProminentScrollButton () {
        return _carousel.ProminentScrollButton;
    },
    get SubtleScrollButton () {
        return _carousel.SubtleScrollButton;
    },
    get carouselGaps () {
        return _carousel.carouselGaps;
    },
    get useScrollButtonAriaLabel () {
        return _carousel.useScrollButtonAriaLabel;
    }
});
const _carousel = require("./private/carousel");
