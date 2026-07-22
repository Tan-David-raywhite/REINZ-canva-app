import { createIcon } from '../icons';
import proCrownLargeSvg from './icon-pro-crown-large.inline.svg';
import proCrownSmallSvg from './icon-pro-crown-small.inline.svg';
import proCrownTinySvg from './icon-pro-crown-tiny.inline.svg';
import proCrownSvg from './icon-pro-crown.inline.svg';
import styles from './styles.css';
const glyphs = {
    tiny: proCrownTinySvg,
    small: proCrownSmallSvg,
    medium: proCrownSvg,
    large: proCrownLargeSvg
};
export const ProCrownCustomIcon = createIcon(glyphs);
export const ProCrownGoldIcon = createIcon(glyphs, {
    extraClassName: styles.gold,
    defaultSize: 'small'
});
export const ProCrownGreyIcon = createIcon(glyphs, {
    extraClassName: styles.grey,
    defaultSize: 'small'
});
