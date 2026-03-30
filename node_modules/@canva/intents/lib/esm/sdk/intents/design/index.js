import { LATEST_VERSION } from '../version';
export * from './public';
window.__canva__?.sdkRegistration?.registerPackageVersion('intents/design', LATEST_VERSION, 'ga');
