import React, {ReactNode, useEffect, useRef, useState} from "react";
// import ReactDOM from "react-dom";
import {Transition} from "react-transition-group";
import classNames from "classnames";
import './style/index.scss';
import Icon from "../icon";
import {panelKey} from "./panel";

//active是外层父组件响应到的展开/关闭属性
//collapsePanel 组件内部的展示是根据hidden属性控制
interface CollapsePanelProp {
    prefixCls: string,
    title?: string | ReactNode,
    children?: ReactNode,
    active: boolean,
    onOpen?: (key: panelKey) => void,
    panel_key: number | string

}

function CollapsePanel(props: CollapsePanelProp) {
    const {prefixCls, children, title, active, onOpen, panel_key} = props;
    const duration = 500

    let [isActive, setActive] = useState(active) //设置初始化
    let [hidden, setHidden] = useState(!isActive)  //设置初始化
    let [panelHeight, setPanelHeight] = useState(-999)

    const bodyRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    //只会运行一次的
    useEffect(() => {
        console.log('useEffect useEffect useEffect useEffect')
        if (bodyRef.current) {
            console.log('~~~~', 'bodyRef.current.offsetHeight', bodyRef.current.offsetHeight, isActive
            )
            if (isActive) {
                // bodyRef.current.style.height = CollapsePanle.height + 'px'
                // CollapsePanle.height = bodyRef.current.offsetHeight //做缓存，优化
                setPanelHeight(bodyRef.current.offsetHeight)
                bodyRef.current.style.height = bodyRef.current.offsetHeight + 'px'
                // console.info(panelHeight + 'px')
                // CollapsePanel.height = bodyRef.current.offsetHeight

                console.log('存入缓存： panelHeight', panelHeight)
            } else {
                // bodyRef.current.style.height = '0px'
                console.log('存入缓存： panelHeight', '-999')
                setPanelHeight(-999)
                // CollapsePanle.height = -999
            }
        }
    }, [])

    //设置类名逻辑
    const collapsePanelClassName = classNames(prefixCls, {})

    const collapsePanelBodyClassName = classNames({
        [`${prefixCls}-body`]: true,
        [`${prefixCls}-body-active`]: !hidden,
        [`${prefixCls}-body-inactive`]: hidden
    })

    function toggleOpen() {
        setActive(!isActive)
        onOpen && onOpen(panel_key)
    }

    // function cacheHeight() {
    //     if (panelHeight !== -999) {
    //         console.log('缓存中的：CollapsePanle.height', panelHeight)
    //         return
    //     } else {
    //         if (bodyRef.current) {
    //             // bodyRef.current.style.height = CollapsePanle.height + 'px'
    //             bodyRef.current.style.display = 'block';
    //             setPanelHeight(bodyRef.current.offsetHeight)//做缓存，优化
    //             bodyRef.current.style.display = ''
    //             console.log('存入缓存： panelHeight', panelHeight)
    //         }
    //     }
    // }

    function onEnter() {
        console.log('onEnter')

        if (panelHeight !== -999) {
            //已经有缓存高度的，直接改变hidden，然后赋值panelHeight
            if (bodyRef.current) {
                bodyRef.current.style.display = 'block'
            }


        } else {
            //没有缓存高度的，先缓存高度，然后改变hidden,然后赋值panelHeight

            if (bodyRef.current) {
                // bodyRef.current.style.height = CollapsePanle.height + 'px'
                bodyRef.current.style.display = 'block';
                setPanelHeight(bodyRef.current.offsetHeight)//做缓存，优化
                // console.log('存入缓存： panelHeight', bodyRef.current.offsetHeight)
                bodyRef.current.style.height = '0px';
            }

        }
    }

    function onEntering() {
        console.log('onEntering')
        if (bodyRef.current) {
            console.log('查看缓存：panelHeight ', panelHeight)
            bodyRef.current.style.height = panelHeight + 'px'
        }
        setHidden(false)

    }

    function onEntered() {
        // if (bodyRef.current) {
        //     bodyRef.current.style.height = ''
        // }
        console.log('onEntered')
    }

    function onExit() {
        console.log('onExit')
        // cacheHeight()
        if (bodyRef.current) {
            bodyRef.current.style.height = '0px'
        }

    }

    function onExiting() {
        console.log('onExiting')

    }

    function onExited() {
        console.log('onExited')
        if (bodyRef.current) {
            bodyRef.current.style.height = '0px'
            setHidden(true)
        }

        // 如果props状态还是打开的
        // 调用回调，将状态同步给collapse组件
        // if (active) {
        //     onOpen && onOpen(panel_key, active);
        // }
    }


    return (

        <div className={collapsePanelClassName}>
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

            <Transition
                in={isActive} //in变为true，触发onEnter onEntering onEntered ;in变为false，触发onExit onExiting onExited
                timeout={duration}
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={onEntered}
                onExit={onExit}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div className={collapsePanelBodyClassName} ref={bodyRef}>
                    <div className={`${prefixCls}-collapse-body-content`}>
                        {children}
                    </div>
                </div>
            </Transition>
        </div>
    )
}

CollapsePanel.defaultProps = {
    prefixCls: 'coconut-collapsePanel'
}
CollapsePanel.height = 0
export default CollapsePanel;
