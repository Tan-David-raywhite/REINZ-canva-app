import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { delay as delayFn } from '../../../../base/delay';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import * as React from 'react';
import { useEnableAnimations } from '../../provider/provider';
import { Video } from '../../video/video';
import { StaticImage } from './image';
import { ImageThumbnail } from './image_thumbnail';
import { Thumbnail } from './thumbnail';
import styles from './video_thumbnail.css';
const TRANSPARENT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
export function VideoThumbnail(props) {
    const { videoSrc, imageSrc, playState = 'play', imageLoadingState, videoClassName, VideoComponent = Video, videoLoadingState, delayVideoLoad, loadVideo, onVideoLoad, imageAlt, imageFallback, imagePlaceholder, renderImage = StaticImage, onImageLoad, imageClassName, width, height, aspectRatio, border, borderRadius = 'none', muted = true, autoplay = true, ref } = props;
    const enableAnimations = useEnableAnimations();
    const renderVideoThumbnail = React.useCallback((videoSrc_)=>{
        const renderVideo = (loadingState)=>loadingState === 'loaded' && _jsx(VideoComponent, {
                autoPlay: enableAnimations && autoplay,
                controls: false,
                className: classNames(videoClassName, styles.video, {
                    [styles.videoAsOverlay]: imageSrc != null
                }),
                draggable: false,
                loop: true,
                muted: muted,
                playsInline: true,
                ref: ref,
                src: videoSrc_,
                poster: isIosCanvaEditor() ? TRANSPARENT_IMAGE : undefined
            });
        if (videoLoadingState == null) return _jsx(LoadVideo, {
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
    const renderImageThumbnail = React.useCallback((imageSrc_)=>_jsx(ImageThumbnail, {
            src: imageSrc_,
            loadingState: imageLoadingState,
            fallback: imageFallback,
            placeholder: imagePlaceholder,
            alt: imageAlt,
            className: classNames(styles.image, imageClassName),
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
    return _jsxs(Thumbnail, {
        aspectRatio: aspectRatio,
        width: width,
        height: height,
        innerContainerClassName: styles.videoWrapper,
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
const LoadVideo = observer(function LoadVideo({ src, delay, callback, loadVideo = simpleLoadVideo, children }) {
    const store = useLocalObservable(()=>({
            loadingState: 'loading',
            setLoadingState: action((loadingState)=>{
                store.loadingState = loadingState;
            })
        }));
    React.useEffect(()=>{
        (async ()=>{
            try {
                await delayFn(delay);
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
