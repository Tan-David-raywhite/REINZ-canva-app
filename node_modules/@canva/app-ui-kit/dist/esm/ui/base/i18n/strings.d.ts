import type { PrimitiveType } from 'intl-messageformat';
import IntlMessageFormat from 'intl-messageformat';
type CmsgContainer = {
    cmsg?: {
        strings: Record<string, Record<string, string>>;
        locale?: string;
    };
};
export declare const getLocale: () => string;
export declare function encodeAsInvisibleUnicode(id: string): string;
export declare function setTranslationBundlesContainer(cmsgContainer: CmsgContainer, locale: string | (() => string)): void;
export declare function formatId(
 id: string,
 args: PrimitiveType[],
 fallbackString?: string,
 locale?: string,
 strings?: Record<string, Record<string, string>>,
 cache?: Map<string, IntlMessageFormat>,
 createIntlMessageFormat?: typeof createIntlMessageFormat_
): string;
export declare function getString(
 id: string,
 fallbackString?: string,
 locale?: string,
 strings?: Record<string, Record<string, string>>
): string;
export declare const intlNormalizedLocale: (locale: string) => string;
declare function createIntlMessageFormat_(ztring: string, locale: string): IntlMessageFormat;
export declare function formatString(ztring: string, values: PrimitiveType[], locale?: string): string;
export {};
