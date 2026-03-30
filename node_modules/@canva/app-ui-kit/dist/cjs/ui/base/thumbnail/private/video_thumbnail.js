"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VideoThumbnail", {
    enumerable: true,
    get: function() {
        return VideoThumbnail;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _delay = require('../../../../base/delay');
const _classnames = _interop_require_default(require("classnames"));
const _mobx = require("mobx");
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _provider = require('../../provider/provider');
const _video = require('../../video/video');
const _image = require("./image");
const _image_thumbnail = require("./image_thumbnail");
const _thumbnail = require("./thumbnail");
const _video_thumbnailcss = _interop_require_default(require("./video_thumbnail.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const TRANSPARENT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
function VideoThumbnail(props) {
    const { videoSrc, imageSrc, playState = 'play', imageLoadingState, videoClassName, VideoComponent = _video.Video, videoLoadingState, delayVideoLoad, loadVideo, onVideoLoad, imageAlt, imageFallback, imagePlaceholder, renderImage = _image.StaticImage, onImageLoad, imageClassName, width, height, aspectRatio, border, borderRadius = 'none', muted = true, autoplay = true, ref } = props;
    const enableAnimations = (0, _provider.useEnableAnimations)();
    const renderVideoThumbnail = _react.useCallback((videoSrc_)=>{
        const renderVideo = (loadingState)=>loadingState === 'loaded' && (0, _jsxruntime.jsx)(VideoComponent, {
                autoPlay: enableAnimations && autoplay,
                controls: false,
                className: (0, _classnames.default)(videoClassName, _video_thumbnailcss.default.video, {
                    [_video_thumbnailcss.default.videoAsOverlay]: imageSrc != null
                }),
                draggable: false,
                loop: true,
                muted: muted,
                playsInline: true,
                ref: ref,
                src: videoSrc_,
                poster: isIosCanvaEditor() ? TRANSPARENT_IMAGE : undefined
            });
        if (videoLoadingState == null) return (0, _jsxruntime.jsx)(LoadVideo, {
            src: videoSrc_,
            delay: delayVideoLoad || 0,
            loadVideo: loadVideo,
            callback: onVideoLoad,
            children: (loadingState)=>renderVideo(loadingState)
        });
        return renderVideo(videoLoadingState);
    }, [
        ref,
        imageSrc,
        videoClassName,
        delayVideoLoad,
        videoLoadingState,
        VideoComponent,
        enableAnimations,
        loadVideo,
        onVideoLoad,
        muted,
        autoplay
    ]);
    const renderImageThumbnail = _react.useCallback((imageSrc_)=>(0, _jsxruntime.jsx)(_image_thumbnail.ImageThumbnail, {
            src: imageSrc_,
            loadingState: imageLoadingState,
            fallback: imageFallback,
            placeholder: imagePlaceholder,
            alt: imageAlt,
            className: (0, _classnames.default)(_video_thumbnailcss.default.image, imageClassName),
            renderImage: renderImage,
            onImageLoad: onImageLoad,
            border: "none",
            borderRadius: "none"
        }), [
        imageLoadingState,
        imageFallback,
        imagePlaceholder,
        imageAlt,
        imageClassName,
        renderImage,
        onImageLoad
    ]);
    const showVideo = playState === 'play' && (imageLoadingState !== 'loading' || imageLoadingState == null);
    return (0, _jsxruntime.jsxs)(_thumbnail.Thumbnail, {
        aspectRatio: aspectRatio,
        width: width,
        height: height,
        innerContainerClassName: _video_thumbnailcss.default.videoWrapper,
        border: border,
        borderRadius: borderRadius,
        children: [
            imageSrc != null && renderImageThumbnail(imageSrc),
            showVideo && renderVideoThumbnail(videoSrc)
        ]
    });
}
function simpleLoadVideo(src) {
    return new Promise((resolve, reject)=>{
        const onLoad = ()=>{
            video.removeEventListener('loadeddata', onLoad);
            resolve(video);
        };
        const onError = ()=>{
            video.removeEventListener('error', onError);
            reject();
        };
        const video = document.createElement('video');
        video.src = src;
        video.addEventListener('error', onError);
        video.addEventListener('loadeddata', onLoad);
        video.load();
    });
}
const LoadVideo = (0, _mobxreactlite.observer)(function LoadVideo({ src, delay, callback, loadVideo = simpleLoadVideo, children }) {
    const store = (0, _mobxreactlite.useLocalObservable)(()=>({
            loadingState: 'loading',
            setLoadingState: (0, _mobx.action)((loadingState)=>{
                store.loadingState = loadingState;
            })
        }));
    _react.useEffect(()=>{
        (async ()=>{
            try {
                await (0, _delay.delay)(delay);
                store.setLoadingState('loading');
                callback && callback('loading');
                await loadVideo(src);
                store.setLoadingState('loaded');
            } catch (error) {
                store.setLoadingState('error');
            } finally{
                callback && callback(store.loadingState);
            }
        })();
    }, [
        src,
        store,
        callback,
        loadVideo,
        delay
    ]);
    return children(store.loadingState);
});
const isIosCanvaEditor = ()=>{
    return navigator != null && navigator.userAgent.indexOf('canvaeditor') >= 0 && !!navigator.userAgent.match(/iphone|ipad/gi);
};
