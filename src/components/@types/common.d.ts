import React from 'react';
export interface BasicProps {
    prefixCls?: string; // css class类名前缀
    /** 自定义类名，数组   */
    className?: string[]; //
    style?: React.CSSProperties; // css 内联样式对象
    // onChange?: (panelName: string | number) => void
}
