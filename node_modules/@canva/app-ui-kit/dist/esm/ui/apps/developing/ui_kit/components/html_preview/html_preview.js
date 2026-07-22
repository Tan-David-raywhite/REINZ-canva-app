import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import 'react';
import { HtmlPreviewMessages as Messages } from './html_preview.messages';
/** 
 * Renders HTML content in a sandboxed iframe.
 * Canva Design Guidelines only recommend using this component in the previewUi of content publisher apps.
 * Scripts and inline event handlers are automatically stripped for security.
 * The iframe fills its container — wrap it in a sized element to control dimensions.
 * The HTML document scrolls natively within the iframe.
 */ export function HtmlPreview({ html }) {
    const docHtml = useMemo(()=>{
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        doc.querySelectorAll('script').forEach((s)=>s.remove());
        doc.querySelectorAll('*').forEach((el)=>{
            for (const attr of Array.from(el.attributes))if (attr.name.toLowerCase().startsWith('on')) el.removeAttribute(attr.name);
        });
        return '<!doctype html>' + doc.documentElement.outerHTML;
    }, [
        html
    ]);
    return _jsx("iframe", {
        title: Messages.title(),
        sandbox: "",
        srcDoc: docHtml,
        style: {
            width: '100%',
            height: '100%',
            border: 0,
            display: 'block'
        }
    });
}
