"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Video () {
        return Video;
    },
    get VideoA11ySafe () {
        return VideoA11ySafe;
    },
    get canA11ySafeVideoAutoplay () {
        return canA11ySafeVideoAutoplay;
    },
    get createVideoA11ySafeComponent () {
        return createVideoA11ySafeComponent;
    },
    get createVideoComponent () {
        return createVideoComponent;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _video_src_cleanup = require('../../../base/platform_quirks/video_src_cleanup');
const _compose_refs = require('../../../base/react/compose_refs');
const _react = _interop_require_wildcard(require("react"));
const _supports_animation = require('../animation/supports_animation');
const _provider = require('../provider/provider');
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
function createVideoComponent(cleanup = _video_src_cleanup.cleanupVideoSrcOnUnmount) {
    return function Video(props) {
        const [video, setVideo] = _react.useState(null);
        const { muted = false, playbackRate = 1, autoPlay = false, ariaLabel, ariaHidden, ref, ...rest } = props;
        _react.useEffect(()=>{
            if (!video) return;
            return ()=>cleanup(video);
        }, [
            video
        ]);
        const refCallback = _react.useCallback((node)=>{
            setVideo(node);
            if (!node)
                return;
            node.autoplay = autoPlay;
            node.muted = muted;
            node.playbackRate = playbackRate;
            node.defaultPlaybackRate = playbackRate;
        }, [
            autoPlay,
            muted,
            playbackRate
        ]);
        return ((0, _jsxruntime.jsx)("video", {
                ref: (0, _compose_refs.composeRefs)(refCallback, ref),
                "aria-label": ariaLabel,
                "aria-hidden": ariaHidden,
                ...rest
            }));
    };
}
function createVideoA11ySafeComponent(Video, prefersReducedMotion = _supports_animation.prefersReducedMotion) {
    const autoPlayingVideos = [];
    const addAutoplayingVideo = (video)=>autoPlayingVideos.push(video);
    const maybeRemoveAutoplayingVideo = (video)=>{
        const index = autoPlayingVideos.indexOf(video);
        if (index >= 0) autoPlayingVideos.splice(index, 1);
    };
    const maybeSuppressPlayError = (e)=>{
        if (e.name === 'NotAllowedError' || e.name === 'AbortError') return;
        throw e;
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('blur', ()=>autoPlayingVideos.forEach((video)=>video.pause()));
        window.addEventListener('focus', ()=>autoPlayingVideos.forEach((video)=>video.src && video.play().catch(maybeSuppressPlayError)));
    }
    return function VideoA11ySafeComponent(props) {
        const autoplayVideos = (0, _provider.useAutoplayVideos)();
        const enableAnimations = (0, _provider.useEnableAnimations)();
        const enabledAutoPlay = canA11ySafeVideoAutoplay({
            prefersReducedMotion,
            autoplayVideos,
            enableAnimations
        });
        const videoRef = _react.useRef(null);
        const { autoPlay = false, ref, ...omitAutoPlayProps } = props;
        _react.useEffect(()=>{
            const video = videoRef.current;
            if (video) {
                video.autoplay = autoPlay && enabledAutoPlay;
                if (video.autoplay) addAutoplayingVideo(video);
                else maybeRemoveAutoplayingVideo(video);
                return ()=>maybeRemoveAutoplayingVideo(video);
            }
        }, [
            autoPlay,
            enabledAutoPlay
        ]);
        return (0, _jsxruntime.jsx)(Video, {
            ref: (0, _compose_refs.composeRefs)(videoRef, ref),
            ...omitAutoPlayProps
        });
    };
}
function canA11ySafeVideoAutoplay({ prefersReducedMotion = _supports_animation.prefersReducedMotion, autoplayVideos, enableAnimations }) {
    const autoplayVideosSetting = autoplayVideos ?? 'ADAPTIVE';
    return enableAnimations && (autoplayVideosSetting === 'AUTOPLAY' || autoplayVideosSetting === 'ADAPTIVE' && !prefersReducedMotion());
}
const Video = createVideoComponent();
const VideoA11ySafe = createVideoA11ySafeComponent(Video);
