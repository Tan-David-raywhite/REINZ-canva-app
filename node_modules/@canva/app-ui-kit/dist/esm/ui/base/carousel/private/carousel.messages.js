import { formatId, getString } from '../../i18n/strings';
export const CarouselMessages = {
    skipToEnd: () => getString("m8gVcA", "Skip to end of list"),
    skipToStart: () => getString("XiRPqg", "Skip to start of list"),
    skipToNamedListEnd: (carouselName) => formatId("70xSVA", [carouselName], "Skip to end of “{0}” list"),
    skipToNamedListStart: (carouselName) => formatId("EtH2Sg", [carouselName], "Skip to start of “{0}” list"),
    listEnd: () => getString("zBSOaw", "End of list"),
    listStart: () => getString("maTNiA", "Start of list"),
    namedListEnd: (carouselName) => formatId("RK5cHQ", [carouselName], "End of list: {0}"),
    namedListStart: (carouselName) => formatId("LckcsA", [carouselName], "Start of list: {0}"),
};
