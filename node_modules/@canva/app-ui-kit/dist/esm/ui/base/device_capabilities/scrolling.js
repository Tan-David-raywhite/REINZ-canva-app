import { Internal } from './internal';
export function supportsMomentumScrolling() {
    return Internal.isIOSDevice();
}
