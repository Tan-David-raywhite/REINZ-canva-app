export declare class BaseSelectStore<T> {
    open: boolean;
    value?: T | T[];
    query: string;
}
export declare class BaseSelectPresenter<T> {
    toggle(store: BaseSelectStore<T>, open?: boolean): void;
    setValue(store: BaseSelectStore<T>, value: T | T[] | undefined): void;
}
