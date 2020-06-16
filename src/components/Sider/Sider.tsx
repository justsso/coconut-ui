import React, { FC, useContext, useEffect } from 'react';
import LayoutContext from '../Layout/LayoutContext';
import classNames from 'classnames';
import { BasicProps } from '../@types/common';

let prefix = 'coconut-ui';

interface SiderPropInterface extends BasicProps {
    children?: React.ReactNode;
}

const Sider: FC<SiderPropInterface> = (prop) => {
    const Context = useContext(LayoutContext);
    let { style, className, children } = prop;

    useEffect(() => {
        Context.changeHasSider(true);
    }, []);

    let siderCls = classNames(
        {
            [`${prefix}-layout-sider`]: true
        },
        className?.join(' ')
    );

    return (
        <div className={siderCls} style={style}>
            {children}
        </div>
    );
};

export default Sider;
