/**
 * @description
 * @author justsso
 */
// 单例模式
import React from 'react';
import './style/index.less';
import NoticeManager from "./NoticeManager";

const prefixCls = 'coconut';

class Alert {

    config = {
        duration: 3000
    }

    // _instance 属性，保存所有Alert的一个容器
    _instance: any = null

    open(type: string, content: React.ReactNode | (() => React.ReactNode), duration?: number, onClose?: () => void) {

        let next_item = {
            type: type,
            content: content,
            duration: typeof duration !== "undefined" ? duration : this.config.duration,
            onClose: onClose,
            closeable: true,
            className: `${prefixCls}-alert`
        }

        if (!this._instance) {
            // 需要往容器中传类名，好区分不同组件的样式
            NoticeManager.getInstance((instance) => {
                this._instance = instance;
                this._instance.push(next_item)
            });
        } else {
            this._instance.push(next_item)
        }

    }

    public close(key?: string) {
        this._instance.remove(key)
    }

    // 关闭所有的alert
    public closeAll() {
        this._instance.removeAll()
    }
}

export default Alert;
