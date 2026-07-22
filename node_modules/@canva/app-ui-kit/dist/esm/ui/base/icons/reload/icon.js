import { createIcon } from '../icons';
import reloadLargeSvg from './icon-reload-large.inline.svg';
import reloadTinySvg from './icon-reload-tiny.inline.svg';
import reloadSvg from './icon-reload.inline.svg';
import styles from './styles.css';
export const ReloadIcon = createIcon({
    tiny: reloadTinySvg,
    medium: reloadSvg,
    large: reloadLargeSvg
});
export const ReplayIcon = createIcon({
    tiny: reloadTinySvg,
    medium: reloadSvg,
    large: reloadLargeSvg
}, {
    extraClassName: styles.replayIcon,
    followDirection: false
});
export const RestoreIcon = createIcon({
    tiny: reloadTinySvg,
    medium: reloadSvg,
    large: reloadLargeSvg
}, {
    extraClassName: styles.restoreIcon,
    followDirection: false
});
