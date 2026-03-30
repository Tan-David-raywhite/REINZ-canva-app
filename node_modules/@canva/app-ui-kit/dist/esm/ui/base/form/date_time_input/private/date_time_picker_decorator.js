import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Box } from '../../../box/box';
import { DateTimePicker } from '../../../date_time/date_time_picker/date_time_picker';
import { ButtonDecorator } from '../../input_decorators/input_decorators';
import { CalendarIcon } from '../../../icons/calendar/icon';
import { Popover } from '../../../surface/popover/popover';
import { DateTimeInputMessages } from './date_time_input.messages';
export const DateTimePickerDecorator = React.memo(
    function DateTimePickerDecorator({ onChangeComplete, disabled, blockOutsidePointerEvents, onChange, ...dateTimePickerProps }) {
        const [isPopoverOpen, setPopoverOpen] = React.useState(false);
        const togglePopover = ()=>{
            if (isPopoverOpen) onChangeComplete?.(dateTimePickerProps.date);
            setPopoverOpen(!isPopoverOpen);
        };
        const closePopover = ()=>{
            onChangeComplete?.(dateTimePickerProps.date);
            setPopoverOpen(false);
        };
        const handleChangeAndClose = (value)=>{
            onChange?.(value);
            if (value != null) {
                onChangeComplete?.(value);
                setPopoverOpen(false);
            }
        };
        const label = dateTimePickerProps.mode === 'date' ? DateTimeInputMessages.pickDate() : DateTimeInputMessages.pickDateTime();
        return _jsx(Popover, {
            open: isPopoverOpen,
            onRequestClose: closePopover,
            placement: "bottom-end",
            blockOutsidePointerEvents: blockOutsidePointerEvents,
            trigger: (triggerProps)=>_jsx(ButtonDecorator, {
                    label: label,
                    icon: CalendarIcon,
                    onClick: togglePopover,
                    disabled: disabled,
                    ...triggerProps
                }),
            children: _jsx(Box, {
                padding: "2u",
                children: _jsx(DateTimePicker, {
                    ...dateTimePickerProps,
                    canSelectPastDates: true,
                    onChange: dateTimePickerProps.mode === 'date' ? handleChangeAndClose : onChange
                })
            })
        });
    }
);
