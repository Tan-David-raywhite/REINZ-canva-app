import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useIsomorphicLayoutEffect } from '../../../../base/react/use_isomorphic_layout_effect';
import classNames from 'classnames';
import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { Box } from '../../box/box';
import { colorFeedbackCriticalBg, colorFeedbackHintBg, colorFeedbackPositiveBg, colorUiNeutralBg } from '../../tokens/color';
import { colorBlackA07, colorWhiteA10 } from '../../tokens/primitive/color';
import { Text } from '../../typography/typography';
import styles, { customProperties as progressBarCustomProperties } from './progress_bar.css';
import { ProgressBarIndicator } from './progress_bar_indicator';
import indicatorStyles from './progress_bar_indicator.css';
export const tones = [
    'expressive',
    'critical',
    'contrast',
    'success',
    'hint'
];
const toneFillColor = {
    ['expressive']: indicatorStyles.expressiveFill,
    ['critical']: colorFeedbackCriticalBg,
    ['contrast']: colorWhiteA10,
    ['success']: colorFeedbackPositiveBg,
    ['hint']: colorFeedbackHintBg
};
const toneTrackColor = {
    ['expressive']: colorUiNeutralBg,
    ['critical']: colorUiNeutralBg,
    ['contrast']: colorBlackA07,
    ['success']: colorUiNeutralBg,
    ['hint']: colorUiNeutralBg
};
export const ProgressBar = (props)=>{
    const { label, description, value, trackThickness, tone = 'expressive', trackRadius = 'round', end, onProgressAnimationEnd, disableBubbles, disableAnimations, ariaLabel, ariaLabelledBy, ariaDescribedBy } = props;
    const labelId = React.useId();
    const descriptionId = React.useId();
    const resolvedAriaLabelledBy = ariaLabelledBy ?? (label == null ? undefined : labelId);
    const resolvedAriaLabel = resolvedAriaLabelledBy == null ? ariaLabel : undefined;
    const resolvedAriaDescribedBy = ariaDescribedBy ?? (description == null ? undefined : descriptionId);
    const labelElement = label != null ? _jsx("div", {
        id: labelId,
        children: typeof label === 'string' ? _jsx(Text, {
            tagName: "span",
            size: "medium",
            weight: "bold",
            children: label
        }) : label
    }) : null;
    const descriptionElement = description != null ? _jsx("div", {
        id: descriptionId,
        children: typeof description === 'string' ? _jsx(Text, {
            tagName: "span",
            size: "small",
            children: description
        }) : description
    }) : null;
    const indicator = _jsx(ProgressBarIndicator, {
        value: value,
        trackThickness: trackThickness,
        trackRadius: trackRadius,
        trackColor: toneTrackColor[tone],
        fillColor: toneFillColor[tone],
        onProgressAnimationEnd: onProgressAnimationEnd,
        disableBubbles: disableBubbles,
        disableAnimations: disableAnimations,
        ariaLabel: resolvedAriaLabel,
        ariaLabelledBy: resolvedAriaLabelledBy,
        ariaDescribedBy: resolvedAriaDescribedBy
    });
    const hasLabelOrDescriptionOrEnd = label !== undefined || description !== undefined || end !== undefined;
    const { endMeasureRef, endColumnWidthPx } = useMeasuredEndWidth(end);
    if (!hasLabelOrDescriptionOrEnd) return indicator;
    return _jsxs(Box, {
        className: classNames(styles.container, end != null && styles.withEnd),
        customProperties: {
            [progressBarCustomProperties.progressBarEndColumnWidth]: `${endColumnWidthPx}px`
        },
        children: [
            labelElement ? _jsx(Box, {
                className: styles.labelCell,
                paddingBottom: "0.5u",
                children: labelElement
            }) : null,
            _jsx("div", {
                className: styles.indicatorCell,
                children: indicator
            }),
            end != null ? _jsx("div", {
                className: styles.endCell,
                children: _jsx("div", {
                    ref: endMeasureRef,
                    className: styles.endSlot,
                    children: end
                })
            }) : null,
            descriptionElement ? _jsx(Box, {
                className: styles.descriptionCell,
                paddingTop: "0.5u",
                children: descriptionElement
            }) : null
        ]
    });
};
const useMeasuredEndWidth = (end)=>{
    const endMeasureRef = React.useRef(null);
    const [endColumnWidthPx, setEndColumnWidthPx] = React.useState(0);
    useIsomorphicLayoutEffect(()=>{
        if (end == null) {
            setEndColumnWidthPx(0);
            return;
        }
        const el = endMeasureRef.current;
        if (el == null) return;
        const update = ()=>{
            setEndColumnWidthPx(el.getBoundingClientRect().width);
        };
        update();
        const observer = new ResizeObserver(update);
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        end
    ]);
    return {
        endMeasureRef,
        endColumnWidthPx
    };
};
