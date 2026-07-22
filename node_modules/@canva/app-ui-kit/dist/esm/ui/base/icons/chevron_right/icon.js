import { createIcon } from '../icons';
import chevronRightLargeSvg from './icon-chevron-right-large.inline.svg';
import chevronRightSmallSvg from './icon-chevron-right-small.inline.svg';
import chevronRightTinySvg from './icon-chevron-right-tiny.inline.svg';
import chevronRightSvg from './icon-chevron-right.inline.svg';
export const ChevronRightIcon = createIcon({
    tiny: chevronRightTinySvg,
    small: chevronRightSmallSvg,
    medium: chevronRightSvg,
    large: chevronRightLargeSvg
}, {
    followDirection: true
});
