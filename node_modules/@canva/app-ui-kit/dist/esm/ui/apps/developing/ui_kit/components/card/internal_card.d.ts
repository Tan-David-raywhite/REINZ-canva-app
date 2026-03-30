import type * as React from 'react';
export type TouchOrMouseEvent<T> = React.SyntheticEvent & Partial<Omit<React.MouseEvent<T>, 'nativeEvent'>> & Partial<Omit<React.TouchEvent<T>, 'nativeEvent'>>;
export type InternalCardProps = {
    /** 
         * A callback that runs when the card is clicked.
         * @param event - The click event for the button.
         */
    onClick?: (event: TouchOrMouseEvent<any>) => void;
    /** 
         * A callback that runs when the user starts dragging the card.
         */
    onDragStart?: React.DragEventHandler;
    /** 
         * If `true`, the card will show a loading indicator. This should be used while the item is uploading and is being added to the design.
         *
         * @defaultValue false
         */
    loading?: boolean;
};
export type Visibility = 'always' | 'on-hover';
export type DecoratedCardProps = {
    /** 
         * A decorator component that's rendered at the bottom end corner of the card.
         * These are generally `Badge` components from the App UI Kit used to represent a status, or add clarifying information to the Card.
         */
    bottomEnd?: React.ReactNode;
    /** 
         * Controls the visibility of the decorators.
         * For devices without hover support, decorators will always be visible.
         * @defaultValue "on-hover"
         */
    bottomEndVisibility?: Visibility;
};
export declare const CARD_THUMBNAIL_SIDE_LENGTH_PX = 56;
