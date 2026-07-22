import { createIcon } from '../icons';
import arrowLeftSmallSvg from './icon-arrow-left-small.inline.svg';
import arrowLeftSvg from './icon-arrow-left.inline.svg';
export const ArrowLeftIcon = createIcon({
    small: arrowLeftSmallSvg,
    medium: arrowLeftSvg
}, {
    followDirection: true
});
