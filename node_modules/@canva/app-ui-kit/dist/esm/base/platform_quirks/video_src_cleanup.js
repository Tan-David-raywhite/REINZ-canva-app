export const cleanupVideoSrcOnUnmount = (videoElement)=>{
    setTimeout(()=>{
        videoElement.pause();
        videoElement.removeAttribute('src');
        while (videoElement.firstChild)
            videoElement.removeChild(videoElement.firstChild);
        videoElement.load();
    }, 0);
};
