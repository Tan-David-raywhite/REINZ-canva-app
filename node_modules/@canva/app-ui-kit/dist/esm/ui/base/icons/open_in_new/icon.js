import { createIcon } from '../icons';
import openInNewSmallSvg from './icon-open-in-new-small.inline.svg';
import openInNewTinySvg from './icon-open-in-new-tiny.inline.svg';
import openInNewSvg from './icon-open-in-new.inline.svg';
export const OpenInNewIcon = createIcon({
    tiny: openInNewTinySvg,
    small: openInNewSmallSvg,
    medium: openInNewSvg
}, {
    followDirection: true
});
