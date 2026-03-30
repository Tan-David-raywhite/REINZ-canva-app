import { jsx as _jsx } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import 'react';
import { pointerInputState } from '../../../a11y/pointer_input_state/pointer_input_state';
import { BadgeGroup } from '../../../badge/badge';
import styles from '../card.css';
export const CardDecorator = observer(function CardDecorator({ location, stretch, children, transition = 'fade', visibility = 'on-hover', isInteractive = false }) {
    return _jsx(BadgeGroup, {
        stretch: stretch,
        transition: transition,
        visibility: !pointerInputState.isMouseInput ? 'always' : visibility,
        location: location,
        className: isInteractive ? styles.cardAction : undefined,
        children: children
    });
});
