import React, {useState} from "react";
import classNames from "classnames";
import "./style/index.less"

import Sider from "./sider";
import Header from "./header";
import Footer from "./footer";
import Container from "./container";


interface LayoutPropInterface {
    prefixCls: string
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
    hasSider?: boolean
}

export let LayoutContext: React.Context<any> = React.createContext({})

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

Layout.Header = Header
Layout.Footer = Footer
Layout.Container = Container
Layout.Sider = Sider
export default Layout;
