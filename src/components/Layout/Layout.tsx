import React, {useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import LayoutContext from "./LayoutContext";
import "./style/index.less"

import Sider from "../Sider";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";

interface LayoutPropInterface {
    prefixCls: string
    children?:  React.ReactNode
    className?: string
    style?: React.CSSProperties
    hasSider?: boolean
}


function Layout(props: LayoutPropInterface) {
    let {prefixCls, children, hasSider, className, style} = props
    let [hasSiderState, setHasSider] = useState(hasSider || false)

    function changeHasSider(hasSider: boolean) {
        console.log('sider组件的值： ', hasSider)
        setHasSider(hasSider)
    }


    //查看children中有没有sider组件，如果有，那么layout-has-sider类名将生效

    let layoutCls = classNames(`${prefixCls}-layout`, {
        [`${prefixCls}-layout-has-sider`]: hasSiderState,
        className
    })

    return (
        <LayoutContext.Provider value={{
            changeHasSider
        }}>
            <div className={layoutCls} style={style}>
                {children}
            </div>
        </LayoutContext.Provider>
    )
}

Layout.defaultProps = {
    prefixCls: 'coconut-ui'
}

Layout.propTypes = {
    children: PropTypes.elementType
}

Layout.Header = Header
Layout.Footer = Footer
Layout.Container = Container
Layout.Sider = Sider
export default Layout;
