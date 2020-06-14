import React, {FC} from "react";
import classNames from "classnames";
import {BasicProps} from "../@types/common";


interface ContainerPropInterface extends BasicProps {
    children?: React.ReactNode
}


const Container: FC<ContainerPropInterface> = (props) => {
    let {children, className, style,prefixCls} = props


    let containerCls = classNames({
        [`${prefixCls}-layout-container`]: true,
        [`${className?.join(' ')}`]: className

    })

    return (
        <div className={containerCls} style={style}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    prefixCls: 'coconut-ui'
}

export default Container
