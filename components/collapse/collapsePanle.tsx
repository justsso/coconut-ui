import React, {ReactNode, useEffect, useRef, useState} from "react";
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

    let [isActive, setActive] = useState(false)
    // let [conHeight, setConHeight] = useState(0);

    const bodyRef = useRef<HTMLDivElement>(null)

    //只会运行一次的
    useEffect(() => {
        if (bodyRef.current) {
            CollapsePanle.height = bodyRef.current.offsetHeight
            console.log(CollapsePanle.height, 'CollapsePanle.height')

            if (isActive) {
                bodyRef.current.style.display = 'block'
                bodyRef.current.style.height = CollapsePanle.height + 'px'
            } else {
                bodyRef.current.style.height = '0px'
                // bodyRef.current.style.display = 'none'
            }
        }
    }, [])

    //设置类名逻辑
    const collapsePanleClassName = classNames(prefixCls, {})

    const collapsePanleBodyClassName = classNames({
        [`${prefixCls}-body`]: true,
        // [`${prefixCls}-body-active`]: isActive,
        // [`${prefixCls}-body-inactive`]: !isActive
    })

    function toggleOpen() {
        if (isActive) {
            if (bodyRef.current) {
                CollapsePanle.height = bodyRef.current.offsetHeight;
                bodyRef.current.style.height = '0px'
                setActive(!isActive)
                // setTimeout((dom) => {
                //     dom.style.display = 'none'
                // }, 500, bodyRef.current)
            }

        } else {
            if (bodyRef.current) {
                // setTimeout((dom) => {
                //     console.log(dom, 'bodyRef.current')
                //     console.log(dom.offsetHeight, 'innerHeight')
                // }, 1000, bodyRef.current)
                bodyRef.current.style.display = 'block'
                bodyRef.current.style.height = CollapsePanle.height + 'px'
                setActive(!isActive)
            }
        }


    }


    return (
        <div className={collapsePanleClassName}>
            <div className={`${prefixCls}-title`} onClick={() => {
                //因为要有动画效果，所以我们必须获取 body 的高度，利用ref 获取原生dom ，获取offsetHeight，然后修改height属性，利用css transition去做
                //默认情况下，不能在函数组件中使用ref属性，因为它们没有实例

                //先设置display，再缓动效果
                toggleOpen()
            }}>
                <span>
                    <Icon className={"icon icon-arrow_left"}/>
                </span>
                <span>
                    {title}
                </span>
            </div>

            <div className={collapsePanleBodyClassName} ref={bodyRef}>
                {children}
            </div>
        </div>
    )
}

CollapsePanle.defaultProps = {
    prefixCls: 'coconut-collapsePanle'
}
CollapsePanle.height = 0
export default CollapsePanle;
