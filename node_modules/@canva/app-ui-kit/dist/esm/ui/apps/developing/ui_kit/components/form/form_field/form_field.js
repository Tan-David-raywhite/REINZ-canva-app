import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { FormField as EaselFormField } from '../../../../../../base/form/form_field/form_field';
/** 
 * An accessible form field with a label.
 */ export function FormField(props) {
    return _jsx(EaselFormField, {
        control: ({ id, error, value })=>props.control({
                id: id,
                error,
                value
            }),
        description: props.description,
        labelMarker: props.labelMarker,
        error: props.error,
        label: props.label,
        value: props.value
    });
}
