import { LATEST_VERSION } from './version';
export * from './public';
window.__canva__?.sdkRegistration?.registerPackageVersion('user', LATEST_VERSION, 'ga');
