import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Checkbox } from '../../../form/checkbox/checkbox';
import { useCardConfiguration } from '../card_context';
import { CardDecorator } from './card_decorator';
export const CardCheckbox = (props)=>{
    const configuration = useCardConfiguration();
    return _jsx(Checkbox, {
        size: "medium",
        onChange: props.onSelect,
        checked: props.selected,
        disabled: props.disabled || configuration.disabled,
        ariaLabel: props.label
    });
};
export const CardCheckboxDecorator = ({ location, transition, visibility, ...checkboxProps })=>{
    return _jsx(CardDecorator, {
        location: location,
        transition: transition,
        visibility: visibility,
        isInteractive: true,
        children: _jsx(CardCheckbox, {
            ...checkboxProps
        })
    });
};
