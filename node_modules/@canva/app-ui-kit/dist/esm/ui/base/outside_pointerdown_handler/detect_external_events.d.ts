import * as React from 'react';
export type IDetectExternalEventsProps = {
    component?: Extract<React.ElementType, string>
    reactEvents: string[]
    domEvents: string[]
    onExternalEvent?(event: Event): void
};
export declare class DetectExternalEvents extends React.Component<React.PropsWithChildren<IDetectExternalEventsProps>> {
    private _disposeTopLevelEvents;
    private _lastInterceptedEvent;
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private _setupTopLevelEvents;
    private readonly _handleWrapperEvent;
    private readonly _handleTopLevelEvent;
}
