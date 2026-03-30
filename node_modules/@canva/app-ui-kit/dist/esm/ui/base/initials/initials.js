import { splitByGraphemeClusters } from '../../../base/graphemes/split';
const MAX_INITIALS = 2;
export function getInitials(name, maxInitials = MAX_INITIALS) {
    return name.trim()
    .split(/\s+/, maxInitials)
    .map((s)=>splitByGraphemeClusters(s)[0]).join('');
}
