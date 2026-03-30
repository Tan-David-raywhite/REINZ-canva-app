import { jsx as _jsx } from "react/jsx-runtime";
import { makeObservable } from '../../../base/make_observable/make_observable';
import { debounce } from '../../../base/debounce';
import { disposeOnUnmount } from '../../../base/mobx_react/dispose_on_unmount';
import { action, computed, observable, reaction, runInAction } from 'mobx';
import * as React from 'react';
import { WindowedList } from '../scroll_controls/scroll_window';
const LOAD_ELEMENTS_THROTTLE = 500;
const defaultRowVisibility = {
    renderedFirstVisible: 0,
    renderedLastVisible: 5,
    scrollingFirstVisible: 0,
    scrollingLastVisible: 0
};
export class MasonryVirtualizationController extends React.Component {
    static _makeObservable(instance) {
        makeObservable(instance, {
            verticalOffset: observable.ref,
            offsetScrollState: computed.struct
        });
    }
    componentDidMount() {
        disposeOnUnmount(this, reaction(()=>this.offsetScrollState.positions, debounce(action((positions)=>{
            this.debouncedScrollState.positions = positions;
        }), LOAD_ELEMENTS_THROTTLE), {
            fireImmediately: true
        }));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.verticalOffset !== this.props.verticalOffset) runInAction(()=>this.verticalOffset = this.props.verticalOffset);
    }
    get offsetScrollState() {
        const { layout, positions } = this.props.virtualization.scrollState;
        return positions ? {
            layout,
            positions: {
                containerSize: positions.containerSize,
                scrollPosition: positions.scrollPosition - this.verticalOffset
            }
        } : this.props.virtualization.scrollState;
    }
    render() {
        const { overscan } = this.props.virtualization;
        return _jsx(WindowedList, {
            scrollState: this.debouncedScrollState,
            itemSizes: this.props.rowHeights,
            overscan: overscan,
            children: (debouncedState)=>_jsx(WindowedList, {
                    scrollState: this.offsetScrollState,
                    itemSizes: this.props.rowHeights,
                    overscan: overscan,
                    children: (state)=>{
                        if (state == null || debouncedState == null) return this.props.children({
                            rowVisibility: defaultRowVisibility
                        });
                        const { firstVisible: scrollingFirstVisible, lastVisible: scrollingLastVisible } = state;
                        const { firstVisible: renderedFirstVisible, lastVisible: renderedLastVisible } = debouncedState;
                        return this.props.children({
                            rowVisibility: {
                                renderedFirstVisible,
                                renderedLastVisible,
                                scrollingFirstVisible,
                                scrollingLastVisible
                            }
                        });
                    }
                })
        });
    }
    constructor(...args){
        super(...args), this.debouncedScrollState = (MasonryVirtualizationController._makeObservable(this), observable.object({
            layout: 'vertical'
        })), this.verticalOffset = this.props.verticalOffset;
    }
}
export const SingleWindowMasonryVirtualizationController = (props)=>{
    return _jsx(WindowedList, {
        scrollState: props.virtualization.scrollState,
        itemSizes: props.rowHeights,
        overscan: 0,
        children: (state)=>{
            if (state == null) return props.children({
                rowVisibility: defaultRowVisibility
            });
            const { firstVisible: scrollingFirstVisible, lastVisible: scrollingLastVisible } = state;
            const { firstVisible: renderedFirstVisible, lastVisible: renderedLastVisible } = state;
            return props.children({
                rowVisibility: {
                    renderedFirstVisible,
                    renderedLastVisible,
                    scrollingFirstVisible,
                    scrollingLastVisible
                }
            });
        }
    });
};
