/**
 * @public
 * Options for requesting an access token for the current user.
 */
export declare type AccessTokenRequest = {
    /**
     * If `true`, the access token will be refreshed, even if it hasn't expired.
     *
     * @remarks
     * By default, access tokens are automatically refreshed after expiry.
     */
    forceRefresh?: boolean;
    /**
     * The scopes associated with the access token.
     */
    scope?: Set<string>;
};

/**
 * @public
 * The result of requesting an access token for the current user.
 *
 * @remarks
 * This is `null` when the current user doesn't have an access token.
 */
export declare type AccessTokenResponse = {
    /**
     * The access token for the current user.
     */
    token: string;
    /**
     * The scopes associated with the current user's access token.
     */
    scope: Set<string>;

} | null;

/**
 * Provides methods for authenticating users within apps.
 * @public
 */
export declare const auth: Authentication;

/**
 * @public
 * Provides methods for authenticating users within apps.
 */
export declare interface Authentication {
    /**
     * @public
     * Returns a JSON Web Token (JWT) that contains information about the current user.
     *
     * @remarks
     * This token must be decoded and verified via the app's backend.
     *
     * The verified token is an object with the following properties:
     *
     * - `aud` - The ID of the app.
     * - `brandId` - The ID of the user's team.
     * - `userId` - The ID of the user.
     *
     * To learn how to decode and verify JWTs, see [JSON Web Tokens](https://www.canva.dev/docs/apps/verifying-jwts/).
     *
     * @example Get a JWT that contains information about the current user
     * ```typescript
     * import { auth } from '@canva/user';
     *
     * const token = await auth.getCanvaUserToken();
     * ```
     */
    getCanvaUserToken: () => Promise<CanvaUserToken>;



    /**
     * @public
     * Creates a client for authenticating users with OAuth.
     *
     * @remarks
     * To learn more, see {@link https://www.canva.dev/docs/apps/authenticating-users/oauth}.
     *
     * @example Initialize an OAuth client
     * ```typescript
     * import { auth } from '@canva/user';
     *
     * const oauth = auth.initOauth();
     * ```
     */
    initOauth(): Oauth;
    /**
     * @public
     * Initializes an OAuth client for a single account.
     */
    initOauth(options: InitSingleAccountOauthOptions): Oauth;
    /**
     * @public
     * Initializes an OAuth client for a multi account.
     */
    initOauth(options: InitMultiAccountOauthOptions): MultiAccountOauth;
}

/**
 * @public
 * The result when a user fails to complete an OAuth authorization flow.
 */
declare type AuthorizationAborted = {
    /**
     * The status of the authorization flow.
     */
    status: 'aborted';
};

/**
 * @public
 * The result when a user successfully completes an OAuth authorization flow.
 */
declare type AuthorizationCompleted = {
    /**
     * The status of the authorization flow.
     */
    status: 'completed';
    /**
     * The scopes associated with the user.
     */
    scope: Set<string>;
};

/**
 * @public
 * Options for authorizing a user with OAuth.
 */
export declare type AuthorizationRequest<T extends Record<string, string>> = {
    /**
     * Query parameters to append to the URL of the request.
     */
    queryParams?: ExcludeKeys<T, ForbiddenKey>;
    /**
     * The list of scopes to request access to.
     */
    scope?: Set<string>;

};

/**
 * @public
 * The result of an OAuth authorization flow.
 */
export declare type AuthorizationResponse = AuthorizationCompleted | AuthorizationAborted;

/** @public */
declare interface BaseCanvaError extends Error {
    code: ErrorCode;

}

/**
 * @public
 * Represents the possible billable actions that can be tracked.
 */
export declare type BillableAction = 'modify_image' | 'modify_video' | 'modify_audio' | 'modify_text' | 'import_image' | 'import_video' | 'import_audio' | 'import_text' | 'generate_image' | 'generate_video' | 'generate_audio' | 'generate_text';

/**
 * @public
 * An error thrown by the Apps SDK.
 */
declare class CanvaErrorClass extends Error implements BaseCanvaError {
    /**
     * A code that identifies why the error was thrown.
     */
    readonly code: ErrorCode;

    constructor(opts: {
        code: ErrorCode;
        message: string;
    });
}

/**
 * @public
 * A JSON Web Token (JWT) that contains information about the current user.
 */
export declare type CanvaUserToken = string & {
    __canvaUserToken: never;
};

/**
 * @public
 * Represents the result when a user is denied access to a billable action.
 */
export declare type EnableBillableActionDenied = {
    /**
     * The status indicating that the billable action was denied.
     */
    status: 'denied';
};

/**
 * @public
 * Represents the result when a user successfully enables a billable action.
 */
export declare type EnableBillableActionGranted = {
    /**
     * The status indicating that the billable action was successfully enabled.
     */
    status: 'granted';
};

/**
 * @public
 * The result of a request to enable a billable action, which can either be granted or denied.
 */
export declare type EnableBillableActionResponse = EnableBillableActionGranted | EnableBillableActionDenied;

/**
 * @public
 * An error code that identifies why an error was thrown by the Apps SDK.
 *
 * @remarks
 * The possible error codes include:
 *
 * - `"bad_external_service_response"` - A response from an external service is invalid or malformed.
 * - `"bad_request"` - The app made a request with invalid or malformed inputs.
 * - `"failed_precondition"` - The requested operation can't be performed because a precondition hasn't been met.
 * - `"internal_error"` - An error occurred within the Apps SDK's internal implementation.
 * - `"not_found"` - The specified resource couldn't be found.
 * - `"not_allowed"` - The app isn't allowed to perform the requested operation.
 * - `"permission_denied"` - The app isn't allowed to perform the requested operation because the appropriate permissions aren't accepted.
 * - `"missing_permission"` - The app isn't allowed to perform the requested operation because the appropriate permissions aren't set in the app config.
 * - `"quota_exceeded"` - The app or user has exceeded their allocated quota for a resource or service.
 * - `"rate_limited"` - The app attempted too many operations within a certain period of time.
 * - `"timeout"` - The requested operation took too long to complete.
 * - `"unsupported_surface"` - The requested operation isn't supported on the current surface.
 * - `"unsupported_page_type"` - The requested operation isn't supported on the current page.
 * - `"user_offline"` - The requested operation can't be performed because the user is offline.
 */
declare type ErrorCode = 'bad_external_service_response' | 'bad_request' | 'failed_precondition' | 'internal_error' | 'not_found' | 'not_allowed' | 'permission_denied' | 'missing_permission' | 'quota_exceeded' | 'rate_limited' | 'timeout' | 'unsupported_surface' | 'unsupported_page_type' | 'user_offline';

declare type ExcludeKeys<T extends object, Keys> = {
    [K in keyof T]: K extends Keys ? never : T[K];
};

/**
 * @public
 * A key that can't be used as a query parameter in an OAuth request.
 *
 * @remarks
 * A key is forbidden when it's already used by Canva.
 */
export declare type ForbiddenKey = 'client_id' | 'redirect_uri' | 'scope' | 'state' | 'response_type' | 'code_challenge' | 'code_challenge_method' | 'client_secret';

/**
 * @public
 * Options for requesting a single OAuth account.
 */
export declare type GetAccountRequest = {
    accountId: string;
};

/**
 * @public
 * The result of requesting a single account.
 */
export declare type GetAccountResponse = {
    account: OauthAccount;
};

/**
 * @public
 * The result of requesting a list of accounts.
 */
export declare type GetAccountsResponse = {
    accounts: OauthAccount[];
};

/**
 * @public
 * Options for initializing the oauth client
 */
export declare type InitMultiAccountOauthOptions = {
    /**
     * The provider to initialize the oauth client for
     */
    provider: string;
    /**
     * The type of oauth client to initialize
     */
    type: 'multi_account';
};

/**
 * @public
 * Options for initializing the oauth client
 */
export declare type InitSingleAccountOauthOptions = {
    /**
     * The provider to initialize the oauth client for
     */
    provider: string;
    /**
     * The type of oauth client to initialize
     */
    type: 'single_account';
};

/**
 * @public
 * Provides methods for managing and tracking billable actions within apps.
 */
export declare interface Monetization {
    /**
     * @public
     * Note: This API is strictly for UI-related checks and should not be used for
     * backend authorization or verification purposes.
     *
     * @param action - The billable action to verify.
     * @returns A promise that resolves to `true` if the action can
     * be tracked (i.e., premium features are enabled for the user), or `false` if the
     * action cannot be tracked (i.e., non-premium).
     *
     * @example Check if a billable action is enabled
     * ```typescript
     * import { auth } from '@canva/user';
     *
     * const isEnabled = await monetization.isEnabled('MY_BILLABLE_ACTION');
     *
     * if (isEnabled) {
     *   // Show premium UI elements
     * } else {
     *   // Show upgrade prompt
     * }
     * ```
     */
    isEnabled: (action: BillableAction) => Promise<boolean>;
    /**
     * @public
     * Starts a new tracking session for a billable action or resumes an existing one.
     *
     * @param opts - Options to either start a new session or resume an existing session.
     *   - `action`: The billable action to be tracked (if starting a new session).
     *   - `id`: The ID of an existing session to resume (if resuming a session).
     * @returns An object containing the session's unique `id` and a method to close the session.
     *
     * @example Start a tracking session for a billable action
     * ```typescript
     * import { auth } from '@canva/user';
     *
     * const session = await auth.monetization.openTrackingSession({
     *   action: 'MY_BILLABLE_ACTION'
     * });
     *
     * try {
     *   // Perform billable action
     * } finally {
     *   // Always close the session when done
     *   await session.close();
     * }
     * ```
     *
     * @example Resume a tracking session for a billable action
     * ```typescript
     * import { auth } from '@canva/user';
     *
     * const session = await auth.monetization.openTrackingSession({
     *   id: 'EXISTING_SESSION_ID'
     * });
     *
     * try {
     *   // Continue billable action
     * } finally {
     *   await session.close();
     * }
     * ```
     */
    openTrackingSession(opts: OpenTrackingSessionOptions): Promise<TrackingSession>;
    /**
     * @public
     * Prompts the user to enable access to a billable action.
     *
     * Use this method when a user without premium access requests a premium feature.
     * If the action is already enabled, the method will resolve with a `granted` status, allowing the app to proceed.
     * Otherwise, the user will be prompted to enable access.
     *
     * @param action - The `BillableAction` that triggered the request.
     * @returns A promise that resolves with an `EnableBillableActionResponse`:
     *   - `granted`: if the action is enabled or the user successfully enables it.
     *   - `denied`: if the user refuses to enable access.
     *
     * @example Prompt the user to enable premium access
     * ```typescript
     * import { auth } from '@canva/user';
     *
     * const response = await auth.monetization.requestEnableBillableAction('MY_BILLABLE_ACTION');
     *
     * if (response === 'granted') {
     *   // User has access, proceed with premium feature
     *   const session = await auth.monetization.openTrackingSession({
     *     action: 'MY_BILLABLE_ACTION'
     *   });
     * } else {
     *   // User declined access, show alternative content
     * }
     * ```
     */
    requestEnableBillableAction: (action: BillableAction) => Promise<EnableBillableActionResponse>;
}

/**
 * An alias for the Monetization interface, providing access to monetization related functionality
 * @public
 */
export declare const monetization: Monetization;

/**
 * @public
 * A client for authorizing users with OAuth.
 */
export declare interface MultiAccountOauth {
    /**
     * @public
     * Starts an OAuth authorization flow.
     *
     * @param request - Options for configuring the authorization flow.
     *
     * @returns
     * The result of the authorization flow.
     *
     * @example Start an authorization flow
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth({ type: 'multi_account' });
     *
     * // Start an authorization flow
     * const response = await oauth.requestAuthorization();
     * ```
     *
     * @example Start an authorization flow with specific scopes
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth({ type: 'multi_account' });
     *
     * // Define the scopes to request
     * const scope = new Set(['PLACEHOLDER_SCOPE_1', 'PLACEHOLDER_SCOPE_2']);
     *
     * // Start an authorization flow with specific scopes
     * const response = await oauth.requestAuthorization({ scope });
     * ```
     *
     * @example Start an authorization flow with custom query parameters
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Define the query parameters to append to the URL of the request
     * const queryParams = new Map([['custom_param', 'custom_value']]);
     *
     * // Start an authorization flow with custom query parameters
     * const response = await oauth.requestAuthorization({ queryParams });
     * ```
     *
     * @example Handle the result of a authorization flow
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Start an authorization flow
     * const response = await oauth.requestAuthorization();
     *
     * if (response.status === 'completed') {
     *  // The user completed the authorization flow
     * }
     *
     * if(response.status === 'aborted') {
     *  // The user did not complete the authorization flow
     * }
     * ```
     */
    requestAuthorization<T extends Record<string, string>>(request?: AuthorizationRequest<T>): Promise<AuthorizationResponse>;
    getAccounts(): Promise<GetAccountsResponse>;
    getAccount(request: GetAccountRequest): Promise<GetAccountResponse>;
}

/**
 * @public
 * A client for authorizing users with OAuth.
 */
export declare interface Oauth {

    /**
     * @public
     * Starts an OAuth authorization flow.
     *
     * @param request - Options for configuring the authorization flow.
     *
     * @returns
     * The result of the authorization flow.
     *
     * @example Start an authorization flow
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Start an authorization flow
     * const response = await oauth.requestAuthorization();
     * ```
     *
     * @example Start an authorization flow with specific scopes
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Define the scopes to request
     * const scope = new Set(['PLACEHOLDER_SCOPE_1', 'PLACEHOLDER_SCOPE_2']);
     *
     * // Start an authorization flow with specific scopes
     * const response = await oauth.requestAuthorization({ scope });
     * ```
     *
     * @example Start an authorization flow with custom query parameters
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Define the query parameters to append to the URL of the request
     * const queryParams = new Map([['custom_param', 'custom_value']]);
     *
     * // Start an authorization flow with custom query parameters
     * const response = await oauth.requestAuthorization({ queryParams });
     * ```
     *
     * @example Handle the result of a authorization flow
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Start an authorization flow
     * const response = await oauth.requestAuthorization();
     *
     * if (response.status === 'completed') {
     *  // The user completed the authorization flow
     * }
     *
     * if(response.status === 'aborted') {
     *  // The user did not complete the authorization flow
     * }
     * ```
     */
    requestAuthorization<T extends Record<string, string>>(request?: AuthorizationRequest<T>): Promise<AuthorizationResponse>;
    /**
     * @public
     * Gets the access token and scopes for the current user.
     *
     * @param request - Options for requesting an access token for the current user.
     *
     * @returns
     * The access token and scopes for the current user, or `null` if the user isn't authorized.
     *
     * @remarks
     * - When a token expires, it's automatically refreshed by Canva.
     * - The token is cached by Canva, so the app's frontend shouldn't store the token.
     *
     * @example Get the access token of the current user
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Get an access token for the user
     * const token = await oauth.getAccessToken();
     * ```
     *
     * @example Check if the user is authorized
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Get an access token for the user
     * const token = await oauth.getAccessToken();
     *
     * if (token) {
     *  // The user is authorized
     * } else {
     *  // The user is not authorized
     * }
     * ```
     *
     * @example Forcefully refresh an access token
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Forcefully refresh an access token
     * const token = await oauth.getAccessToken({ forceRefresh: true });
     * ```
     */
    getAccessToken(request?: AccessTokenRequest): Promise<AccessTokenResponse>;
    /**
     * @public
     * Disconnects the user from the identity provider (IdP).
     *
     * @returns
     * An empty `Promise` that resolves once the user is disconnected from the IdP.
     *
     * @remarks
     * If token revocation is supported by the OAuth provider, the refresh and access tokens will be revoked.
     *
     * @example Disconnect an authorized user from the identity provider (IdP)
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth();
     *
     * // Disconnect the user from the IdP
     * await oauth.deauthorize();
     * ```
     */
    deauthorize(): Promise<void>;
}

/**
 * @public
 * A client for managing a single OAuth account.
 */
export declare type OauthAccount = {
    /**
     * The ID of the account.
     */
    id: string;
    /**
     * The principal of the account (e.g., email, username).
     */
    principal?: string;
    /**
     * The display name of the account.
     */
    displayName: string;
    /**
     * The avatar URL of the account.
     */
    avatarUrl?: string;
    /**
     * Whether the access token for the account has expired and there is no associated refresh token.
     */
    expired: boolean;

    /**
     * @public
     * Gets the access token and scopes for the current OAuth account.
     *
     * @param request - Options for requesting an access token for the current OAuth account.
     *
     * @returns
     * The access token and scopes for the current OAuth account, or `null` if the account isn't authorized.
     *
     * @remarks
     * - When a token expires, it's automatically refreshed by Canva.
     * - The token is cached by Canva, so the app's frontend shouldn't store the token.
     *
     * @example Get the access token of the current OAuth account
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth({ type: 'multi_account' });
     *
     * // Get the account
     * const account = await oauth.getAccount({ accountId: '123' });
     *
     * // Get an access token for the account
     * const token = await oauth.getAccessToken();
     * ```
     *
     * @example Check if the account is authorized
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth({ type: 'multi_account' });
     *
     * // Get an access token for the account
     * const account = await oauth.getAccount({ accountId: '123' });
     * const token = await account.getAccessToken();
     *
     * if (token) {
     *  // The account is authorized
     * } else {
     *  // The account is not authorized
     * }
     * ```
     *
     * @example Forcefully refresh an access token
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth({ type: 'multi_account' });
     *
     * // Get the account
     * const account = await oauth.getAccount({ accountId: '123' });
     *
     * // Forcefully refresh an access token
     * const token = await account.getAccessToken({ forceRefresh: true });
     * ```
     */
    getAccessToken(request?: AccessTokenRequest): Promise<AccessTokenResponse>;
    /**
     * @public
     * Deauthorizes the account.
     *
     * @returns
     * An empty `Promise` that resolves once the account is deauthorized.
     *
     * @example Deauthorize an authorized account
     * ```ts
     * import { auth } from "@canva/user";
     *
     * // Initialize an OAuth client
     * const oauth = auth.initOauth({ type: 'multi_account' });
     *
     * // Get the account
     * const account = await oauth.getAccount({ accountId: '123' });
     *
     * // Deauthorize the account
     * await account.deauthorize();
     * ```
     */
    deauthorize(): Promise<void>;
};

/**
 * An error that may occur during an OAuth authorization flow.
 * @public
 */
export declare const OauthError: typeof OauthErrorClass;

/**
 * @public
 * An error that may occur during an OAuth authorization flow.
 *
 * @example Handle OAuth errors
 * ```typescript
 * import { auth, OauthError } from '@canva/user';
 *
 * try {
 *   const oauth = auth.initOauth();
 *   const response = await oauth.requestAuthorization();
 * } catch (error) {
 *   if (error instanceof OauthError) {
 *     switch (error.oauthCode) {
 *       case 'access_denied':
 *         // User explicitly denied access during the authorization flow
 *         break;
 *       case 'bad_server_response':
 *         // OAuth server returned an invalid or malformed response
 *         break;
 *       case 'invalid_client':
 *         // Client credentials are invalid or missing during authentication
 *         break;
 *       case 'invalid_grant':
 *         // Authorization code or refresh token has expired or been revoked
 *         break;
 *       case 'invalid_request':
 *         // Request is missing required params or contains invalid values
 *         break;
 *       case 'invalid_scope':
 *         // One or more requested scopes are not valid for this client
 *         break;
 *       case 'other_error':
 *         // Unspecified error occurred during the OAuth flow
 *         break;
 *       case 'server_error':
 *         // OAuth server encountered an internal error processing the request
 *         break;
 *       case 'temporarily_unavailable':
 *         // OAuth server is down for maintenance or overloaded
 *         break;
 *       case 'unauthorized_client':
 *         // Client is not permitted to use this authorization method
 *         break;
 *       case 'unsupported_grant_type':
 *         // OAuth server doesn't support the requested grant type
 *         break;
 *       case 'unsupported_response_type':
 *         // OAuth server doesn't support the requested response type
 *         break;
 *       case 'unsupported_token_type':
 *         // OAuth server doesn't support the requested token type
 *         break;
 *       default:
 *         // An unexpected error occurred during the OAuth flow
 *         console.error(error.message);
 *     }
 *   }
 * }
 * ```
 */
declare class OauthErrorClass extends CanvaErrorClass {
    readonly oauthCode: OauthErrorCode;
    readonly uri: string | undefined;
    readonly rawMessage: string;
    constructor(oauthCode: OauthErrorCode, message: string | undefined, uri: string | undefined);
}

/**
 * @public
 * An error code that indicates why an error has occurred during an OAuth authorization flow.
 *
 * @remarks
 * The possible error codes include:
 *
 * - `"invalid_request"` - The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.
 * - `"access_denied"` - The resource owner or authorization server denied the request.
 * - `"unauthorized_client"` - The client is not authorized to request an authorization code using this method.
 * - `"invalid_client"` - Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method).
 * - `"invalid_scope"` - The requested scope is invalid, unknown, or malformed.
 * - `"invalid_grant"` - The provided authorization grant or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.
 * - `"unsupported_response_type"` - The authorization server does not support obtaining an authorization code using this method.
 * - `"unsupported_grant_type"` - The authorization grant type is not supported by the authorization server.
 * - `"unsupported_token_type"` - The authorization server does not support the requested token type.
 * - `"server_error"` - The authorization server encountered an unexpected condition that prevented it from fulfilling the request.
 * - `"temporarily_unavailable"` - The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server.
 * - `"bad_server_response"` - The authorization server returned an invalid response.
 * - `"other_error"` - An error occurred during the OAuth flow.
 */
export declare type OauthErrorCode = 'invalid_request' | 'access_denied' | 'unauthorized_client' | 'invalid_client' | 'invalid_scope' | 'invalid_grant' | 'unsupported_response_type' | 'unsupported_grant_type' | 'unsupported_token_type' | 'server_error' | 'temporarily_unavailable' | 'bad_server_response' | 'account_limit_reached' | 'other_error';

/**
 * @public
 * Options for starting or resuming a tracking session.
 * Either `action` or `id` must be specified, but not both.
 */
export declare type OpenTrackingSessionOptions = {
    action: BillableAction;
    id?: never;
} | {
    id: TrackingId;
    action?: never;
};

/**
 * @public
 * Unique identifier for tracking sessions associated with billable actions.
 */
export declare type TrackingId = string & {
    _trackingId: never;
};

/**
 * @public
 * Represents an active tracking session for a billable action.
 * Contains a unique session ID and a method to close the session.
 */
export declare type TrackingSession = {
    id: TrackingId;
    closeTrackingSession: () => Promise<void>;
};

/**
 * @public
 * A JSON Web Token (JWT) that contains information about the current user and their premium access.
 *
 * @remarks
 * This is a {@link CanvaUserToken} with an additional `experimentalPremiumAccess` claim.
 */
export declare type UserCapabilitiesToken = string & {
    _userCapabilitiesToken: never;
};

export { }
