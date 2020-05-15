import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import './style/index.scss';

interface ButtonProps{
    prefixCls: string,
    type: string,
    size: string,
    disabled: boolean,
    circle: boolean,
    fill: boolean,
    loading: boolean,
    className: string,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

interface ButtonState {

}

class Button extends Component<ButtonProps, ButtonState> {
    static defaultProps = {
        prefixCls: 'coconut-button',
        size: 'default',
        disabled: false,
        type: 'primary',
        circle: false,
        fill: false,
        loading: false,
        className: '',
    };
    static propTypes = {
        size: propTypes.oneOf(['small', 'large', 'default']),
        type: propTypes.oneOf(['primary', 'success', 'normal', 'danger']),
        disabled: propTypes.bool,
        circle: propTypes.bool,
        fill: propTypes.bool,
        onClick: propTypes.func,
        icon: propTypes.string,
        loading: propTypes.bool,
        className: propTypes.string,
    };


    render() {
        const props = this.props;
        const {prefixCls} = this.props;
        const buttonClassName = className({
            [prefixCls]: true,
            [`${prefixCls}--${props.type}`]: true,
            [`${prefixCls}--${props.size}`]: true,
            [`${prefixCls}--disable`]: props.disabled,
            [`${prefixCls}--circle`]: props.circle,
            [`${prefixCls}--fill`]: props.fill,
            [`${prefixCls}--loading`]: props.loading,
            [props.className]: true
        });

        return (
            <button
                className={buttonClassName}
            >
                {
                    props.loading ? ('loding') : null
                }
                {this.props.children}
            </button>
        );
    }
}

export default Button;
