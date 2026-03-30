import * as React from 'react';
type InputContextProviderProps = React.PropsWithChildren<{
    value: string
    controls: InputControls
}>;
type InputControls = {
    focus: () => void
    setValue: (value: string) => void
    setType?: (type: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url' | undefined) => void
    setDisabled?: (disabled: boolean) => void
};
export declare function useCreateInputControls(controls: InputControls): InputControls;
export declare function useInputControls(): InputControls;
export declare function useInputValue(): string;
export declare function BaseInputContextProvider(props: InputContextProviderProps): React.JSX.Element;
export declare function usePropOverrides<T extends Record<string, unknown>>(props: T): {
    props: T;
    setPropOverrides: (overrides: Partial<T> | undefined) => void;
};
export {};
