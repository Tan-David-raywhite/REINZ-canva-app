import * as React from 'react';
export type UseTabOptions = {
    id: string
    active?: boolean
    onClick?: (id: string) => void
    ariaLabel?: string
    ariaControls?: string
};
export declare const useTab: ({ id, active: activeProp, onClick: onClickProp, ariaControls: ariaControlsProp, }: UseTabOptions) => {
    active: boolean | undefined
    id: string
    role: "tab"
    ariaControls: string | undefined
    tabIndex: -1 | undefined
    onClick: () => void
    onFocus: () => void
};
export declare const useTabList: () => {
    ref: React.RefObject<HTMLDivElement | null>
    role: "tablist"
};
export type UseTabPanelOptions = {
    id: string
    active?: boolean
    ariaLabelledBy?: string
    contentRenderStrategy?: 'always-remount' | 'lazy' | 'eager'
    children?: React.ReactNode
};
export declare const useTabPanel: ({ id, active: activeProp, ariaLabelledBy: ariaLabelledByProp, children: childrenProp, contentRenderStrategy, }: UseTabPanelOptions) => {
    ref: React.RefObject<HTMLDivElement | null>
    active: boolean | undefined
    id: string
    role: string
    ariaLabelledBy: string | undefined
    tabIndex: number | undefined
    children: React.ReactNode
};
export type UseTabsResult = {
    tabsId: string
    activeId: string
    setActiveId: (id: string) => void
    tabIds: string[]
    registerTabId: (id: string) => void
    unregisterTabId: (id: string) => void
    tabPanelIds: string[]
    registerTabPanelId: (id: string) => void
    unregisterTabPanelId: (id: string) => void
};
export declare const TabsContext: React.Context<UseTabsResult | null>;
export declare function useTabsContext(): UseTabsResult | null;
export type UseTabsOptions = {
    activeId?: string
    defaultActiveId?: string
    onSelect?: (activeId: string, prevActiveId: string) => void
};
export declare const useTabs: ({ activeId: activeIdProp, defaultActiveId, onSelect, }: UseTabsOptions) => UseTabsResult;
export type TabsElementsContextType = {
    elementRefs: HTMLElement[]
    registerElementRef: (element: HTMLElement) => void;
    unregisterElementRef: (element: HTMLElement) => void;
    activeElementRef: HTMLElement | null;
    setActiveElementRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    isAnimating: boolean;
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const TabsElementsProvider: ({ children }: React.PropsWithChildren) => React.JSX.Element;
export declare function useRegisterTabsElements(active?: boolean): {
    ref: React.RefObject<HTMLElement | null>
};
export declare function useTabsElements(): {
    activeElementRef: HTMLElement | null
    setActiveElementRef: React.Dispatch<React.SetStateAction<HTMLElement | null>> | undefined
    elementRefs: HTMLElement[]
    registerElementRef: ((element: HTMLElement) => void) | undefined
    unregisterElementRef: ((element: HTMLElement) => void) | undefined
    isAnimating: boolean | undefined
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>> | undefined
};
