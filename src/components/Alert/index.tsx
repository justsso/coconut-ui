/**
 * @description
 * @author justsso
 */
import React from 'react';
import Alert from "./Alert";
import './style/index.less';
import {Icon} from "../index";

export type AlertType = 'info' | 'success' | 'warn' | 'error';
export const AlertIconColor = {
    info: '#4796ec',
    success: '#67a45b',
    warn: '#f5b3bf',
    error: '#e15241'
}

export interface AlertFunProp {
    text: string,
    duration?: number,
    onClose?: () => void
}

const alert = new Alert();


function close(key: string) {
    alert.close(key)
}

function closeAll() {
    alert.closeAll()
}

function addIcon(type: AlertType, content: React.ReactElement | string) {
    return (<div>
        <Icon className={[`icon-${type}_filled`]} size='small' rotate={0} style={{
            color: AlertIconColor[type],
            paddingRight: '4px',
            fontSize: '14px',
        }}/>
        {content}
    </div>)
}

// 包装函数
function proxy(type: AlertType) {
    return (content: React.ReactElement | string, duration?: number, onClose?: () => void) => {
        alert.open(type, addIcon(type, content), duration, onClose)
        return {
            close: close
        }
    }
}


export default {
    info: proxy('info'),
    success: proxy('success'),
    warn: proxy('warn'),
    error: proxy('error'),
    close: close,
    closeAll: closeAll
}
