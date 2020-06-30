/**
 * @description
 * @author justsso
 */

import React, {useEffect, useState} from 'react';
// import {NoticeType} from "./NoticeManager";
import classNames from "classnames";
import {Icon} from "../index";


interface MessageProps {
    show: boolean,
    className?: string[],
    onClose?: (key?: string) => void,
    type: string,
    duration: number,
    closeable: boolean,
    content: React.ReactNode | string,
    id: string,
    key: number
}

const Message: React.FC<MessageProps> = (props) => {
    let {show, onClose, id, className, content, duration, type, closeable} = props;

    let [isShow, setShow] = useState(show)
    let baseClassName = className;


    useEffect(() => {
        if (duration !== 0) {
            let timer = setTimeout(() => {
                setShow(false)
                onClose?.(id)
            }, duration)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [duration])
    const cls = classNames({
        [`${baseClassName}-item-wrapper`]: true,
        [`${baseClassName}-not-show`]: !isShow,
    })
    const contentCls = classNames({
        [`${baseClassName}-item-content`]: true,
        [`${baseClassName}-item-content-${type}`]: true
    })


    return (
        <div className={cls}>
            <div className={contentCls}>
                <div className={`${baseClassName}-item-content-body`}>
                    {content}
                </div>
                {closeable && <div
                    className={`${baseClassName}-item-content-close`}
                    onClick={() => {
                        console.log('onClick', id)
                        setShow(false)
                        if (onClose) {
                            onClose(id)
                        }
                    }}
                >
                    <Icon className={['icon-close', `${baseClassName}-item-content-${type}-close`]} size='small'/>
                </div>}
            </div>
        </div>
    )
}

export default Message;
