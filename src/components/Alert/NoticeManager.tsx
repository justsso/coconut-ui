/**
 * @description
 * @author justsso
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Message from "./Message";
import classNames from "classnames";

let id = 0;
const getUid = () => {
    id += 1;
    return `notification-${Date.now()}-${id}`
}


export interface NoticeManagerProp {
    duration?: number,
    getContainer?: () => HTMLElement,
    className?: string,
    style?: React.CSSProperties,
    classPrefix?: string
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


export interface transitionStyles {
    entering: React.CSSProperties,
    entered: React.CSSProperties,
    exiting: React.CSSProperties,
    exited: React.CSSProperties
}


class NoticeManager extends React.Component<NoticeManagerProp, NoticeManagerState> {

     static getInstance( props: NoticeManagerProp ,  callback: (node: InstanceType) => void) {

        let wrap = document.createElement('div')
        let body = document.documentElement || document.body; //  因为这是一个复用的全局弹出窗，所以类名应该由调用者传入
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

        ReactDOM.render(<NoticeManager {... props} ref={ref}/>, wrap)
    }

    private constructor(props: NoticeManagerProp) {
        super(props);
        this.state = {
            notices: []
        }
        this.add = this.add.bind(this);
        this.getKey = this.getKey.bind(this);
        this.remove = this.remove.bind(this);
        this.actualRemove = this.actualRemove.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    add(item: NoticeType) {
        let {notices} = this.state;
        item.key = typeof item.key === "undefined" ? getUid() : item.key
        item.show = true
        console.log(item, 101)

        if (!notices.find(notice => notice.key === item.key)) {
            this.setState({
                notices: [...notices, item]
            })
        }
    }

    getKey(key?: string): string {
        const {notices} = this.state;
        let _key = key || '';
        if (typeof key === 'undefined' && notices.length) {
            _key = notices[notices.length - 1].key;
        }
        return _key;
    }

    remove(key?: string) {
        const {notices} = this.state;
        let Key = this.getKey(key)
        const NextNotices = notices.map(item => {
            if (item.key === Key) {
                item.show = false
            }
            return item
        })

        this.setState({
            notices: NextNotices
        })
    }

    actualRemove(key: string) {
         console.log('执行 actualRemove', key)
        // const Key = this.getKey(key);
        // this.setState(preState => {
        //     return {
        //         notices: preState.notices.filter(item => item.key !== Key)
        //     }
        // })
        const findIndexByKey = (key: string) : number=> {
            let findIndex = -1;
            for (let i = 0; i < this.state.notices.length; i++) {
                if(this.state.notices[i].key === key){
                    findIndex = i
                }
            }
            return findIndex;
        };

        const index = findIndexByKey(key);
        this.setState(preState => {
            return {
                notices: preState.notices.splice(index, 1)
            }
        })
    }

    removeAll() {
        const {notices} = this.state;
        this.setState({
            notices: notices.map(item => ({
                ...item,
                show: false
            }))
        },
            () => {
            setTimeout(() => {
                const notices = this.state.notices.filter(notice => notice.show);
                this.setState({notices: notices});
            }, 1000);
        })
    }

    render() {
        let {notices} = this.state;
        const {className, classPrefix, style} = this.props;
        const elements = notices.map((item, index) => {
            // Message 组件是真正的消息展示组件，有key 、show  onClose  ，key相当于id属性，当调用onClose时要回传key给父组件
            const { key, onClose, className, content, duration, closeable, type} = item;
            return (
                    <Message
                        key={index}
                        id={key}
                        baseClassName={className}
                        onClose={() => {
                            onClose?.()
                        }}
                        content={content}
                        duration={duration}
                        type={type}
                        closeable={closeable}
                        remove={() => this.actualRemove(key)}
                    />
        )
        })

        const classes = classNames(classPrefix, className);
        return (
            <div className={classes} style={style}>
                {elements}
            </div>
        )
    }
}

export default NoticeManager;
