/**
 * @description
 * @author justsso
 */
import React, {useState, useRef, useEffect} from 'react';
import {BasicProps} from "../@types/common";
import {CSSTransition} from "react-transition-group";
import classNames from "classnames";
import './style/index.less';

interface TooltipPropsInterface extends BasicProps {
    content: string | React.ReactElement,
    trigger: 'hover' | 'focus' | 'click',
    position: 'top' | 'bottom' | 'right' | 'left',
}

const positionMap = new Map()
positionMap.set('top', 'bottom').set('left', 'right')
    .set('right', 'left').set('bottom', 'top')

const AnimationTime = 200;

const Tooltip: React.FC<TooltipPropsInterface> = (props) => {
    let {content, prefixCls, trigger, children, position} = props
    let [visible, setVisible] = useState(false);

    let childrenRef = useRef<HTMLDivElement>(null);
    let tooltipRef = useRef<HTMLDivElement>(null);

    const contentCls = classNames(`${prefixCls}-content`, {
        [position]: true
    })

    const triangleCls = classNames(`${prefixCls}-triangle`, {
        [positionMap.get(position)]: true
    })

    let tooltipContentStyle = {};

    useEffect(() => {
        let node = childrenRef.current;

        console.log('width: ', node?.clientWidth, 'height: ', node?.clientHeight)

    }, [])

    let getPosition = (node: HTMLDivElement | null) => {
        return [
            node?.clientWidth,
            node?.clientHeight
        ]
    }


    return (
        <div className={prefixCls} role='tooltip'>
            <div
                onMouseOver={() => {
                    trigger === 'hover' && setVisible(true)
                }}
                onMouseOut={() => {
                    trigger === 'hover' && setVisible(false)
                }}
                onClick={() => {
                    trigger === 'click' && setVisible(!visible)
                }}
                onFocus={() => {
                    trigger === 'focus' && setVisible(true)
                }}
                onBlur={() => {
                    setVisible(false)
                }}
            >
                {children}
            </div>
            <CSSTransition
                in={visible}
                timeout={AnimationTime}
                classNames='fade'
                unmountOnExit
                onEntered={(node, appearance) => {
                    console.log(node, appearance, 87)
                    // 动态计算tooltip的具体定位
                    let [w, h] = getPosition(tooltipRef.current)
                    let [containerW, containerH] = getPosition(tooltipRef.current)
                    console.log(w, h, containerW, containerH)


                }}
            >
                <div className={contentCls} style={tooltipContentStyle} ref={tooltipRef}>
                    <div className={triangleCls}/>
                    {content}
                </div>
            </CSSTransition>
        </div>
    )
}

Tooltip.defaultProps = {
    trigger: 'hover',
    position: 'right',
    prefixCls: 'coconut-tooltip'
}

export default Tooltip;
