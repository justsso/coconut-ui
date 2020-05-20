import React, {ReactNode} from "react";
import classNames from "classnames";
import './style/index.scss';
import CollapsePanle from "./collapsePanle";

interface CollapseProp {
    prefixCls: string,
    children?: ReactNode
}

function Collapse(props: CollapseProp) {
    const {prefixCls, children} = props;
    const collapseClassName = classNames(prefixCls,{

    })
    return (
        <div>
            <div className={collapseClassName}>
                {children}
            </div>
        </div>
    )
}

Collapse.defaultProps = {
    prefixCls: 'coconut-collapse'
}
Collapse.Panle = CollapsePanle
export default Collapse;
