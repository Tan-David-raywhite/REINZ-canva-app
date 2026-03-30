import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEnableAnimations } from '../../provider/provider';
import styles from './fader.css';
const defaultDurationMs = parseInt(styles.defaultDurationMs, 10);
const slowDurationMs = parseInt(styles.slowDurationMs, 10);
export const PlaceholderFader = (props)=>{
    const { loading, animate: animateProp, animationMode = 'fast', content, placeholder, expand, expandFlex } = props;
    const enableAnimations = useEnableAnimations();
    const animate = animateProp ?? enableAnimations;
    const contentRef = React.useRef(null);
    const placeholderRef = React.useRef(null);
    const isAnimationModeSlow = animationMode === 'slow';
    const expandClassName = classNames({
        [styles.expand]: expand,
        [styles.expandFlex]: !expand && expandFlex
    });
    const animationModeClassName = animate ? classNames({
        [styles.slow]: isAnimationModeSlow
    }) : null;
    const renderContent = (ref)=>_jsx("div", {
            ref: ref,
            className: expandClassName,
            children: loading ? placeholder : content
        });
    const { enter, enterActive, exit, exitActive, container } = styles;
    const durationMs = isAnimationModeSlow ? slowDurationMs : defaultDurationMs;
    const ref = loading ? placeholderRef : contentRef;
    return _jsx("div", {
        className: classNames(container, expandClassName, animationModeClassName),
        children: animate ? _jsx(TransitionGroup, {
            component: null,
            children: _jsx(CSSTransition, {
                timeout: durationMs,
                classNames: {
                    enter,
                    enterActive,
                    exit,
                    exitActive
                },
                mountOnEnter: true,
                unmountOnExit: true,
                nodeRef: ref,
                children: renderContent(ref)
            }, loading ? 'placeholder' : 'component')
        }) : renderContent(ref)
    });
};
