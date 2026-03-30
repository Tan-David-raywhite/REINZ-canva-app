import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Carousel as EaselCarousel, CarouselItem, SubtleScrollButton } from '../../../../../base/carousel/carousel';
/** 
 * Carousel component accepts children(array of React nodes) and renders them in a row allowing the users
 * to interact with the items using scroll buttons.
 * Note: Carousel creates a stacking context for all its children.
 */ export function Carousel(props) {
    return _jsx(EaselCarousel, {
        fadeSize: "3u",
        ariaLabel: undefined,
        gap: "1u",
        disableSkipLinks: props.outOfViewItemBehavior !== 'none',
        outOfViewItemBehavior: props.outOfViewItemBehavior,
        children: React.Children.map(props.children, (child, index)=>_jsx(CarouselItem, {
                children: child
            }, index)),
        scrollButton: (props)=>_jsx(SubtleScrollButton, {
                ...props
            })
    });
}
