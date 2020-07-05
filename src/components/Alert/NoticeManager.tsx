/**
 * @description
 * @author justsso
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Message from "./Message";
import {BasicProps} from "../@types/common";
import Transition from "react-transition-group/Transition";

const prefixCls = 'coconut-alert';

let id = 0;
const getUid = () => {
    id += 1;
    return `${Date.now()}-${id}`
}


export interface NoticeManagerProp extends BasicProps {
    duration?: number,
    getContainer?: () => HTMLElement
}

interface NoticeManagerState {
    notices: NoticeType[]
}


// 返回给调用者的实例
export interface InstanceType {
    component: any,
    push: (item: any) => void,
    remove: (key: string) => void,
    removeAll: () => void,
    destroy: () => void
}

// 每一条消息实例的类型
export interface NoticeType {
    show: boolean,
    key: string,
    className?: string,
    onClose?: (key?: string) => void,
    type: string,
    content: React.ReactNode | string,
    duration: number,
    closeable: boolean,
}

const timeout = 100;

// const defaultStyle = {
//     transition: `opacity ${timeout}ms ease-in-out`,
//     opacity: 0,
// }

const transitionStyles: transitionStyles = {
    entering: {opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%'},
    entered: {opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%'},
    exiting: {opacity: 0, transform: 'scaleY(0.8)', transformOrigin: '0% 0%'},
    exited: {opacity: 0, transform: 'scaleY(0.8)', transformOrigin: '0% 0%'},
};

interface transitionStyles {
    entering: React.CSSProperties,
    entered: React.CSSProperties,
    exiting: React.CSSProperties,
    exited: React.CSSProperties
}


class NoticeManager extends React.Component<NoticeManagerProp, NoticeManagerState> {

    public static getInstance(callback: (node: InstanceType) => void) {

        let wrap = document.createElement('div')
        let body = document.documentElement || document.body;
        wrap.className = `${prefixCls}-container`;
        body.appendChild(wrap)

        let called = false;

        function ref(node: NoticeManager) {
            if (called) {
                return
            }
            // 这里的node,就是真实的节点，可以使用NoticeManager的方法，方法其实在node的原型中
            const instance: InstanceType = {
                push(item) {
                    node.add(item)
                },
                remove(key: string) {
                    node.actualRemove(key)
                },
                removeAll() {
                    node.removeAll()
                },
                component: node,
                destroy() {
                    ReactDOM.unmountComponentAtNode(wrap)
                    body.removeChild(wrap)
                }
            }
            called = true
            callback(instance)
        }

        ReactDOM.render(<NoticeManager ref={ref}/>, wrap)
    }

    private constructor(props: NoticeManagerProp) {
        super(props);
        this.state = {
            notices: []
        }
    }

    add(item: NoticeType) {
        let {notices} = this.state;
        item.key = typeof item.key === "undefined" ? getUid() : item.key
        item.show = true
        console.log(item, 101)

        if (!notices.find(notice => notice.key === item.key)) {
            this.setState({
                notices: [...notices, item]
            }, () => {
                console.log(this.state.notices, 106)
            })
        }
    }

    remove(key?: string) {
        let {notices} = this.state;
        let Key = this.getKey(key)
        const NextNotices = notices.map(item => {
            if (item.key === Key) {
                item.show = false
            }
            return item
        })
        const callback = () => {
            setTimeout(() => {
                this.actualRemove(key)
            }, 1000)
        }
        this.setState({
            notices: NextNotices
        }, callback)
    }

    actualRemove(key?: string) {
        const Key = this.getKey(key);
        this.setState(preState => {
            return {
                notices: preState.notices.filter(item => {
                    return item.key !== Key
                })
            }
        })
    }


    getKey(key?: string) {
        const {notices} = this.state;
        let _key = key;
        if (typeof key === 'undefined' && notices.length) {
            _key = notices[notices.length - 1].key;
        }
        return _key;
    }

    removeAll() {
        let {notices} = this.state;
        this.setState({
            notices: notices.map(item => ({
                ...item, show: false
            }))
        }, () => {
            setTimeout(() => {
                const notices = this.state.notices.filter(notice => notice.show);
                this.setState({notices: notices});
            }, 1000);
        })
    }

    public render() {
        let {notices} = this.state;
        console.log(notices, 'render')
        let elements = notices.map((item, index) => {
            // Message 组件是真正的消息展示组件，有key 、show  onClose  ，key相当于id属性，当调用onClose时要回传key给父组件
            let {show, key, onClose, className, content, duration, closeable, type} = item;
            return (<Transition
                key={index}
                in={show}
                timeout={timeout}
            >
                {<T extends keyof transitionStyles>(state: T) => {
                    console.log(state, 201)
                    const transitionCls = `${prefixCls}-${state}`
                    return <Message
                        // style={{
                        //     ...defaultStyle,
                        //     ...transitionStyles[state]
                        // }}
                        baseClassName={className}
                        onClose={() => {
                            console.log('要关闭的key', key)
                            this.remove(key);
                            onClose?.()
                        }}
                        transitionClsName={transitionCls}
                        content={content}
                        duration={duration}
                        type={type}
                        closeable={closeable}
                    />
                }}
            </Transition>)
        })
        return elements
    }

    public componentWillUnmount() {
        console.log('NoticeManager-componentWillUnmount')
    }
}

export default NoticeManager;
