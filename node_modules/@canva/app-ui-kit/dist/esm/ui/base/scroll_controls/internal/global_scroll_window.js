import { jsx as _jsx } from "react/jsx-runtime";
import { action, observable } from 'mobx';
import * as React from 'react';
import { useDirection } from '../../provider/provider';
import { calculateScrollStatePosition } from './utilities';
export function GlobalScrollWindow(props) {
  const isRtl = useDirection() === 'RTL';
  const {
    children,
    layout
  } = props;
  const scrollState = React.useRef(observable({
    layout
  }));
  React.useEffect(() => {
    const dispatch = action(() => {
      const scrollableEl = document.documentElement;
      if (!scrollableEl) {
        scrollState.current.positions = undefined;
        return;
      }
      scrollState.current.positions = calculateScrollStatePosition(scrollableEl, layout, isRtl);
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
export function OptionalGlobalScrollWindow(props) {
  const {
    enabled,
    children
  } = props;
  if (enabled) return _jsx(GlobalScrollWindow, {
    ...props
  });
  return children({});
}