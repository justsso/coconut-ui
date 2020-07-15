/**
 * @description
 * @author justsso
 */
import React, {useState} from 'react';
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

const Tooltip: React.FC<TooltipPropsInterface> = (props) => {
    let {content, prefixCls, trigger, children, position} = props
    let [visible, setVisible] = useState(false);

    const contentCls = classNames(`${prefixCls}-content`, {
        [position]: true
    })

    const triangleCls = classNames(`${prefixCls}-triangle`, {
        [positionMap.get(position)]: true
    })

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
                timeout={200}
                classNames='fade'
                unmountOnExit
            >
                <div className={contentCls}>
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
