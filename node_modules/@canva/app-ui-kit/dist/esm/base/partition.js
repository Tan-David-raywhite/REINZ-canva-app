export function partition(xs, f) {
    const ts = [];
    const us = [];
    let index = 0;
    for (const x of xs){
        if (f(x, index)) ts.push(x);
        else us.push(x);
        index++;
    }
    return [
        ts,
        us
    ];
}
