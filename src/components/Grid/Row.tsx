import React from 'react';
import * as PropTypes from 'prop-types';
import RowContext from './RowContext';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import './style/index.less';
import { BasicProps } from '../@types/common';

export type Gutter = number;
const RowAligns = tuple('top', 'middle', 'bottom', 'stretch');
const RowJustify = tuple('start', 'center', 'end', 'space-around', 'space-between');

export interface RowProps extends BasicProps {
    gutter?: number;
    type?: string;
    align?: typeof RowAligns[number];
    justify?: typeof RowJustify[number];
}

export default class Row extends React.Component<RowProps> {
    protected static defaultProps = {
        gutter: 0
    };
    protected static propTypes = {
        type: PropTypes.oneOf<'flex'>(['flex']),
        align: PropTypes.oneOf(RowAligns),
        justify: PropTypes.oneOf(RowJustify),
        children: PropTypes.node,
        gutter: PropTypes.number,
        prefixCls: PropTypes.string
    };

    protected static RowState = {};

    public render() {
        let { type, justify, align, className, gutter, style, children, ...others } = this.props;

        const prefixCls = 'coconut-row';
        const classes = classNames(
            {
                [prefixCls]: !type,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-${type}-${justify}`]: type && justify,
                [`${prefixCls}-${type}-${align}`]: type && align
            },
            className?.join(' ')
        );

        const rowStyle = {
            ...style
        };

        const otherProps = { ...others };

        return (
            <RowContext.Provider value={{ gutter: gutter || 0 }}>
                <div {...otherProps} className={classes} style={rowStyle}>
                    {children}
                </div>
            </RowContext.Provider>
        );
    }
}
