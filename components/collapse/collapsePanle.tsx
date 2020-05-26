import React, {ReactNode, useEffect, useRef, useState} from "react";
// import ReactDOM from "react-dom";
import {Transition} from "react-transition-group";
import classNames from "classnames";
import './style/index.scss';
import Icon from "../icon";
import {panelKey} from "./panel";

//active是外层父组件可以控制打开的属性
//collapsePanle组件内部的展示是根据hidden属性控制
interface CollapsePanleProp {
    prefixCls: string,
    title?: string | ReactNode,
    children?: ReactNode,
    disabled?: boolean,
    active: boolean,
    onOpen?: (key: panelKey, active: boolean) => void,
    panel_key: number | string

}

function CollapsePanle(props: CollapsePanleProp) {
    const {prefixCls, children, title, active} = props;
    const duration = 300

    let [isActive, setActive] = useState(active)
    let [hidden, setHidden] = useState(!isActive)
    let [panelHeight, setPanelHeight] = useState(-999)

    const bodyRef = useRef<HTMLDivElement>(null)

    //只会运行一次的
    useEffect(() => {
        console.log('useEffect useEffect useEffect useEffect')
        if (bodyRef.current) {
            if (isActive) {
                // bodyRef.current.style.height = CollapsePanle.height + 'px'
                // CollapsePanle.height = bodyRef.current.offsetHeight //做缓存，优化
                setPanelHeight(bodyRef.current.offsetHeight)
                bodyRef.current.style.height = panelHeight + 'px'
                console.info(panelHeight + 'px')

                console.log('存入缓存： CollapsePanle.height', CollapsePanle.height)
            } else {
                // bodyRef.current.style.height = '0px'
                console.log('存入缓存： CollapsePanle.height', '-999')
                setPanelHeight(-999)
                // CollapsePanle.height = -999
            }
        }
    }, [])

    //设置类名逻辑
    const collapsePanleClassName = classNames(prefixCls, {})

    const collapsePanleBodyClassName = classNames({
        [`${prefixCls}-body`]: true,
        [`${prefixCls}-body-active`]: !hidden,
        [`${prefixCls}-body-inactive`]: hidden
    })

    function toggleOpen() {
        setActive(!isActive)
    }

    function cacheHeight() {
        if (panelHeight !== -999) {
            console.log('缓存中的：CollapsePanle.height', panelHeight)
            return
        } else {
            if (bodyRef.current) {
                // bodyRef.current.style.height = CollapsePanle.height + 'px'
                bodyRef.current.style.display = 'block';
                setPanelHeight(bodyRef.current.offsetHeight)//做缓存，优化
                bodyRef.current.style.display = ''
                console.log('存入缓存： CollapsePanle.height', panelHeight)
            }
        }
    }

    function onEnter() {

        cacheHeight()
        setHidden(false)
        if (bodyRef.current) {
            bodyRef.current.style.height = '0px'
        }

    }

    function onEntering() {

    }

    function onEntered() {
        // if (bodyRef.current) {
        //     bodyRef.current.style.height = ''
        // }
        if (bodyRef.current) {
            bodyRef.current.style.height = panelHeight + 'px'
        }
    }

    function onExit() {
        cacheHeight()
        if (bodyRef.current) {
            bodyRef.current.style.height = panelHeight + 'px'
        }

    }

    function onExiting() {
        if (bodyRef.current) {
            bodyRef.current.style.height = '0px'
        }
    }

    function onExited() {

        if (bodyRef.current) {
            bodyRef.current.style.height = ''
            setHidden(true)
        }

        // 如果props状态还是打开的
        // 调用回调，将状态同步给collapse组件
        // if (active) {
        //     onOpen && onOpen(panel_key, active);
        // }
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

            <Transition
                in={isActive}
                timeout={duration}
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={onEntered}

                onExit={onExit}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div className={collapsePanleBodyClassName} ref={bodyRef}>
                    <div className={`${prefixCls}-collapse-body-content`}>
                        {children}
                    </div>
                </div>
            </Transition>
        </div>
    )
}

CollapsePanle.defaultProps = {
    prefixCls: 'coconut-collapsePanle'
}
CollapsePanle.height = 0
export default CollapsePanle;
