import React from 'react';
import ListItem from './ListItem';
import { BasicProps } from '../@types/common';

export interface ListProps extends BasicProps {
    /** Priary content */
    children?: React.ReactNode;

    /** List尺寸 */
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    loadMore?: string | React.ReactNode;
    /** 是否有hover动效 */
    hover?: boolean;
}

interface ListComponent extends React.ComponentClass<ListProps> {
    Item: typeof ListItem;
}

declare const List: ListComponent;

export default List;
