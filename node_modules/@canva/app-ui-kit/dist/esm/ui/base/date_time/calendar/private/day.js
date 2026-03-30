import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { format, toDate } from '../../utils/utils';
import { canHover } from '../../../device_capabilities/device_capabilities';
import styles from './day.css';
export class CalendarDay extends React.PureComponent {
    get label() {
        if (this.props.label) return this.props.label;
        const label = format(this.props.date, this.props.locale, 'DD MMMM');
        return label;
    }
    get dayNumber() {
        return toDate(this.props.date).getUTCDate();
    }
    get dataDate() {
        if (!this.props.dataDate) return;
        return this.props.date.split('T')[0];
    }
    get className() {
        return classNames(styles.day, this.props.className, {
            [styles.hoverSupported]: canHover(),
            [styles.current]: !this.props.disabled && this.props.current,
            [styles.disabled]: this.props.disabled,
            [styles.today]: this.props.today,
            [styles.selected]: this.props.selected,
            [styles.invalid]: this.props.selected && this.props.selectedInvalid
        });
    }
    getText() {
        return _jsx("span", {
            className: this.className,
            "aria-label": this.label,
            ref: this.props.onDayRef,
            "data-date": this.dataDate,
            children: this.dayNumber
        });
    }
    getButton() {
        return _jsx("button", {
            className: this.className,
            onClick: this.onClick,
            ref: this.props.onDayRef,
            "data-date": this.dataDate,
            tabIndex: this.props.includeInTabOrder ? 0 : -1,
            "aria-label": this.label,
            "aria-current": this.props.today ? 'date' : undefined,
            "aria-pressed": this.props.selected ? 'true' : undefined,
            children: this.dayNumber
        });
    }
    render() {
        return !this.props.disabled && this.props.onSelect ? this.getButton() : this.getText();
    }
    constructor(...args){
        super(...args), this.onClick = (event)=>{
            event.preventDefault();
            this.props.onSelect?.(this.props.date);
        };
    }
}
export const CalendarDayWithWrapper = ({ locale, date, current, today, past, selected, selectedInvalid, disabled, className, onSelect, onDayRef, includeInTabOrder })=>_jsx("div", {
        className: styles.dayWrapper,
        role: "gridcell",
        "aria-selected": selected ? 'true' : undefined,
        "aria-disabled": disabled ? 'true' : undefined,
        children: _jsx(CalendarDay, {
            locale: locale,
            date: date,
            current: current,
            today: today,
            past: past,
            selected: selected,
            selectedInvalid: selectedInvalid,
            disabled: disabled,
            className: className,
            onSelect: onSelect,
            onDayRef: onDayRef,
            includeInTabOrder: includeInTabOrder
        })
    });
