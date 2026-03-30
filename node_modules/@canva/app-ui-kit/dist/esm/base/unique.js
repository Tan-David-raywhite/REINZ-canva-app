export function unique(arr, by) {
    if (!by) return [
        ...new Set(arr)
    ];
    const seenKeys = new Set();
    const uniqueValues = [];
    for (const val of arr){
        const key = by(val);
        if (seenKeys.has(key)) continue;
        seenKeys.add(key);
        uniqueValues.push(val);
    }
    return uniqueValues;
}
