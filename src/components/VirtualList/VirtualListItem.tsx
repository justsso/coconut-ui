/**
 * @description
 * @author justsso
 */
import React, {useEffect, useRef} from 'react';
import classNames from "classnames";
import {BasicProps} from "../@types/common";

interface VirtualListItemProps extends BasicProps{
    onCalculatePosition: (node: HTMLDivElement, index: number ) => void
    index: number,
    children: React.ReactNode,
    key: number
}

const VirtualListItem: React.FC<VirtualListItemProps> = (props) => {
    let {prefixCls, children, index, onCalculatePosition} = props
    const ListItemCls = classNames({
        [`${prefixCls}-list-item`]: true
    })
    const itemRef = useRef<HTMLDivElement>(null)

    // 渲染后缓存位置
    useEffect(() => {
        if(!itemRef.current) return
        onCalculatePosition(itemRef.current, index)
    }, [])

    return (
        <div className={ListItemCls} ref={itemRef} >{children}</div>
    )
}
VirtualListItem.defaultProps = {
    prefixCls: 'coconut-virtual'
}
export default VirtualListItem;
