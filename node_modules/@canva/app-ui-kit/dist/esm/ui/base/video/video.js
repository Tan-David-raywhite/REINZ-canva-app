import { jsx as _jsx } from "react/jsx-runtime";
import { cleanupVideoSrcOnUnmount } from '../../../base/platform_quirks/video_src_cleanup';
import { composeRefs } from '../../../base/react/compose_refs';
import * as React from 'react';
import { prefersReducedMotion as prefersReducedMotionBase } from '../animation/supports_animation';
import { useAutoplayVideos, useEnableAnimations } from '../provider/provider';
export function createVideoComponent(cleanup = cleanupVideoSrcOnUnmount) {
    return function Video(props) {
        const [video, setVideo] = React.useState(null);
        const { muted = false, playbackRate = 1, autoPlay = false, ariaLabel, ariaHidden, ref, ...rest } = props;
        React.useEffect(()=>{
            if (!video) return;
            return ()=>cleanup(video);
        }, [
            video
        ]);
        const refCallback = React.useCallback((node)=>{
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
        return (_jsx("video", {
                ref: composeRefs(refCallback, ref),
                "aria-label": ariaLabel,
                "aria-hidden": ariaHidden,
                ...rest
            }));
    };
}
export function createVideoA11ySafeComponent(Video, prefersReducedMotion = prefersReducedMotionBase) {
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
        const autoplayVideos = useAutoplayVideos();
        const enableAnimations = useEnableAnimations();
        const enabledAutoPlay = canA11ySafeVideoAutoplay({
            prefersReducedMotion,
            autoplayVideos,
            enableAnimations
        });
        const videoRef = React.useRef(null);
        const { autoPlay = false, ref, ...omitAutoPlayProps } = props;
        React.useEffect(()=>{
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
        return _jsx(Video, {
            ref: composeRefs(videoRef, ref),
            ...omitAutoPlayProps
        });
    };
}
export function canA11ySafeVideoAutoplay({ prefersReducedMotion = prefersReducedMotionBase, autoplayVideos, enableAnimations }) {
    const autoplayVideosSetting = autoplayVideos ?? 'ADAPTIVE';
    return enableAnimations && (autoplayVideosSetting === 'AUTOPLAY' || autoplayVideosSetting === 'ADAPTIVE' && !prefersReducedMotion());
}
export const Video = createVideoComponent();
export const VideoA11ySafe = createVideoA11ySafeComponent(Video);
