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
  get queryPrefersDark() {
    return queryPrefersDark;
  },
  get queryPrefersLight() {
    return queryPrefersLight;
  },
  get useAdaptiveColorScheme() {
    return useAdaptiveColorScheme;
  }
});
const _exists = require('../../../base/exists');
const _mobx = require("mobx");
const _react = require("react");
const _media_query_presenter = require("./media_query_presenter");
const queryPrefersDark = '(prefers-color-scheme: dark)';
const queryPrefersLight = '(prefers-color-scheme: light)';
const mediaQueryThemes = {
  [queryPrefersDark]: 'dark',
  [queryPrefersLight]: 'light'
};
function themeForQueries(queries) {
  if (queries.length === 0) return;
  const matchingThemes = queries.map(query => mediaQueryThemes[query]).filter(_exists.exists);
  return matchingThemes[0];
}
function useAdaptiveColorScheme({
  enabled,
  presenter: providedPresenter
}) {
  const store = (0, _react.useMemo)(() => new _media_query_presenter.MediaQueryStore(), []);
  const presenter = (0, _react.useMemo)(() => providedPresenter ?? new _media_query_presenter.MediaQueryPresenter({}), [providedPresenter]);
  const [theme, setTheme] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (!enabled) return;
    const queries = Object.keys(mediaQueryThemes);
    setTheme(themeForQueries(presenter.getMatches(queries)));
    const dispose = (0, _mobx.reaction)(() => store.matchedQueries, queries => setTheme(themeForQueries(queries)));
    presenter.registerListener(queries, store);
    return () => {
      dispose();
      presenter.clear();
    };
  }, [enabled, store, presenter]);
  return theme;
}