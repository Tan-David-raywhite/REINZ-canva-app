type ControllableValueProps<T> = {
    value?: T
    defaultValue?: T
    onChange?: (value: T) => void
};
export declare function useControllableValue<T>(
 { value: valueProp, defaultValue, onChange: onChangeProp, }: ControllableValueProps<T>
): [T, (nextValue: T) => void];
export {};
