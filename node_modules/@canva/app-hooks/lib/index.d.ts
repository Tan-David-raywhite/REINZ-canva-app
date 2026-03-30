import type { AppProcessId } from "@canva/design";
import type { CloseParams } from "@canva/platform";
import type { Feature } from "@canva/platform";
import type { OverlayTarget } from "@canva/design";
import type { SelectionEvent } from "@canva/design";
import type { SelectionScope } from "@canva/design";
import type { TableElement } from "@canva/design";

/**
 * @public
 *
 * The current state of a cell within a table.
 */
export declare type CellState = {
  /**
   * The position of the cell in the row, starting from `1`.
   */
  rowPos?: number;
  /**
   * The position of the cell in the column, starting from `1`.
   */
  columnPos?: number;
  /**
   * The number of rows that the cell should span.
   */
  rowSpan?: number;
  /**
   * The number of columns that the cell should span.
   */
  colSpan?: number;
  /**
   * The text content of the cell.
   */
  text?: string;
  /**
   * The background color of the cell as a hex code. The hex code must be six characters long
   * and preceded with a `#`. For example, `#ff0099`.
   */
  fillColor?: string;
};

/**
 * @public
 *
 * The current state of a table.
 */
export declare type TableState = {
  /**
   * The number of rows in the table.
   */
  rowCount?: number;
  /**
   * The number of columns in the table.
   */
  columnCount?: number;
  /**
   * By default, a table's cells are empty. You can use this property to define the
   * content and appearance of cells.
   */
  cells?: CellState[];
  /**
   * An error message to indicate that the table is in an error state.
   */
  error?: string;
};

/**
 * @public
 *
 * A hook that enables re-rendering of a React component whenever the state of feature support changes in Canva.
 *
 * @returns A function that checks if the specified Canva SDK features are supported
 */
export declare function useFeatureSupport(): (...args: Feature[]) => boolean;

/**
 * @public
 *
 * A hook that manages overlay state and provides methods to open and close overlays on a specified target.
 *
 * @param target - The overlay target to register for whether an overlay can be opened
 * @returns An object containing:
 * - `canOpen`: A boolean indicating whether the overlay can be opened on the specified target
 * - `isOpen`: A boolean indicating whether the overlay is currently open
 * - `open`: A function to open an overlay on the specified target
 * - `close`: A function to close the currently opened overlay
 */
export declare function useOverlay<
  T extends OverlayTarget,
  C extends CloseParams = CloseParams,
>(
  target: T,
): {
  canOpen: boolean;
  isOpen: boolean;
  open: (opts?: {
    launchParameters?: unknown;
  }) => Promise<AppProcessId | undefined>;
  close: (opts: C) => Promise<void>;
};

/**
 * @public
 *
 * A hook that returns a selection event representing a user selection of the specified content type.
 *
 * @remarks
 * The event contains methods to read a snapshot of the selected content, and optionally mutate it.
 * This is a reactive value. Calling this multiple times will return different instances representing the same selection.
 *
 * @param scope - The type of content to listen for selection changes on
 * @returns A selection event for the specified content scope
 */
export declare function useSelection<S extends SelectionScope>(
  scope: S,
): SelectionEvent<S>;

/**
 * @public
 *
 * A hook that simplifies the creation of a table and the management of a table's state.
 *
 * @param initialState - The initial state of the table, such as the number of rows and columns it has
 * @returns The current state of the table and methods for interacting with the table
 */
export declare const useTable: (initialState: TableState) => TableState & {
  /**
   * Converts the table state into a {@link @canva/design#TableElement}. The result can then
   * be passed into the `addElementAtPoint` or `addElementAtCursor` method.
   */
  build(): TableElement;
};

export {};
