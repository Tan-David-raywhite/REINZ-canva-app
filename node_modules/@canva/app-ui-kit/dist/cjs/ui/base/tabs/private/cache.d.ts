export declare function createCache<T>(): {
    setItem: (key: string, value: T) => void;
    getItem: (key: string) => T | undefined;
};
export declare function useCache<T>(): {
    setItem: (key: string, value: T) => void;
    getItem: (key: string) => T | undefined;
};
