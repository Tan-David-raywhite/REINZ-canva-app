import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Preconditions } from '../../../../../../base/preconditions';
import classNames from 'classnames';
import * as React from 'react';
import { useAnnounceOnUpdate } from '../../../../a11y/announcer/announcer';
import { Button, CircleButton } from '../../../../button/button';
import { compareMonthAndYear, format, nextMonth, prevMonth, toLocalDateTimeObject, toUTCDateTimeObject } from '../../../utils/utils';
import { ChevronLeftIcon } from '../../../../icons/chevron_left/icon';
import { ChevronRightIcon } from '../../../../icons/chevron_right/icon';
import styles from './months_navigation.css';
import { MonthsNavigationMessages } from './months_navigation.messages';
export function MonthsNavigation(props) {
    const { month, year, locale } = props;
    const title = React.useMemo(()=>format({
            month,
            year
        }, locale, 'MMMM YYYY'), [
        month,
        year,
        locale
    ]);
    useAnnounceOnUpdate(title, [
        title
    ]);
    return _jsx(InternalMonthsNavigation, {
        ...props
    });
}
class InternalMonthsNavigation extends React.PureComponent {
    componentDidUpdate(prevProps) {
        if (this.props.animate) {
            this.prevDate = this.date;
            setTimeout(()=>{
                requestAnimationFrame(()=>{
                    if (this.titleRef) this.titleRef.classList.add(styles.animate);
                });
            }, 0);
            this.animateKey = !this.animateKey;
        }
    }
    get today() {
        return Preconditions.checkExists(this.props.today);
    }
    get date() {
        return {
            month: this.props.month,
            year: this.props.year
        };
    }
    getTitleText(date) {
        return format(date, this.props.locale, 'MMMM YYYY');
    }
    isCurrentMonth() {
        return compareMonthAndYear(this.today, this.date) === 0;
    }
    get disabled() {
        return this.props.disabled === 'both';
    }
    get prevDisabled() {
        return this.disabled || this.props.disabled === 'prev';
    }
    get nextDisabled() {
        return this.disabled || this.props.disabled === 'next';
    }
    renderTitle() {
        if (this.props.animate && this.prevDate) return this.renderAnimatedTitle();
        return _jsx(Button, {
            variant: "subtleLinkButton",
            className: classNames(styles.reset, {
                [styles.disabled]: this.disabled || this.isCurrentMonth()
            }),
            onClick: !this.disabled && !this.isCurrentMonth() ? this.onReset : undefined,
            ariaLabel: MonthsNavigationMessages.reset(),
            disabled: this.disabled || this.isCurrentMonth(),
            children: _jsx("span", {
                className: styles.title,
                id: this.props.titleId,
                children: this.getTitleText(this.date)
            })
        });
    }
    renderAnimatedTitle() {
        return _jsx(Button, {
            variant: "subtleLinkButton",
            className: classNames(styles.reset, {
                [styles.disabled]: this.disabled || this.isCurrentMonth()
            }),
            onClick: !this.disabled && !this.isCurrentMonth() ? this.onReset : undefined,
            ariaLabel: MonthsNavigationMessages.reset(),
            disabled: this.disabled || this.isCurrentMonth(),
            children: _jsxs("span", {
                ref: this.onTitleRef,
                className: styles.animationWrap,
                children: [
                    _jsx("span", {
                        className: classNames(styles.title, styles.prevTitle),
                        children: this.getTitleText(this.prevDate)
                    }),
                    _jsx("span", {
                        className: classNames(styles.title, styles.newTitle),
                        id: this.props.titleId,
                        children: this.getTitleText(this.date)
                    })
                ]
            })
        }, `title${this.animateKey ? 1 : 0}`);
    }
    render() {
        return _jsxs("div", {
            className: styles.monthsNavigation,
            children: [
                _jsx(CircleButton, {
                    variant: "tertiary",
                    className: styles.prevMonth,
                    icon: ChevronLeftIcon,
                    iconSize: "medium",
                    size: "small",
                    onClick: !this.prevDisabled ? this.onPreviousMonth : undefined,
                    disabled: this.prevDisabled,
                    ariaLabel: MonthsNavigationMessages.prev()
                }),
                this.renderTitle(),
                _jsx(CircleButton, {
                    variant: "tertiary",
                    className: styles.nextMonth,
                    icon: ChevronRightIcon,
                    iconSize: "medium",
                    size: "small",
                    onClick: !this.nextDisabled ? this.onNextMonth : undefined,
                    disabled: this.nextDisabled,
                    ariaLabel: MonthsNavigationMessages.next()
                })
            ]
        });
    }
    constructor(...args){
        super(...args), this.prevDate = this.date, this.animateKey = false, this.onTitleRef = (ref)=>{
            this.titleRef = ref;
        }, this.onReset = ()=>{
            this.props.onChange(this.today);
        }, this.onPreviousMonth = ()=>{
            this.props.onChange(toUTCDateTimeObject(prevMonth(this.date)));
        }, this.onNextMonth = ()=>{
            this.props.onChange(toUTCDateTimeObject(nextMonth(this.date)));
        };
    }
}
InternalMonthsNavigation.defaultProps = {
    today: toLocalDateTimeObject(new Date()),
    animate: false
};
