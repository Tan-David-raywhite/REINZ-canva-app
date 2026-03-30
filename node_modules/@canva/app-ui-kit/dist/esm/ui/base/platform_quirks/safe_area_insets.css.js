function Struct() { }
function Dict() { }
const styles = { safeAreaInsetTop: "var(--safe-area-inset-top)", safeAreaInsetBottom: "var(--safe-area-inset-bottom)", safeAreaInsetLeft: "var(--safe-area-inset-left)", safeAreaInsetRight: "var(--safe-area-inset-right)" };
export default styles;
export const customProperties = { safeAreaInsetTop: "--safe-area-inset-top", safeAreaInsetBottom: "--safe-area-inset-bottom", safeAreaInsetLeft: "--safe-area-inset-left", safeAreaInsetRight: "--safe-area-inset-right" };
const dictStyles = { "safeAreaInsetTop": "var(--safe-area-inset-top)", "safeAreaInsetBottom": "var(--safe-area-inset-bottom)", "safeAreaInsetLeft": "var(--safe-area-inset-left)", "safeAreaInsetRight": "var(--safe-area-inset-right)" };
export function getStyle(style) {
    return dictStyles[style];
}
;
