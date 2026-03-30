export interface SdkRegistrationClientInternal {
    registerPackageVersion(name: string, version: string, releaseType: string): void
}
