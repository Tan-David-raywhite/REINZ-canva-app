"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: Object.getOwnPropertyDescriptor(all, name).get
  });
}
_export(exports, {
  get GlobalScrollWindow() {
    return GlobalScrollWindow;
  },
  get OptionalGlobalScrollWindow() {
    return OptionalGlobalScrollWindow;
  }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobx = require("mobx");
const _react = _interop_require_wildcard(require("react"));
const _provider = require('../../provider/provider');
const _utilities = require("./utilities");
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
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
  for (var key in obj) {
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
function GlobalScrollWindow(props) {
  const isRtl = (0, _provider.useDirection)() === 'RTL';
  const {
    children,
    layout
  } = props;
  const scrollState = _react.useRef((0, _mobx.observable)({
    layout
  }));
  _react.useEffect(() => {
    const dispatch = (0, _mobx.action)(() => {
      const scrollableEl = document.documentElement;
      if (!scrollableEl) {
        scrollState.current.positions = undefined;
        return;
      }
      scrollState.current.positions = (0, _utilities.calculateScrollStatePosition)(scrollableEl, layout, isRtl);
    });
    window.addEventListener('scroll', dispatch, {
      passive: true
    });
    window.addEventListener('resize', dispatch, {
      passive: true
    });
    dispatch();
    return () => {
      window.removeEventListener('scroll', dispatch);
      window.removeEventListener('resize', dispatch);
    };
  }, [layout, isRtl]);
  return children({
    scrollState: scrollState.current
  });
}
function OptionalGlobalScrollWindow(props) {
  const {
    enabled,
    children
  } = props;
  if (enabled) return (0, _jsxruntime.jsx)(GlobalScrollWindow, {
    ...props
  });
  return children({});
}