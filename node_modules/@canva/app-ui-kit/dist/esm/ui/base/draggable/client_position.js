export class ClientPosition {
    static fromEvent({ clientX, clientY, pageX, pageY }) {
        return new ClientPosition(clientX, clientY, pageX, pageY);
    }
    constructor(clientX, clientY, pageX, pageY){
        this.clientX = clientX;
        this.clientY = clientY;
        this.pageX = pageX;
        this.pageY = pageY;
    }
}
export function isDistancePastThreshold(a, b, threshold = 4) {
    const distance2 = (a.clientX - b.clientX) ** 2 + (a.clientY - b.clientY) ** 2;
    return distance2 >= threshold ** 2;
}
