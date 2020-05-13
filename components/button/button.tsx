import * as React from 'react'
import './style/index.scss'
function Button(props: any) {
    return (
        <button style={{color: props.color}}>{props.children}</button>
    )
}

export default Button;
