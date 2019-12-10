import React from 'react';
import * as PropTypes from "prop-types";
import RowContext from "./RowContext";
import classNames from 'classnames';

import {tuple} from "../_util/type";

export type Gutter = number;
const RowAligns = tuple('top', 'middle', 'bottom', 'stretch');
const RowJustify = tuple('start', 'center', 'end', 'space-around', 'space-between');

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: number,
    type?: 'flex',
    align?: (typeof RowAligns)[number],
    justify?: (typeof RowJustify)[number],
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
        align: PropTypes.oneOf(RowAligns),
        justify: PropTypes.oneOf(RowJustify),
        className: PropTypes.string,
        children: PropTypes.node,
        gutter: PropTypes.number,
        prefixCls: PropTypes.string
    };

    static RowState = {};

    render() {
        let {
            type,
            justify,
            align,
            className,
            gutter,
            style,
            children,
            ...others
        } = this.props;

        const prefixCls = 'coconut-row';
        const classes = classNames({
            [prefixCls]: !type,
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${type}-${justify}`]: type && justify,
            [`${prefixCls}-${type}-${align}`]: type && align
        }, className);


        const rowStyle = {
            ...style
        };

        const otherProps = {...others};

        return (
            <RowContext.Provider value={{gutter: gutter}}>
                <div {...otherProps} className={classes} style={rowStyle}>
                    {children}
                </div>
            </RowContext.Provider>
        )
    }
}

