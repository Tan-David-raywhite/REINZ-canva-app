import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { accessModeState } from '../access_mode_state/access_mode_state';
import { ScreenReaderContent } from '../screen_reader_content/screen_reader_content';
import { Link, LinkButton } from '../../link/link';
import { Text } from '../../typography/typography';
import styles, { getStyle } from './skip_link.css';
import { SkipLinkMessages } from './skip_link.messages';
export const SkipLink = observer(function SkipLink(props) {
    const { to, onClick, displayMode = 'focus', position, ref, ...rest } = props;
    const imperativeFocusFallback = useImperativeFocusFallback(to);
    const link = !onClick ? _jsx(Link, {
        href: `#${to}`,
        variant: "regular",
        ref: ref,
        onClick: imperativeFocusFallback,
        children: _jsx("span", {
            className: styles.skipLinkInner,
            children: getText(rest)
        })
    }) : _jsx(LinkButton, {
        onClick: onClick,
        ref: ref,
        children: _jsx("span", {
            className: styles.skipLinkInner,
            children: getText(rest)
        })
    });
    return _jsx("div", {
        className: classNames(styles.skipLink, displayMode === 'always' ? styles.always : !accessModeState.isMouseMode && styles.focus, position && getStyle(position), (rest.variant || rest.useGlobalStyle) && styles.global),
        children: _jsx(Text, {
            margins: "legacy",
            children: link
        })
    });
});
function getText(props) {
    if (props.variant) return ({
        ['skipToMainContent']: SkipLinkMessages.skipToMainContent(),
        ['skipNavigation']: SkipLinkMessages.skipNavigation(),
        ['skipToSearch']: SkipLinkMessages.skipToSearch()
    })[props.variant];
    else return props.children;
}
export function SkipTarget({ id, scrollMarginTop, label }) {
    return _jsx("div", {
        id: id,
        tabIndex: -1,
        style: scrollMarginTop ? {
            scrollMarginTop
        } : undefined,
        children: label && _jsx(ScreenReaderContent, {
            children: label
        })
    });
}
function useImperativeFocusFallback(destinationId) {
    return React.useMemo(()=>{
        if (destinationId === undefined) return;
        return (e)=>{
            const { ownerDocument } = e.currentTarget;
            const hash = ownerDocument.defaultView?.location.hash;
            if (!hash?.startsWith('#/'))
                return;
            const destination = ownerDocument.getElementById(destinationId);
            if (!destination)
            return;
            destination.focus();
            e.preventDefault();
        };
    }, [
        destinationId
    ]);
}
