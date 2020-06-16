import React, { FC } from 'react';
import classNames from 'classnames';
import { BasicProps } from '../@types/common';

interface Interface extends BasicProps {
    children?: React.ReactNode;
}

const Footer: FC<Interface> = (props) => {
    let { children, className, style, prefixCls } = props;
    let footerCls = classNames({
        [`${prefixCls}-layout-footer`]: true,
        [`${className?.join(' ')}`]: className
    });
    return (
        <div className={footerCls} style={style}>
            {children}
        </div>
    );
};
Footer.defaultProps = {
    prefixCls: 'coconut-ui'
};

export default Footer;
