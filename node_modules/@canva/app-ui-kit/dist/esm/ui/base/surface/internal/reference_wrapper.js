import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import styles from './reference_wrapper.css';
export function ReferenceWrapper({ ref, content }) {
    if (content == null || isReferenceObject(content)) return null;
    return _jsx("div", {
        className: styles.reference,
        ref: ref,
        children: content
    });
}
export function isReferenceObject(reference) {
    if (reference == null || typeof reference !== 'object') return false;
    const { getBoundingClientRect } = reference;
    return getBoundingClientRect != null && typeof getBoundingClientRect === 'function';
}
