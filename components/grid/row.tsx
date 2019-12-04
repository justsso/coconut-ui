import React from 'react';
import * as PropTypes from "prop-types";


export type Gutter = number;

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: Gutter | [Gutter, Gutter],
    type?: 'flex',
    align?: string,
    justify?: string,
    prefixCls?: string
}

export interface RowState {

}

export default class Row extends React.Component<RowProps, RowState> {
    static defaultProps = {
        gutter: 0
    };
    static propTypes = {
        type: PropTypes.oneOf<'flex'>(['flex']),

    };

    render() {
        let {children} = this.props;
        return (
            <div className={'row'}>{children}</div>
        )
    }
}

