import * as React from 'react';
export declare function useRefEffect<T>(effect: (value: T) => (() => void) | undefined): React.RefCallback<T>;
