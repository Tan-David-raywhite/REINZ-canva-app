import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Masonry as EaselMasonry, MasonryItem as EaselMasonryItem } from '../../../../../base/masonry/masonry';
import { baseUnit } from '../metrics/metrics';
/** 
 * A horizontal Masonry component.
 *
 * Unlike common Masonry layouts which have a constant width and variable heights
 * this layout aims for a target height per row. Not all rows will have the same height so that
 * elements can be resized to fit the row width.
 *
 * The result is a layout similar to:
 *
 * +----------------------------------------------+
 * |                                              |
 * | +--------------------+ +------+ +----------+ |
 * | |                    | |      | |          | |
 * | |                    | |      | |          | |
 * | |                    | |      | |          | |
 * | +--------------------+ +------+ +----------+ |
 * |                                              |
 * | +----------------+ +-----------------------+ |
 * | |                | |                       | |
 * | |                | |                       | |
 * | |                | |                       | |
 * | |                | |                       | |
 * | +----------------+ +-----------------------+ |
 * |                                              |
 * | +----------+ +-----+ +---+ +---------------+ |
 * | |          | |     | |   | |               | |
 * | |          | |     | |   | |               | |
 * | |          | |     | |   | |               | |
 * | +----------+ +-----+ +---+ +---------------+ |
 * |                                              |
 * +----------------------------------------------+
 */ export function Masonry(props) {
    return _jsx(EaselMasonry, {
        ...props,
        gutterPx: baseUnit
    });
}
export function MasonryItem(props) {
    return _jsx(EaselMasonryItem, {
        ...props
    });
}
