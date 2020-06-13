import React, {FC} from "react";
let prefix = 'coconut-ui';


interface HeaderPropsInterface {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
}

const Header: FC<HeaderPropsInterface> = props => {
    return (
        <header className={`${prefix}-layout-header`}>
            {props.children}
        </header>
    )
}
export default Header
