import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { ClearDecorator as EaselClearDecorator } from '../../../../../../../base/form/input_decorators/input_decorators';
/** 
 * An input field decorator to render a button that clears the input.
 *
 * Note that the clear button is only rendered when the input field is non-empty.
 */ export function ClearDecorator(props) {
    return _jsx(EaselClearDecorator, {
        onClear: props.onClear
    });
}
