import * as React from 'react';
export const DropzoneContext = React.createContext(null);
export function useDropzoneContext() {
    return React.useContext(DropzoneContext);
}
