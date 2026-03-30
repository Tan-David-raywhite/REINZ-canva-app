"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MonthsNavigation", {
    enumerable: true,
    get: function() {
        return MonthsNavigation;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../../../base/preconditions');
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _announcer = require('../../../../a11y/announcer/announcer');
const _button = require('../../../../button/button');
const _utils = require('../../../utils/utils');
const _icon = require('../../../../icons/chevron_left/icon');
const _icon1 = require('../../../../icons/chevron_right/icon');
const _months_navigationcss = _interop_require_default(require("./months_navigation.css"));
const _months_navigationmessages = require("./months_navigation.messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function MonthsNavigation(props) {
    const { month, year, locale } = props;
    const title = _react.useMemo(()=>(0, _utils.format)({
            month,
            year
        }, locale, 'MMMM YYYY'), [
        month,
        year,
        locale
    ]);
    (0, _announcer.useAnnounceOnUpdate)(title, [
        title
    ]);
    return (0, _jsxruntime.jsx)(InternalMonthsNavigation, {
        ...props
    });
}
class InternalMonthsNavigation extends _react.PureComponent {
    componentDidUpdate(prevProps) {
        if (this.props.animate) {
            this.prevDate = this.date;
            setTimeout(()=>{
                requestAnimationFrame(()=>{
                    if (this.titleRef) this.titleRef.classList.add(_months_navigationcss.default.animate);
                });
            }, 0);
            this.animateKey = !this.animateKey;
        }
    }
    get today() {
        return _preconditions.Preconditions.checkExists(this.props.today);
    }
    get date() {
        return {
            month: this.props.month,
            year: this.props.year
        };
    }
    getTitleText(date) {
        return (0, _utils.format)(date, this.props.locale, 'MMMM YYYY');
    }
    isCurrentMonth() {
        return (0, _utils.compareMonthAndYear)(this.today, this.date) === 0;
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
        return (0, _jsxruntime.jsx)(_button.Button, {
            variant: "subtleLinkButton",
            className: (0, _classnames.default)(_months_navigationcss.default.reset, {
                [_months_navigationcss.default.disabled]: this.disabled || this.isCurrentMonth()
            }),
            onClick: !this.disabled && !this.isCurrentMonth() ? this.onReset : undefined,
            ariaLabel: _months_navigationmessages.MonthsNavigationMessages.reset(),
            disabled: this.disabled || this.isCurrentMonth(),
            children: (0, _jsxruntime.jsx)("span", {
                className: _months_navigationcss.default.title,
                id: this.props.titleId,
                children: this.getTitleText(this.date)
            })
        });
    }
    renderAnimatedTitle() {
        return (0, _jsxruntime.jsx)(_button.Button, {
            variant: "subtleLinkButton",
            className: (0, _classnames.default)(_months_navigationcss.default.reset, {
                [_months_navigationcss.default.disabled]: this.disabled || this.isCurrentMonth()
            }),
            onClick: !this.disabled && !this.isCurrentMonth() ? this.onReset : undefined,
            ariaLabel: _months_navigationmessages.MonthsNavigationMessages.reset(),
            disabled: this.disabled || this.isCurrentMonth(),
            children: (0, _jsxruntime.jsxs)("span", {
                ref: this.onTitleRef,
                className: _months_navigationcss.default.animationWrap,
                children: [
                    (0, _jsxruntime.jsx)("span", {
                        className: (0, _classnames.default)(_months_navigationcss.default.title, _months_navigationcss.default.prevTitle),
                        children: this.getTitleText(this.prevDate)
                    }),
                    (0, _jsxruntime.jsx)("span", {
                        className: (0, _classnames.default)(_months_navigationcss.default.title, _months_navigationcss.default.newTitle),
                        id: this.props.titleId,
                        children: this.getTitleText(this.date)
                    })
                ]
            })
        }, `title${this.animateKey ? 1 : 0}`);
    }
    render() {
        return (0, _jsxruntime.jsxs)("div", {
            className: _months_navigationcss.default.monthsNavigation,
            children: [
                (0, _jsxruntime.jsx)(_button.CircleButton, {
                    variant: "tertiary",
                    className: _months_navigationcss.default.prevMonth,
                    icon: _icon.ChevronLeftIcon,
                    iconSize: "medium",
                    size: "small",
                    onClick: !this.prevDisabled ? this.onPreviousMonth : undefined,
                    disabled: this.prevDisabled,
                    ariaLabel: _months_navigationmessages.MonthsNavigationMessages.prev()
                }),
                this.renderTitle(),
                (0, _jsxruntime.jsx)(_button.CircleButton, {
                    variant: "tertiary",
                    className: _months_navigationcss.default.nextMonth,
                    icon: _icon1.ChevronRightIcon,
                    iconSize: "medium",
                    size: "small",
                    onClick: !this.nextDisabled ? this.onNextMonth : undefined,
                    disabled: this.nextDisabled,
                    ariaLabel: _months_navigationmessages.MonthsNavigationMessages.next()
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
            this.props.onChange((0, _utils.toUTCDateTimeObject)((0, _utils.prevMonth)(this.date)));
        }, this.onNextMonth = ()=>{
            this.props.onChange((0, _utils.toUTCDateTimeObject)((0, _utils.nextMonth)(this.date)));
        };
    }
}
InternalMonthsNavigation.defaultProps = {
    today: (0, _utils.toLocalDateTimeObject)(new Date()),
    animate: false
};
