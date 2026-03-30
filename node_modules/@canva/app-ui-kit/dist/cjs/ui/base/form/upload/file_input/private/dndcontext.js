"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DndContext", {
    enumerable: true,
    get: function() {
        return DndContext;
    }
});
const _reactdnd = require("react-dnd");
const _reactdndhtml5backend = _interop_require_default(require("react-dnd-html5-backend"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const DndContext = (0, _reactdnd.DragDropContext)(_reactdndhtml5backend.default)(({ children })=>children);
