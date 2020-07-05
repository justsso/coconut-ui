import React, { FC } from 'react';
import classNames from 'classnames';
import './style/index.less';
import { BasicProps } from '../@types/common';

interface IconProp extends BasicProps {
    size?: 'large' | 'small' | 'middle' | number;
    rotate?: number; // 旋转角度
    spin?: boolean; // 是否旋转
}

const Icon: FC<IconProp> = (props) => {
    const { size, rotate, spin, className, prefixCls, style } = props;
    const iconClassName = classNames(
        'iconfont',
        prefixCls,
        {
            [`${prefixCls}-${size}`]: typeof size !== 'number' && typeof size !== 'undefined',
            [`${prefixCls}-spin`]: spin
        },
        className?.join(' ')
    );

    return (
        <span
            className={iconClassName}
            style={({
                ...(style ? style : {}),
                transform: `rotate(${rotate}deg)`,
                ...(size
                    ? {
                          width: size + 'px',
                          height: size + 'px',
                          lineHeight: size + 'px'
                      }
                    : {})
            })}
        />
    );
};

Icon.defaultProps = {
    prefixCls: 'coconut-icon',
    spin: false,
    rotate: 0
};

export default Icon;
