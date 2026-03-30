import * as React from 'react';
import type { MasonryPresenter, MeasuredRow } from '../masonry_presenter';
import type { RowVisibility } from '../masonry_virtualization_controller';
type MasonryContainerProps = {
    rows: MeasuredRow[]
    rowVisibility?: RowVisibility
    containerWidth?: number
    horizontalGutterPx: number
    verticalGutterPx: number
    presenter?: MasonryPresenter
};
export declare const InternalMasonryContainer: React.ComponentType<MasonryContainerProps>;
export {};
