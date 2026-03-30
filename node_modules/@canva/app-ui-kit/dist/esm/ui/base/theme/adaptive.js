import { exists } from '../../../base/exists';
import { reaction } from 'mobx';
import { useEffect, useMemo, useState } from 'react';
import { MediaQueryPresenter, MediaQueryStore } from './media_query_presenter';
export const queryPrefersDark = '(prefers-color-scheme: dark)';
export const queryPrefersLight = '(prefers-color-scheme: light)';
const mediaQueryThemes = {
  [queryPrefersDark]: 'dark',
  [queryPrefersLight]: 'light'
};
function themeForQueries(queries) {
  if (queries.length === 0) return;
  const matchingThemes = queries.map(query => mediaQueryThemes[query]).filter(exists);
  return matchingThemes[0];
}
export function useAdaptiveColorScheme({
  enabled,
  presenter: providedPresenter
}) {
  const store = useMemo(() => new MediaQueryStore(), []);
  const presenter = useMemo(() => providedPresenter ?? new MediaQueryPresenter({}), [providedPresenter]);
  const [theme, setTheme] = useState();
  useEffect(() => {
    if (!enabled) return;
    const queries = Object.keys(mediaQueryThemes);
    setTheme(themeForQueries(presenter.getMatches(queries)));
    const dispose = reaction(() => store.matchedQueries, queries => setTheme(themeForQueries(queries)));
    presenter.registerListener(queries, store);
    return () => {
      dispose();
      presenter.clear();
    };
  }, [enabled, store, presenter]);
  return theme;
}