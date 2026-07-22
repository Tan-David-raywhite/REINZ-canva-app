import { LATEST_VERSION } from './version';
export * from './public';
export const addPage = canva_sdk.design.v2.designInteraction.addPage;
window.__canva__?.sdkRegistration?.registerPackageVersion('design', LATEST_VERSION, 'ga');
