import React from 'react';

export interface RowContextInterface {
    gutter ?: number
}

let RowContext = React.createContext({});

export default RowContext;
