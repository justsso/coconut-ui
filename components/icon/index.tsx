import React from 'react';
import classNames from "classnames";
import './style/index.less';


interface IconProp {
    prefixCls: string,
    style?: React.CSSProperties,
    size?: 'large' | 'small' | 'middle',
    className?: string,
    rotate?: number, //旋转角度
    spin?: boolean //是否旋转
}

function Icon(props: IconProp) {

    const {size, rotate, spin, className, prefixCls, style} = props;
    const iconClassName = classNames('iconfont', className, prefixCls,
        {
            [`${prefixCls}-${size}`]: !!size,
            [`${prefixCls}-spin`]: spin
        }
    );


    return <span className={iconClassName}
                 style={Object.assign(style ? style : {}, {transform: `rotate(${rotate}deg)`})}/>
}

Icon.defaultProps = {
    prefixCls: 'coconut-icon',
    spin: false,
    rotate: 0
}

export default Icon;
