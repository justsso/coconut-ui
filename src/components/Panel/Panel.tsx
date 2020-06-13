import React, {useEffect, useState} from "react";
import {Transition} from "react-transition-group";
import Icon from "../Icon";
import PropType from "prop-types";
import classNames from "classnames";
import {BasicProps} from "../@types/common";
import './style/index.less';

export interface PanelProp extends BasicProps {
    title?: string | React.ReactNode
    expanded?: boolean
    children?: React.ReactChildren
    prefixCls: string
    showArrow?: boolean
    onItemClick ?: (panelName: string | number) => {}
    name: string | number
}


const Panel: React.FC<PanelProp>  = props => {
    let {children, prefixCls, title, expanded, showArrow, onItemClick, name} = props
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
        console.log( expanded, 44)
        if (expanded) {
            onEnter()
            //展开 且 没有标题时，处理一下panelBody的borderTop
            if(title===undefined){
                onExited()
            }
        } else {
            onExit()
            onExited()
        }
    }, [expanded])

    //切换打开/关闭状态
    function toggleExpand() {
        onItemClick && onItemClick(name)
        // console.log('toggleExpand', expanedState)
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
        if (panelContent.current && panelBody.current) {
            panelBody.current.style.borderColor = '#d6d6d6';
            panelBody.current.style.height = H + 'px';
            setIconRotate(90)
        }
    }

    function onEntering() {

    }

    function onEntered() {

    }

    function onExit() {
        // console.log('onExit')
        if (panelContent.current && panelBody.current) {
            panelBody.current.style.height = 0 + 'px';
            setIconRotate(0)
        }
    }

    function onExiting() {
        // console.log('onExiting')

    }

    function onExited() {
        if (panelBody.current) {
            panelBody.current.style.borderColor = 'transparent'
        }

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
    showArrow: true,  //默认展示箭头
}

Panel.propTypes = {
    onItemClick: PropType.func
}

export default Panel
