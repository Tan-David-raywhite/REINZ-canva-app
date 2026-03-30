"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cleanupVideoSrcOnUnmount", {
    enumerable: true,
    get: function() {
        return cleanupVideoSrcOnUnmount;
    }
});
const cleanupVideoSrcOnUnmount = (videoElement)=>{
    setTimeout(()=>{
        videoElement.pause();
        videoElement.removeAttribute('src');
        while (videoElement.firstChild)
            videoElement.removeChild(videoElement.firstChild);
        videoElement.load();
    }, 0);
};
