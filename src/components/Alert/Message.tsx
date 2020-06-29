/**
 * @description
 * @author justsso
 */

import React, {useEffect, useState} from 'react';
// import {NoticeType} from "./NoticeManager";
import classNames from "classnames";


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
    let {show, onClose, id, className, content, duration, type} = props;

    let [isShow, setShow] = useState(show)
    let baseClassName = className;


    useEffect(() => {
        let timer = setTimeout(() => {
            setShow(false)
            onClose?.(id)
        }, duration)

        return () => {
            clearTimeout(timer)
        }


    }, [])
    const cls = classNames({
        [`${baseClassName}-item-wrapper`]: true,
        [`${baseClassName}-${type}`]: true,
        [`${baseClassName}-show`]: isShow,
    })


    return (
        <div className={cls}>
            <div className={`${baseClassName}-item-content`}>
                <div className={`${baseClassName}-item-content-body`}>
                    {content}
                </div>
                <div
                    className={`${baseClassName}-item-content-close`}
                    onClick={() => {
                        if (onClose) {
                            onClose(id)
                        }
                    }}>x
                </div>
            </div>
        </div>
    )
}

export default Message;
