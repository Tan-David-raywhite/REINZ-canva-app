import { LATEST_VERSION } from '../version';
export * from './public';
window.__canva__?.sdkRegistration?.registerPackageVersion('intents/data', LATEST_VERSION, 'ga');
