import React from "react";
let prefix = 'coconut-ui';


interface HeaderPropsInterface {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
}

function Header(props: HeaderPropsInterface){
    return (
        <div className={`${prefix}-layout-header`}>
            {props.children}
        </div>
    )
}
export default Header
