export function delay(timeout) {
    return new Promise((res)=>setTimeout(res, timeout));
}
