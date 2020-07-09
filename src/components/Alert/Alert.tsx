/**
 * @description
 * @author justsso
 */
// 单例模式
import React from 'react';
import './style/index.less';
import NoticeManager, {InstanceType, NoticeManagerProp} from "./NoticeManager";
import {AlertType} from "./index";

const prefixCls = 'coconut';

class Alert {
    config = {
        duration: 2000,
        classPrefix: prefixCls + '-alert'
    }
    // _instance 属性，保存所有Alert的一个容器
    _instance: any = null

    getInstance(callback: (node: InstanceType) => void) {
        const props: NoticeManagerProp = {
            className: 'coconut-alert-container',
            classPrefix: this.config.classPrefix
        }
        NoticeManager.getInstance(props, callback)
    }

    open(type: AlertType, content: React.ReactNode | (() => React.ReactNode), duration?: number, onClose?: () => void) {
        let next_item = {
            type: type,
            content: content,
            duration: typeof duration !== "undefined" ? duration : this.config.duration,
            onClose: onClose,
            closeable: true,
            className: this.config.classPrefix   // 弹出的每一个小项的类名前缀
        }

        if (!this._instance) {
            // 需要往容器中传类名，好区分不同组件的样式
            this.getInstance((instance) => {
                this._instance = instance;
                this._instance.push(next_item);
            })
        } else {
            this._instance.push(next_item)
        }
    }

    close(key: string) {
        if (this._instance) {
            this._instance.remove(key)
        }
    }

    // 关闭所有的alert
    closeAll() {
        if (this._instance) {
            this._instance.removeAll()
        }
    }
}

export default Alert;
