/**
 * @public
 *
 * Main interface for implementing the DesignEditor intent.
 *
 * Implementing the DesignEditor Intent enables apps to assist users in editing designs,
 * by presenting interactive and creative tooling alongside the Canva design surface.
 */
export declare type DesignEditorIntent = {
    /**
     * Renders the UI containing the app’s functionality.
     *
     * @example
     * ```tsx
     * function render() {
     *   // render your UI using your preferred framework
     * }
     * ```
     */
    render: () => void;
};

/**
 * @public
 *
 * Prepares a {@link DesignEditorIntent|DesignEditor Intent}.
 *
 * @example
 * ```tsx
 * import { prepareDesignEditor } from '@canva/intents/design';
 *
 * prepareDesignEditor({
 *  render: async () => {
 *    // TODO: Implement the logic to render your app's UI
 *  },
 * });
 * ```
 */
export declare const prepareDesignEditor: (implementation: DesignEditorIntent) => void;

export { }
