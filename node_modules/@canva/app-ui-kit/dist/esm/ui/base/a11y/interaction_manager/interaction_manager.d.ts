import * as React from 'react';
type Layer<T extends HTMLElement = HTMLElement> = {
    element: T | null
    level?: number
    markOutsideInert: boolean
};
export declare function useInteractionLayer<T extends HTMLElement>({ level, markOutsideInert, }: Omit<Layer, 'element'>): (newElement: T | null) => void;
export declare function InteractionManager({ children, }: {
    children: React.ReactNode
}): React.JSX.Element;
export {};
