import { createIcon } from '../icons';
import chevronLeftLargeSvg from './icon-chevron-left-large.inline.svg';
import chevronLeftSmallSvg from './icon-chevron-left-small.inline.svg';
import chevronLeftTinySvg from './icon-chevron-left-tiny.inline.svg';
import chevronLeftSvg from './icon-chevron-left.inline.svg';
export const ChevronLeftIcon = createIcon({
    tiny: chevronLeftTinySvg,
    small: chevronLeftSmallSvg,
    medium: chevronLeftSvg,
    large: chevronLeftLargeSvg
}, {
    followDirection: true
});
