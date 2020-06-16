import classnames from 'classnames';
import * as React from 'react';
import { BasicProps } from '../@types/common';

export interface WhiteSpaceProps extends BasicProps {
    prefixCls?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    protected static defaultProps = {
        prefixCls: 'am-whitespace',
        size: 'md'
    };

    public render() {
        const { prefixCls, size, className, style, onClick } = this.props;

        const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className?.join(' '));

        return <div className={wrapCls} style={style} onClick={onClick} />;
    }
}
