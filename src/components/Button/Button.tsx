import React, {Component} from 'react';
import classes from 'classnames';
import './style/index.less';
import {Icon} from "../index";
import {BasicProps} from "../@types/common";


interface ButtonProps extends BasicProps{
    prefixCls: string,
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    size?: 'large' | 'small',
    disabled?: boolean,
    circle?: boolean,
    plain: boolean,
    loading: boolean,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

interface ButtonState {

}

class Button extends Component<ButtonProps, ButtonState> {
    static defaultProps = {
        prefixCls: 'coconut-button',
        size: '',
        disabled: false,
        type: 'primary',
        circle: false,
        plain: false,
        loading: false,
        className: [],
    };


    render() {
        const {prefixCls, loading, className, size, type, disabled, circle, plain, children, style} = this.props;
        const buttonClassName = classes({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-disable`]: disabled,
            [`${prefixCls}-circle`]: circle,
            [`${prefixCls}-plain`]: plain,
            [`${prefixCls}-loading`]: loading,
            [`${className?.join(' ')}`]: className
        });

        return (
            <button
                className={buttonClassName}
                style={style}
            >
                {
                    loading ? <Icon style={{marginRight: '.5rem'}} className={['icon-load']} spin /> : null
                }
                {children}
            </button>
        );
    }
}

export default Button;
