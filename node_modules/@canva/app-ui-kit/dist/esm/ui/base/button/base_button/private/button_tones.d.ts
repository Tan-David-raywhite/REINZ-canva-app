import type { ButtonRoles } from '../../../a11y/button_aria_attributes/button_aria_attributes';
import type { Border } from '../../../box/box';
export declare const buttonTones: readonly ["primary", "secondary", "tertiary", "contrast", "critical"];
export type Tone = (typeof buttonTones)[number];
export type BackgroundColor = string | StateMap<string>;
export type BorderColor = string | StateMap<string>;
export type Color = string | StateMap<string>;
export type StatefulProps = {
    tone?: Tone
    backgroundColor?: BackgroundColor
    borderColor?: BorderColor
    color?: Color
};
type State = 'default' | 'hovered' | 'pressed' | 'disabled';
type StateMap<T> = {
    [state in State]?: T;
};
export declare function useToneClassNames(
    { tone, pressed, selected, disabled, border, color, backgroundColor, borderColor, role, }: {
        tone?: Tone
        pressed?: boolean
        selected?: boolean
        disabled?: boolean
        border?: Border
        color?: string | StateMap<string>
        backgroundColor?: string | StateMap<string>
        borderColor?: string | StateMap<string>
        role?: ButtonRoles
    }
): string;
export declare function useStateMaps(props: StatefulProps): {
    style: Record<string, string>;
};
export {};
