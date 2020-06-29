/**
 * @description
 * @author justsso
 */
import React from 'react';
import Alert from "./Alert";
import './style/index.less';

export interface AlertFunProp {
    text: string,
    duration?: number,
    onClose?: () => void
}

const alert = new Alert();


function close(key?: string) {
    alert.close(key)
}

function closeAll() {
    alert.closeAll()
}

export default {
    info: (content: React.ReactNode | string, duration?: number, onClose?: () => void) => {
        const type = 'info';
        alert.open(type, content, duration, onClose)
        return {
            close: close
        }
    },
    success: () => {

    },
    warn: () => {
    },
    error: () => {
    },
    close: close,
    closeAll: closeAll
}
