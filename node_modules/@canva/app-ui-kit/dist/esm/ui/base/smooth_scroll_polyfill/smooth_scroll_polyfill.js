import * as smoothscroll from 'smoothscroll-polyfill';
let called = false;
if (!called && typeof document !== 'undefined' && typeof document.documentElement.style !== 'undefined') {
    smoothscroll.polyfill();
    called = true;
}
