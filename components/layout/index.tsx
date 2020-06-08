import React, {ReactChild} from "react";
import classNames from "classnames";
import "./style/index.scss"

import Sider from "./sider";
import Header from "./header";
import Footer from "./footer";
import Container from "./container";

let prefix = 'coconut-ui';

interface LayoutPropInterface {
    children: ReactChild[]
}

function Layout(props: LayoutPropInterface) {
    let children = props.children

    let hasSider = false

    //查看children中有没有sider，如果有，那么layout-has-sider将生效
    let MyChildren = React.Children.map(children, ((child) => {
        if (child instanceof Sider) {
            hasSider = true
        }
        return child
    }))

    let layoutCls = classNames(`${prefix}-layout`, {
        [`${prefix}-layout-has-sider`]: hasSider
    })

    console.log(MyChildren, hasSider)

    return (
        <div className={layoutCls}>
            Layout
            {MyChildren}
        </div>
    )
}

Layout.Header = Header
Layout.Footer = Footer
Layout.Container = Container
Layout.Sider = Sider
export default Layout;
