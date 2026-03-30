import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from './screen_reader_content.css';
export const visuallyHiddenClass = styles.screenReaderContent;
export function useVisuallyHidden() {
    return {
        className: visuallyHiddenClass
    };
}
export function useWindow() {
    const [globalWindow, setGlobalWindow] = React.useState();
    React.useEffect(()=>{
        setGlobalWindow(window);
    }, []);
    return globalWindow;
}
export const ScreenReaderContent = ({ children, ariaLive, ariaAtomic, asLabelTextOnly, ariaRelevant, id, tagName: TagName = 'div', role })=>{
    const window1 = useWindow();
    const content = _jsx(TagName, {
        id: id,
        role: role,
        "aria-live": ariaLive,
        "aria-atomic": ariaAtomic,
        "aria-hidden": asLabelTextOnly,
        "aria-relevant": ariaRelevant,
        className: styles.screenReaderContent,
        children: children
    });
    if (id != null) {
        if (window1 != null) return ReactDOM.createPortal(content, window1.document.body);
        return null;
    }
    return content;
};
