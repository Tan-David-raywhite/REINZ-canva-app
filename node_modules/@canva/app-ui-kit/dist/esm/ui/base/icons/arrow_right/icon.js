import { createIcon } from '../icons';
import arrowRightSmallSvg from './icon-arrow-right-small.inline.svg';
import arrowRightSvg from './icon-arrow-right.inline.svg';
export const ArrowRightIcon = createIcon({
    small: arrowRightSmallSvg,
    medium: arrowRightSvg
}, {
    followDirection: true
});
