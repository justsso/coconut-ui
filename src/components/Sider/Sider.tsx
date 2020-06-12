import React, {useContext, useEffect} from "react";
import LayoutContext from "../Layout/LayoutContext";
import classNames from "classnames";

let prefix = 'coconut-ui';

interface SiderPropInterface {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
}

function Sider(prop: SiderPropInterface) {
    const Context = useContext(LayoutContext);
    let {style, className, children} = prop;

    useEffect(() => {
        Context.changeHasSider(true)
    }, [])

    let siderCls = classNames({
        [`${prefix}-layout-sider`]: true,
        className
    })

    return (
        <div className={siderCls} style={style}>
            {children}
        </div>
    )
}

export default Sider
