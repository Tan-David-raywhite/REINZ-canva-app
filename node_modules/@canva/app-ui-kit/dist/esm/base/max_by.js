export function maxBy(xs, f) {
    let maxX;
    let maxY;
    for (const x of xs){
        const y = f(x);
        if (maxY == null ? !Number.isNaN(y) : y > maxY) {
            maxX = x;
            maxY = y;
        }
    }
    return maxX;
}
export function minBy(xs, f) {
    return maxBy(xs, (x)=>-f(x));
}
