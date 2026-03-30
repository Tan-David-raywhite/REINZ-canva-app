import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Description } from '../../description/description';
import { Label } from '../../label/label';
import { getError, startValidation, useFieldValidation } from '../../validation/field_validation';
import { Rows } from '../../../layout/layout';
export const FormField = observer(function FormField({ label, labelSize, description, error, tone, children, control, labelMarker = 'none', value, validator, store: storeProp, name }) {
    const labelId = React.useId();
    const descriptionId = React.useId();
    const errorId = React.useId();
    const controlId = React.useId();
    const store = useFieldValidation({
        store: storeProp,
        name,
        value,
        validator
    });
    const fieldError = error ?? (store != null ? getError(store) : undefined);
    const wrappedLabel = _jsx(Label, {
        size: labelSize,
        marker: labelMarker,
        id: labelId,
        htmlFor: controlId,
        children: label
    });
    const wrappedDescription = description && !fieldError ? _jsx(Description, {
        id: descriptionId,
        tone: tone,
        children: description
    }) : null;
    const wrappedError = fieldError ? _jsx(Description, {
        id: errorId,
        tone: "critical",
        children: fieldError
    }) : null;
    const onBlur = React.useMemo(()=>store != null ? ()=>startValidation(store) : undefined, [
        store
    ]);
    const wrappedControl = control({
        id: controlId,
        ariaLabelledBy: labelId,
        ariaDescribedBy: fieldError && errorId || description && descriptionId || undefined,
        error: !!fieldError,
        value: storeProp != null ? storeProp.value : value,
        onBlur
    });
    const layout = children ?? defaultFormFieldLayout;
    return layout({
        label: wrappedLabel,
        error: wrappedError,
        description: wrappedDescription,
        control: wrappedControl
    });
});
function defaultFormFieldLayout({ label, description, error, control }) {
    return _jsxs(Rows, {
        spacing: "1u",
        children: [
            label,
            control,
            description,
            error
        ]
    });
}
