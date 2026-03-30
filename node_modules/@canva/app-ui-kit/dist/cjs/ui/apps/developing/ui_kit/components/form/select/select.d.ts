import * as React from 'react';
import type { Icon } from '../../../../../../base/icons/icons';
import type { IconElement } from '../../../icons/icons';
/** 
 * The props for an individual option in a select input.
 */
export type SelectOption<T> = {
    /** 
         * The value of the option.
         * This value must be unique within the select input.
         */
    value: T;
    /** 
         * A human readable label for the option.
         */
    label?: string;
    /** 
         * A human readable description that appears beneath the label.
         */
    description?: string;
    /** 
         * The icon to render before the label.
         * This must be one of the icons provided by the App UI Kit.
         */
    Icon?: Icon | (() => IconElement);
    /** 
         * If `true`, the user can't select this option.
         * @defaultValue false
         */
    disabled?: boolean;
};
/** 
 * The props for a group of options in a select input.
 */
export type SelectOptionGroup<T> = {
    /** 
         * A human readable label for the group of options.
         */
    label?: string;
    /** 
         * The options to select within the group.
         */
    options: SelectOption<T>[];
};
/** 
 * Common props shared by both single and multi select components.
 */
type BaseSelectCommonProps<T> = {
    /** 
         * The options or groups of options to render within the select input.
         */
    options: (SelectOption<T> | SelectOptionGroup<T>)[];
    /** 
         * The DOM ID for the underlying element.
         */
    id?: string;
    /** 
         * A callback that runs when the select input loses focus.
         */
    onBlur?: () => void;
    /** 
         * A callback that runs when the select input gains focus.
         */
    onFocus?: () => void;
    /** 
         * If `true`, the user can't interact with the select input.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * If `true`, the select input is rendered in an error state and screen readers are alerted of the error.
         * @defaultValue false
         */
    error?: boolean;
    /** 
         * A placeholder value for the select input when an option isn't selected.
         */
    placeholder?: string;
    /** 
         * If `true`, the select input expands to fill the width of its container.
         * If the select input is a child of a `Rows` component, it automatically expands to fill the width of its container and this prop has no effect.
         * @defaultValue false
         */
    stretch?: boolean;
    /** 
         * Whether to render a search input at the top of the dropdown menu.
         *
         * If `true`, the default filtering behavior will be applied, which includes the following options in order:
         * - Options whose label starts with the search query;
         * - Options whose label contains the search query anywhere, but not at the start;
         * - The selected option, even if it does not match the search query.
         *
         * To implement custom filtering logic, pass a `filterFn` function.
         *
         * If you are filtering options on the server, you can update the `options` prop through the `onInputChange` callback.
         *
         * When not relying on the default filtering behavior (e.g., using a custom `filterFn` or `onInputChange`), consider handling the following edge cases:
         * - Including the selected option in the filtered results, even if it does not match the search query;
         * - If you are using `onInputChange` to update the options prop, make sure to sync the options when the search query is cleared or changed.
         *
         * @defaultValue false
         */
    searchable?: boolean | {
        filterFn?(query: string, options: SelectOption<T>[]): SelectOption<T>[];
        onInputChange?(query: string): void;
        /** 
                 * Value to use as placeholder to be used when no query is present in search input.
                 * Make sure to provide a meaningful placeholder text that makes it clear that
                 * no search query was entered and it can't be confused with a search term.
                 */
        inputPlaceholder?: string;
    };
};
/** 
 * The props for the `Select` component.
 */
export type SelectProps<T> = (BaseSelectCommonProps<T> & {
    /** 
         * The type of selection behavior.
         * @defaultValue "single"
         */
    type?: 'single';
    /** 
         * The value of the currently selected option.
         */
    value?: T;
    /** 
         * A callback that runs when the value of the select input changes.
         * @param value - The selected option.
         */
    onChange?: (value: SelectOption<T>['value']) => void;
}) | (BaseSelectCommonProps<T> & {
    /** 
         * The type of selection behavior.
         */
    type: 'multi';
    /** 
         * The values of the currently selected options.
         */
    value?: T[];
    /** 
         * A callback that runs when the values of the select input change.
         * @param values - The selected options.
         */
    onChange?: (values: SelectOption<T>['value'][]) => void;
});
/** 
 * The props for a custom trigger renderer in the CustomizableSelect.
 */
export type CustomizableSelectTriggerProps<T> = {
    /** 
         * The options to select from
         */
    options?: (SelectOption<T> | SelectOptionGroup<T>)[]
    /** 
         * The flat list of options (no groups)
         */
    flatOptions?: SelectOption<T>[];
    /** 
         * The list of option groups
         */
    optionGroups?: SelectOptionGroup<T>[];
    /** 
         * The list of selected options
         */
    selectedOptions?: SelectOption<T>[];
    /** 
         * The value of the currently selected option
         */
    value?: T | T[];
    /** 
         * A placeholder value for the select input when an option isn't selected
         */
    placeholder?: string;
    /** 
         * If true, the user can't interact with the select input
         */
    /** 
         * If true, the user can't interact with the select input
         */
    disabled?: boolean
    /** 
         * If true, the select input is rendered in an error state
         */
    error?: boolean;
    /** 
         * Whether the select dropdown is open
         */
    open?: boolean;
    /** 
         * Whether the trigger component is active
         */
    active?: boolean;
    /** 
         * Indicates that the trigger opens a disclosure
         */
    disclosure?: boolean;
    /** 
         * Index of the currently active item
         */
    activeIndex?: number;
    /** 
         * Currently active option
         */
    activeOption?: SelectOption<T> | undefined;
    /** 
         * The DOM ID for the underlying element
         */
    /** 
         * The DOM ID for the underlying element
         */
    id?: string
    /** 
         * The ID to be used for the label text in the trigger
         */
    labelId: string;
    /** 
         * Role for the trigger is always combobox
         */
    role: 'combobox';
    /** 
         * A short description of what this select is for
         */
    ariaLabel?: string;
    /** 
         * Id of an element containing a short description of what this select is for
         */
    ariaLabelledBy?: string;
    /** 
         * Id of an element containing a longer description of what this select is for
         */
    ariaDescribedBy?: string;
    /** 
         * The id of the currently active element, which is the highlighted option in the menu
         */
    ariaActiveDescendant?: string;
    /** 
         * The ID of the element this trigger controls
         */
    ariaControls?: string;
    /** 
         * Class name for the trigger button
         */
    className?: string;
    /** 
         * Function to get the text content of an option
         */
    /** 
         * Function to get the text content of an option
         */
    getLabel?: (option: SelectOption<T>) => React.ReactNode
    /** 
         * Function to check if an option is selected
         */
    isSelected?: (option: SelectOption<T>, value?: T[] | T) => boolean;
    /** 
         * To be called when the trigger loses focus
         */
    /** 
         * To be called when the trigger loses focus
         */
    onBlur?: () => void
    /** 
         * To be called when the trigger receives focus
         */
    onFocus?: () => void;
    /** 
         * To be called when the trigger is clicked or keyboard activated
         */
    onRequestToggle?: () => void;
    /** 
         * The text to be shown in the tooltip for the trigger
         */
    /** 
         * The text to be shown in the tooltip for the trigger
         */
    tooltipLabel?: string
    /** 
         * Placement of the tooltip content around the trigger
         */
    tooltipPlacement?: string;
    /** 
         * Whether the tooltip around the trigger is disabled
         */
    tooltipDisabled?: boolean;
    /** 
         * Allows custom trigger content
         */
    /** 
         * Allows custom trigger content
         */
    children?: React.ReactNode
    /** 
         * Custom Icon (rendered to the left of the label)
         */
    Icon?: 'auto' | 'none' | Icon;
};
/** 
 * The props for a custom item renderer in the CustomizableSelect.
 */
export type CustomizableSelectItemProps<T> = {
    /** 
         * DOM id for the list item
         */
    id: string
    /** 
         * The option to render
         */
    option: SelectOption<T>;
    /** 
         * Whether this option is currently selected
         */
    selected: boolean;
    /** 
         * Whether this option is currently highlighted
         */
    active: boolean;
    /** 
         * Ref to set on the item element
         */
    forwardedRef?: React.Ref<HTMLLIElement>;
    /** 
         * A decorator to show at the start of the item
         */
    start?: React.ReactNode;
    /** 
         * A decorator to show at the end of the item
         */
    end?: React.ReactNode;
    /** 
         * A class name for the item element
         */
    className?: string;
    /** 
         * Whether the item is being rendered in a Select with multi-selection enabled
         */
    multiSelectable?: boolean;
    /** 
         * Function to get the text content of an option
         */
    /** 
         * Function to get the text content of an option
         */
    getLabel: (option: SelectOption<T>) => React.ReactNode
    /** 
         * Called when an option is clicked or touched
         */
    onItemClick?: (option: SelectOption<T>, event?: React.MouseEvent<any>) => void;
    /** 
         * Called when an option is hovered over
         */
    onItemHover?: (option: SelectOption<T>, event?: React.MouseEvent<any>) => void;
    /** 
         * Children to render inside the item
         */
    /** 
         * Children to render inside the item
         */
    children?: React.ReactNode
};
/** 
 * The props for the `CustomizableSelect` component.
 * Note: CustomizableSelect only supports single-select mode.
 */
export type CustomizableSelectProps<T> = BaseSelectCommonProps<T> & {
    /** 
         * The value of the currently selected option.
         */
    value?: T;
    /** 
         * A callback that runs when the value of the select input changes.
         * @param value - The selected option.
         */
    onChange?: (value: T) => void;
    /** 
         * A function to render a custom trigger for the select.
         * This allows complete customization of the select's appearance and behavior.
         *
         * Example: Custom trigger with icon and styling
         *
         * ```tsx
         * <CustomizableSelect
         *   options={options}
         *   onChange={(value) => console.log('Selected:', value)}
         *   trigger={({ selectedOptions, placeholder, onRequestToggle, disabled, error }) => (
         *     <button
         *       type="button"
         *       onClick={() => onRequestToggle()}
         *       disabled={disabled}
         *       aria-expanded="false"
         *       style={{
         *         border: error ? '2px solid red' : '1px solid #ccc',
         *         cursor: disabled ? 'not-allowed' : 'pointer'
         *       }}
         *     >
         *       {selectedOptions.length > 0 ? selectedOptions[0].label : placeholder || 'Select option'}
         *       <span aria-hidden="true">▼</span>
         *     </button>
         *   )}
         * />
         * ```
         */
    trigger?: (props: CustomizableSelectTriggerProps<T>) => React.ReactNode;
    /** 
         * A function to render custom items in the dropdown.
         * This allows complete customization of how each option appears in the list.
         *
         * Example: Custom item with additional styling
         *
         * ```tsx
         * <CustomizableSelect
         *   options={options}
         *   onChange={(value) => console.log('Selected:', value)}
         *   item={({ option, selected, active, onItemClick, onItemHover, id }) => (
         *     <div
         *       id={id}
         *       role="option"
         *       aria-selected={selected}
         *       onClick={(e) => onItemClick?.(option, e)}
         *       onMouseEnter={(e) => onItemHover?.(option, e)}
         *       style={{
         *         padding: '8px 12px',
         *         background: active ? '#f0f8ff' : selected ? '#e6f3ff' : 'white',
         *         fontWeight: selected ? 'bold' : 'normal',
         *         cursor: 'pointer'
         *       }}
         *     >
         *       {option.label}
         *       {selected && <span style={{ float: 'right' }}>✓</span>}
         *     </div>
         *   )}
         * />
         * ```
         */
    item?: (props: CustomizableSelectItemProps<T>) => React.ReactNode;
};
/** 
 * A dropdown with a selectable list of options.
 */
export declare function Select<T>(props: SelectProps<T>): React.JSX.Element;
/** 
 * A highly customizable dropdown with a selectable list of options.
 * Allows custom trigger and item renderers for advanced use cases.
 *
 * @remarks
 * For most use cases, the standard `Select` component should be preferred.
 * Only use this component when you need complete control over the
 * appearance and behavior of the select trigger or menu items.
 */
export declare function CustomizableSelect<T>(props: CustomizableSelectProps<T>): React.JSX.Element;
export {};
