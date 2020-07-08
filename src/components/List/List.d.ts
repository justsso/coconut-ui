import React from 'react';
import ListItem from './ListItem';
import {BasicProps} from '../@types/common';

// 排序时的回调函数
export interface DragCallBack {
    dragIndex: number,
    enterIndex: number;
    dragKey?: number | string,
    enterKey?: number | string
}

export interface ListProps<T> extends BasicProps {
    /** Priary content */
    children?: React.ReactNode;
    /** List尺寸 */
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    loadMore?: string | React.ReactNode;
    /** 是否有hover动效 */
    hover?: boolean;
    /** 是否可排序 */
    sortable?: boolean;
    dataSource?: T[];
    renderItem?: (item: T, index: number) => {};
    onSort?: (obj: DragCallBack) => void;
    onSortStart?: (obj: DragCallBack) => void;
    onSortMove?: (obj: DragCallBack) => void;
    sortKey?: string|number
}

interface ListComponent extends React.ComponentClass<ListProps<any>> {
    Item: typeof ListItem;
}

declare const List: ListComponent;

export default List;
