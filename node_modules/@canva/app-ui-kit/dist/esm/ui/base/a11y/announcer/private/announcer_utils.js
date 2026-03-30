import { delay } from '../../../../../base/delay';
export async function updateLiveRegionContent(element, message) {
    if (!element) return;
    const previousMessage = element.textContent;
    await delay(50);
    element.textContent = '';
    await delay(20);
    const finalMessage = previousMessage === message ? message + '\u00A0' : message;
    element.textContent = finalMessage;
}
