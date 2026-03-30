export declare class ClientPosition {
    readonly clientX: number;
    readonly clientY: number;
    readonly pageX: number;
    readonly pageY: number;
    constructor(clientX: number, clientY: number, pageX: number, pageY: number);
    static fromEvent(
        { clientX, clientY, pageX, pageY, }: {
            clientX: number;
            clientY: number;
            pageX: number;
            pageY: number;
        }
    ): ClientPosition;
}
export declare function isDistancePastThreshold(a: ClientPosition, b: ClientPosition, threshold?: number): boolean;
