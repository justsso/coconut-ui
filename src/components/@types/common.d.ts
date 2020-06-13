import React from "react";
export interface BasicProps {
    prefixCls: string // css class类名前缀
    className ?: string //todo string 数组类型
    style?: React.CSSProperties // css 内联样式对象
    onChange?: (panelName: string | number) => void
}
