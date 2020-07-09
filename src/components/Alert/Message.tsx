/**
 * @description
 * @author justsso
 */

import React from 'react';
// import {NoticeType} from "./NoticeManager";
import classNames from "classnames";
import {Icon} from "../index";
import {BasicProps} from "../@types/common";
import Transition from "react-transition-group/Transition";
import {transitionStyles} from "./NoticeManager";

const timeout = 300;

interface MessageProps extends BasicProps {
    onClose: () => void,
    type: string,
    duration?: number,
    closeable: boolean,
    content: React.ReactNode | string,
    baseClassName?: string,
    transitionClsName?: string
    remove: (id: string) => void,
    id: string
}

class Message extends React.Component<MessageProps> {
    closeTimer: NodeJS.Timeout | null = null
    state = {
        show: true
    }

    constructor(props: MessageProps) {
        super(props);
        this.close = this.close.bind(this);

    }

    componentDidMount() {
        let {duration} = this.props;
        if (duration) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, duration);
        }
    }

    componentWillUnmount() {
        console.log('Message-componentWillUnmount', this.closeTimer)
        this.clearCloseTimer()
    }


    clearCloseTimer() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }

    close(){
        this.setState({
            show: false
        })

        this.clearCloseTimer();
        this.props.onClose();
    }

    render() {
        let {content, type, closeable, style,  baseClassName, id} = this.props;
        const {show} = this.state;

        const contentCls = classNames({
            [`${baseClassName}-item-content`]: true,
            [`${baseClassName}-item-content-${type}`]: true
        })
        return (
            <Transition
                in={show}
                timeout={timeout}
                onExited={() => this.props.remove(id)}
            >
                {<T extends keyof transitionStyles>(state: T) => {
                    const transitionCls = `${baseClassName}-${state}`;
                    const cls = classNames({
                        [`${baseClassName}-item-wrapper`]: true,
                        [`${transitionCls}`]: true
                    })
                    return <div className={cls} style={style}>
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
                                <Icon className={['icon-close', `${baseClassName}-item-content-${type}-close`]}
                                      size='small'/>
                            </div>}
                        </div>
                    </div>
                }}
            </Transition>
        )
    }
}

export default Message;
