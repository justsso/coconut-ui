import React from "react";
let prefix = 'coconut-ui';


interface HeaderPropsInterface {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
}

function Header(props: HeaderPropsInterface){
    return (
        <header className={`${prefix}-layout-header`}>
            {props.children}
        </header>
    )
}
export default Header
