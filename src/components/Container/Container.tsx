import React, {FC} from "react";
import classNames from "classnames";
import {BasicProps} from "../@types/common";

let prefix = 'coconut-ui';

interface ContainerPropInterface extends BasicProps {
    children?: React.ReactNode
}


const Container: FC<ContainerPropInterface> = (props) => {
    let {children, className, style} = props


    let containerCls = classNames({
        [`${prefix}-layout-container`]: true,
        className
    })

    return (
        <div className={containerCls} style={style}>
            {children}
        </div>
    )
}

export default Container
