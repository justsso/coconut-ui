import React, { useState } from 'react';
import classNames from 'classnames';
import LayoutContext from './LayoutContext';
import './style/index.less';

import Sider from '../Sider';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';
import { BasicProps } from '../@types/common';

interface LayoutPropInterface extends BasicProps {
    children?: React.ReactNode;
}

function Layout(props: LayoutPropInterface) {
    let { prefixCls, children, className, style } = props;
    let [hasSiderState, setHasSider] = useState(false);

    function changeHasSider(hasSider: boolean) {
        setHasSider(hasSider);
    }

    // 查看children中有没有sider组件，如果有，那么layout-has-sider类名将生效

    let layoutCls = classNames(
        `${prefixCls}-layout`,
        {
            [`${prefixCls}-layout-has-sider`]: hasSiderState
        },
        className?.join(' ')
    );

    return (
        <LayoutContext.Provider
            value={{
                changeHasSider
            }}
        >
            <div className={layoutCls} style={style}>
                {children}
            </div>
        </LayoutContext.Provider>
    );
}

Layout.defaultProps = {
    prefixCls: 'coconut-ui'
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Container = Container;
Layout.Sider = Sider;
export default Layout;
