import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { CharCountDecorator as EaselCharCountDecorator } from '../../../../../../../base/form/input_decorators/input_decorators';
/** 
 * A form input field decorator to show the current and maximum character count accepted.
 *
 * Note that this decorator won't limit the user's ability to type beyond the max, instead the text
 * will turn red once the maximum limit is exceeded.
 */ export function CharacterCountDecorator(props) {
    return _jsx(EaselCharCountDecorator, {
        max: props.max
    });
}
