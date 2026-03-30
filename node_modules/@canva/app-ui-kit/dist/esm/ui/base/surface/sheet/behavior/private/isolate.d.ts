export declare function markAsIsolated<E extends {}>(event: E): void;
export declare function ignoreIsolatedEvents<E extends {}>(callback: (event: E) => void): (event: E) => void;
export declare function useStableIsolatableListener<E extends {}>(callback: (event: E) => void): (event: E) => void;
