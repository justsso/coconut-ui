import React from "react";
import classNames from "classnames";
import {BasicProps} from "../@types/common";

let prefix = 'coconut-ui';

interface Interface extends BasicProps {
    children?: React.ReactNode
}

function Footer(props: Interface) {
    let {children, className, style} = props
    let footerCls = classNames({
        [`${prefix}-layout-footer`]: true,
        className
    })
    return (
        <div className={footerCls} style={style}>
            {children}
        </div>
    )
}

export default Footer
