import React from 'react';

export interface RowContextInterface {
    gutter ?: number
}

let RowContext = React.createContext({
    gutter: 0
});

export default RowContext;
