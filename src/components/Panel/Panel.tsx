import React, {useEffect, useState} from "react";
import {Transition} from "react-transition-group";
import Icon from "../Icon";
import classNames from "classnames";
import {BasicProps} from "../@types/common";
import './style/index.less';

interface PanelProp extends BasicProps {
    title?: string | React.ReactNode
    expanded?: boolean
    children?: React.ReactChildren
    prefixCls: string
    showArrow?: boolean
}


function Panel(props: PanelProp) {
    let {children, prefixCls, title, expanded, showArrow} = props
    let [expanedState, setExpanedState] = useState(expanded);
    let initRotate = expanded ? 90 : 0;
    let [iconRotate, setIconRotate] = useState(initRotate);
    // let [open, setOpen] = useState(expanded); //是否执行动画
    const duration = 300

    let panelBody: React.RefObject<HTMLDivElement> = React.createRef();
    let panelContent: React.RefObject<HTMLDivElement> = React.createRef();
    const PanelClassName = classNames(prefixCls, {})
    const PanelTitleCls = classNames({
        [`${prefixCls}-title`]: true
    })
    const PanelBodyCls = classNames({
        [`${prefixCls}-body`]: true
    })

    const PanelContentCls = classNames({
        [`${prefixCls}-body-content`]: true
    })

    //只会执行一次，根据expaned prop设置panelBody的高度
    useEffect(() => {
        console.log('useEffect', expanded)
        if (expanded) {
            onEnter()
        } else {

            onExit()
        }
    }, [])

    //切换打开/关闭状态
    function toggleExpand() {
        console.log('toggleExpand', expanedState)
        if (expanedState) {
            setIconRotate(0)
        } else {
            setIconRotate(90)
        }
        setExpanedState(!expanedState)
    }

    //获取panelContent高度
    function getContentHeight() {
        return panelContent.current ? panelContent.current.offsetHeight : null
    }

    function onEnter() {
        let H = getContentHeight()
        console.log(H, '真正的高度')
        if (panelContent.current && panelBody.current) {
            panelBody.current.style.height = H + 'px';
            setIconRotate(90)
            console.log('setIconRotate 调用')
        }
    }

    function onEntering() {

    }

    function onEntered() {

    }

    function onExit() {
        console.log('onExit')
        if (panelContent.current && panelBody.current) {
            panelBody.current.style.height = 0 + 'px';
            setIconRotate(0)
        }
    }

    function onExiting() {
        console.log('onExiting')
    }

    function onExited() {
        console.log('onExited')

    }

    return (
        <div className={PanelClassName}>
            {title && <div className={PanelTitleCls} onClick={toggleExpand}>
                {showArrow && <Icon className={'icon-icon-test3'} size={20} rotate={iconRotate} style={{
                    transition: `all ${duration * 0.0008}s ease-in-out`
                }}/>}
                {title}
            </div>}

            <Transition
                in={expanedState} //in变为true，触发onEnter onEntering onEntered ;in变为false，触发onExit onExiting onExited
                timeout={duration}
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={onEntered}
                onExit={onExit}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div className={PanelBodyCls} ref={panelBody}>
                    <div className={PanelContentCls} ref={panelContent}>
                        {children}
                    </div>
                </div>
            </Transition>
        </div>
    )
}

Panel.defaultProps = {
    prefixCls: 'coconut-panel',
    expanded: true, //默认展开的
    showArrow: true  //默认展示箭头
}
export default Panel
