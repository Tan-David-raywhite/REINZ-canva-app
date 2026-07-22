"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HtmlPreview", {
    enumerable: true,
    get: function() {
        return HtmlPreview;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _html_previewmessages = require("./html_preview.messages");
function HtmlPreview({ html }) {
    const docHtml = (0, _react.useMemo)(()=>{
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
    return (0, _jsxruntime.jsx)("iframe", {
        title: _html_previewmessages.HtmlPreviewMessages.title(),
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
