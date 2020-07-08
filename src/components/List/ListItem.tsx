import React, {useContext} from 'react';
import {BasicProps} from '../@types/common';
import classNames from "classnames";
import {ListContext} from "./ListContext";

export interface ItemPropInterface extends BasicProps {
    children?: React.ReactNode;
    index?: number,
    draggable?: boolean,
    /** 排序完成后，依据的字段   */
    sortKey?: number | string
}

const ListItem: React.FC<ItemPropInterface> = (props) => {
    let {children, prefixCls, style, className, index, sortKey} = props;
    const Context = useContext(ListContext);
    let {
        size, hover = false, sortable,
        // dragIndex,
        handleDragEnd,
        handleDragEnter,
        setDragIndex,
        setEnterIndex
    } = Context;


    const listItemCls = classNames({
        [`${prefixCls}`]: true,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-hover`]: hover,
        [`${className?.join(' ')}`]: className
    })


    function dragStart(e: React.DragEvent<HTMLDivElement>) {
        setDragIndex(Number(e.currentTarget.dataset.index), sortKey)
    }

    function dragEnd() {
        handleDragEnd()
    }

    function dragEnter(e: React.DragEvent<HTMLDivElement>) {
        let enterIndex = Number(e.currentTarget.dataset.index);
        // if (enterIndex !== Context.dragIndex) {
        setEnterIndex(enterIndex, sortKey)
        // translate 变换, 其他的都归位，当前的移动
        handleDragEnter()
        // }
    }


    return <div
        className={listItemCls}
        draggable={sortable}
        style={style}
        data-index={index}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
        onDragEnter={dragEnter}
    >{children}</div>;
};

ListItem.defaultProps = {
    prefixCls: 'coconut-list-item'
};

export default ListItem;
