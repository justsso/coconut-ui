import React from 'react';
import { BasicProps } from '../@types/common';

interface ListPropsInterface extends BasicProps {
    size?: 'small' | 'default' | 'large';
    footer?: string | React.ReactNode;
    header?: string | React.ReactNode;
    loading?: boolean;
    loadMore?: string | React.ReactNode;
    dataSource: any[];
    renderItem: (item: object) => React.ReactNode;
}

const List: React.FC<ListPropsInterface> = (props) => {
    let { children } = props;
    return <div>{children}</div>;
};

export default List;
