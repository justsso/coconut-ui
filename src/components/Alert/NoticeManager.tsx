/**
 * @description
 * @author justsso
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Message from "./Message";
import {BasicProps} from "../@types/common";

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
    notices: NoticeType[],
    show: boolean
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
    className?: string[],
    onClose?: (key?: string) => void,
    type: string,
    content: React.ReactNode | string,
    duration: number,
    closeable: boolean,
}


class NoticeManager extends React.Component<NoticeManagerProp, NoticeManagerState> {

    public static getInstance(callback: (node: InstanceType) => void) {

        let wrap = document.createElement('div')
        let body = document.documentElement || document.body;
        wrap.className = `${prefixCls}-container`;
        body.appendChild(wrap)

        function ref(node: any) {
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

            callback(instance)
        }

        ReactDOM.render(<NoticeManager ref={ref}/>, wrap)
    }

    private constructor(props: NoticeManagerProp) {
        super(props);
        this.state = {
            show: false,
            notices: []
        }
    }

    public add(item: NoticeType) {
        console.log('add')
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

    public actualRemove(key?: string) {
        let {notices} = this.state;

        notices = notices.filter((item) => {
            return item.key !== key
        })

        this.setState({notices: notices})
    }

    public removeAll() {
        this.setState({notices: []})
    }

    public render() {
        let {notices} = this.state;
        console.log(notices, 'render')
        let elements = notices.map((item, index) => {
            // Message 组件是真正的消息展示组件，有key 、show  onClose  ，key相当于id属性，当调用onClose时要回传key给父组件
            let {show, key, onClose, className, content, duration, closeable, type} = item;
            return <Message
                    key={index}
                    show={show}
                    onClose={(key) => {
                        console.log('要关闭的key', key)
                        this.actualRemove(key)
                        onClose?.()
                    }}
                    id={key}
                    className={className}
                    content={content}
                    duration={duration}
                    type={type}
                    closeable={closeable}
                />
        })
        return elements
    }

    public componentWillUnmount() {
        console.log('NoticeManager-componentWillUnmount')
    }
}

export default NoticeManager;
