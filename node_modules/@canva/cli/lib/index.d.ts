/**
 * A result type that can be either a success or an error.
 *
 * @remarks
 * This is a generic type that can be used to represent the result of a function.
 *
 * @param E - The type of the error code.
 */
declare interface ErrorResult<E> {
  success: false;
  code: E;
  message: string;
}

/**
 * @public
 * Generates a new Canva design preview URL, with an app deep linked and opened in the sidebar.
 *
 * @remarks
 * If appId is not provided, the CANVA_APP_ID environment variable will be used if set.
 *
 * @param appId - Optional app ID to override the default from configuration
 * @returns A Promise that resolves to a Result containing the preview URL string on success,
 * or an error code and message on failure
 */
export declare const generatePreviewUrl: ({
  appId,
  intent,
}?: {
  appId?: string;
  intent?: string;
}) => Promise<Result<string, string>>;

/**
 * A result type that can be either a success or an error.
 *
 * @remarks
 * This is a generic type that can be used to represent the result of a function.
 *
 * @param T - The type of the data in the success result.
 * @param E - The type of the error code.
 */
declare type Result<T, E> = SuccessResult<T> | ErrorResult<E>;

/**
 * A result type that can be either a success or an error.
 *
 * @remarks
 * This is a generic type that can be used to represent the result of a function.
 *
 * @param T - The type of the data in the success result.
 */
declare interface SuccessResult<T> {
  success: true;
  data: T;
}

export {};
