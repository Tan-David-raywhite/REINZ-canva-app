type MatchMedia = (query: string) => MediaQueryList;
export declare class MediaQueryStore {
    matchedQueries: string[];
}
export declare class MediaQueryPresenter {
    private readonly matchMedia;
    private mqls;
    private listener;
    constructor({ matchMedia }: {
        matchMedia?: MatchMedia;
    });
    getMatches(queries: readonly string[]): string[];
    updateQueries(queries: readonly string[], store: MediaQueryStore): void;
    registerListener(queries: readonly string[], store: MediaQueryStore): void;
    clear(): void;
}
export {};
