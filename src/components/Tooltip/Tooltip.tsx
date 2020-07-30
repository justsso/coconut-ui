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

const triangleWidth = 6;
const positionMap = new Map()
positionMap.set('top', 'bottom').set('left', 'right')
    .set('right', 'left').set('bottom', 'top')

const AnimationTime = 200;

const Tooltip: React.FC<TooltipPropsInterface> = (props) => {
    let {content, prefixCls, trigger, children, position} = props
    let [visible, setVisible] = useState(false);

    let childrenRef = useRef<HTMLDivElement>(null);
    let tooltipRef = useRef<HTMLDivElement>(null);

    let [tooltipContentStyle, setTooltipContentStyle] = useState({})

    const contentCls = classNames(`${prefixCls}-content`, {
        [position]: true
    })

    const triangleCls = classNames(`${prefixCls}-triangle`, {
        [positionMap.get(position)]: true
    })


    useEffect(() => {
        let node = childrenRef.current;

        console.log('width: ', node?.clientWidth, 'height: ', node?.clientHeight)

    }, [])

    let getPosition = (node: HTMLDivElement | null) => {
        return [
            node?.clientWidth || 0,
            node?.clientHeight || 0
        ]
    }


    return (
        <div className={prefixCls} role='tooltip'>
            <div
                ref={childrenRef}
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
                    if (trigger === 'focus') {
                        setVisible(false)
                    }
                }}
            >
                {children}
            </div>
            <CSSTransition
                in={visible}
                timeout={AnimationTime}
                classNames='fade'
                unmountOnExit
                onEntered={() => {
                    // 动态计算tooltip的具体定位
                    let [tooltipW, tooltipH] = getPosition(tooltipRef.current)
                    let [containerW, containerH] = getPosition(childrenRef.current)
                    switch (position) {
                        case "top":
                            // 设置tooltip主体的位置
                            setTooltipContentStyle({
                                top: `-${tooltipH + 2 * triangleWidth}px`,
                                left: `${(containerW - tooltipW) / 2}px`
                            })
                            // 设置三角箭头的位置

                            break;
                        case "bottom":
                            setTooltipContentStyle({
                                top: `${containerH + 2 * triangleWidth}px`,
                                left: `${(containerW - tooltipW) / 2}px`
                            })
                            break;
                        case "left":
                            setTooltipContentStyle({
                                left: `-${tooltipW + 2 * triangleWidth}px`,
                                top: `${(containerH - tooltipH) / 2}px`
                            })
                            break;
                        case "right":
                            setTooltipContentStyle({
                                left: `${containerW + 2 * triangleWidth}px`,
                                top: `${(containerH - tooltipH) / 2}px`
                            })
                            break;
                        default:
                            setTooltipContentStyle({
                                left: `${containerW}px`,
                                top: `${(containerH - tooltipH) / 2}px`
                            })
                    }

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
