import { Breakpoint } from '../../metrics/metrics';
export declare const conditions: readonly ["default", "smallUp", "mediumUp", "largeUp", "xLargeUp"];
export type Condition = (typeof conditions)[number];
export type ConditionCssPropertyMap = Record<Condition, string>;
type ResponsiveObject<Value> = Partial<Record<Condition, Value>>;
export type RequiredResponsiveObject<Value> = ResponsiveObject<Value> & Record<(typeof conditions)[0], Value>;
export type ResponsiveValue<Value> = Value | ResponsiveObject<Value>;
export type RequiredResponsiveValue<Value> = Value | RequiredResponsiveObject<Value>;
export declare function generateStyle<Value extends string | number | boolean>(
 propertyMap: ConditionCssPropertyMap,
 responsiveValue: ResponsiveValue<Value>,
 getCssValue?: (value: Value) => string
): {
    [k: string]: string | Value;
};
export declare function resolveResponsiveObject<Value>(value: RequiredResponsiveObject<Value>, breakpoint: Breakpoint): Value;
export {};
