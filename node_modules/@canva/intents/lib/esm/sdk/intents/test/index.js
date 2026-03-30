import { createFakeIntentsClients } from '../fake/create';
import { assertIsTestCanvaSdk, injectFakeAPIClients } from '../../utils/canva_sdk';
export function initTestEnvironment() {
    assertIsTestCanvaSdk();
    const fakeClients = createFakeIntentsClients();
    injectFakeAPIClients({
        intents: fakeClients.intents
    });
}
