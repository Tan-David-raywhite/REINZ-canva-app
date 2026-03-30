import * as React from 'react';
import type { CardHoverEffect } from './card';
export declare const useCardConfiguration: () => CardConfiguration;
export declare function useCardConfigurationSetter(configuration: CardConfiguration): void;
export declare function useCardHover(
 args?: {
     track: boolean
 }
): boolean;
export declare function useCardFocus(): boolean;
export declare function useCardMouseDown(): boolean;
export declare const useCardEventHandlers: () => {
    onMouseEnter: (() => void) | undefined;
    onMouseLeave: (() => void) | undefined;
    onFocus: (() => void) | undefined;
    onBlur: (() => void) | undefined;
    onMouseDown: (() => void) | undefined;
    onMouseUp: (() => void) | undefined;
};
export declare function withCardContextProvider<P extends {}>(Component: React.ComponentType<P>): React.ComponentType<P>;
type CardConfiguration = {
    border?: 'none' | 'low'
    borderRadius?: 'none' | 'elementSmall' | 'element' | 'elementRelaxed' | 'elementSoftest'
    disabled: boolean
    hoverBoundary?: 'card' | 'thumbnail'
    hoverEffect?: CardHoverEffect
    layout: 'vertical' | 'horizontal'
    selectableBoundary?: 'card' | 'thumbnail'
    selectableMode: 'none' | 'secondary' | 'primary'
    selected?: boolean
};
export {};
