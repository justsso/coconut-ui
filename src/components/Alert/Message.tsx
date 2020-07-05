/**
 * @description
 * @author justsso
 */

import React from 'react';
// import {NoticeType} from "./NoticeManager";
import classNames from "classnames";
import {Icon} from "../index";
import {BasicProps} from "../@types/common";

interface MessageProps extends BasicProps {
    onClose: () => void,
    type: string,
    duration?: number,
    closeable: boolean,
    content: React.ReactNode | string,
    baseClassName?: string,
    transitionClsName?: string
}

class Message extends React.Component<MessageProps> {
    closeTimer: NodeJS.Timeout | null = null

    componentDidMount() {
        let {duration} = this.props;
        if (duration) {
            this.closeTimer = setTimeout(() => {
                this.close()
            }, duration)
        }
    }

    close() {
        this.clearCloseTimer()
        this.props.onClose()
    }

    clearCloseTimer() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }

    componentWillUnmount() {
        console.log('Message-componentWillUnmount', this.closeTimer)
        this.clearCloseTimer()
    }

    render() {
        let {content, type, closeable, style, transitionClsName, baseClassName} = this.props;
        const cls = classNames({
            [`${baseClassName}-item-wrapper`]: true,
            [`${transitionClsName}`]: true
        })
        const contentCls = classNames({
            [`${baseClassName}-item-content`]: true,
            [`${baseClassName}-item-content-${type}`]: true
        })
        return (
            <div className={cls} style={style}>
                <div className={contentCls}>
                    <div className={`${baseClassName}-item-content-body`}>
                        {content}
                    </div>
                    {closeable && <div
                        className={`${baseClassName}-item-content-close`}
                        onClick={() => {
                            this.close()
                        }}
                    >
                        <Icon className={['icon-close', `${baseClassName}-item-content-${type}-close`]} size='small'/>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Message;
