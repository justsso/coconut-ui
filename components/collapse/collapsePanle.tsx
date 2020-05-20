import React, {ReactNode, useRef, useState} from "react";
import classNames from "classnames";
import './style/index.scss';
import Icon from "../icon";


interface CollapsePanleProp {
    prefixCls: string,
    title?: string | ReactNode,
    children?: ReactNode,
    disabled?: boolean
}

function CollapsePanle(props: CollapsePanleProp) {
    const {prefixCls, children, title} = props;

    let [showPanle, setShowPanle] = useState(true)
    // let [dom , setRealDom] = useState(null)
    // let [height, setHeight] = useState(0);

    const collapsePanleClassName = classNames(prefixCls, {})

    const collapsePanleBodyClassName = classNames({
        [`${prefixCls}-body`]: true,
        [`${prefixCls}-body-show`]: showPanle
    })

    const bodyRef = useRef<HTMLDivElement>(null)
    // let dom = React.createRef()
    console.log(bodyRef.current, 31)


    return (
        <div className={collapsePanleClassName}>
            <div className={`${prefixCls}-title`} onClick={() => {
                //因为要有动画效果，所以我们必须获取 body 的高度，利用ref 获取原生dom ，获取offsetHeight，然后修改height属性，利用css transition去做
                //默认情况下，不能在函数组件中使用ref属性，因为它们没有实例
                setShowPanle(!showPanle)
            }}>
                <span>
                    <Icon className={"icon icon-arrow_left"}/>
                </span>
                <span>
                    {title}
                </span>
            </div>

            <div className={collapsePanleBodyClassName} ref={bodyRef} style={{
                // height: showPanle ? `${height}px` : 0
            }} onClick={() => {
                if (bodyRef.current) {
                    console.log(bodyRef.current, 54)
                }
            }}>
                {children}
            </div>
        </div>
    )
}

CollapsePanle.defaultProps = {
    prefixCls: 'coconut-collapsePanle'
}
export default CollapsePanle;
