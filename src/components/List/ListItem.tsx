import React, {useContext} from 'react';
import {BasicProps} from '../@types/common';
import classNames from "classnames";
import {ListContext} from "./ListContext";

export interface ItemPropInterface extends BasicProps {
    children?: React.ReactNode;
    index?: number,
    draggable?: boolean,
}

const ListItem: React.FC<ItemPropInterface> = (props) => {
    let {children, prefixCls, style, className, index} = props;
    const Context = useContext(ListContext);
    let {size, hover = false} = Context


    const listItemCls = classNames({
        [`${prefixCls}`]: true,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-hover`]: hover,
        [`${className?.join(' ')}`]: className
    })

    return <div className={listItemCls} style={style} data-index={index} >{children}</div>;
};

ListItem.defaultProps = {
    prefixCls: 'coconut-list-item'
};

export default ListItem;
