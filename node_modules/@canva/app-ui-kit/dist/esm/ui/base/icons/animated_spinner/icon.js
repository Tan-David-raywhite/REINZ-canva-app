import { createIcon } from '../icons';
import loadingLargeSvg from './icon-animated-spinner-large.inline.svg';
import loadingSmallSvg from './icon-animated-spinner-small.inline.svg';
import loadingTinySvg from './icon-animated-spinner-tiny.inline.svg';
import loadingSvg from './icon-animated-spinner.inline.svg';
export const AnimatedSpinnerIcon = createIcon({
    tiny: loadingTinySvg,
    small: loadingSmallSvg,
    medium: loadingSvg,
    large: loadingLargeSvg
}, {
    spinning: true
});
