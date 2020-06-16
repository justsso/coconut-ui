import React, { FC } from 'react';
import { BasicProps } from '../@types/common';
import classNames from 'classnames';

interface HeaderPropsInterface extends BasicProps {
    prefixCls?: string;
    children?: React.ReactNode;
}

const Header: FC<HeaderPropsInterface> = (props) => {
    let { prefixCls, children, className, style } = props;
    const clasps = classNames({
        [`${prefixCls}-layout-header`]: true,
        [`${className?.join(' ')}`]: className
    });
    return (
        <header className={clasps} style={style}>
            {children}
        </header>
    );
};

Header.defaultProps = {
    prefixCls: 'coconut-ui'
};

export default Header;
