import React, {Component} from 'react';
import ListItem from './ListItem';
import classNames from 'classnames';
import {ListProps} from './List.d';
import {ListContext} from "./ListContext";
import './style/index.less';



class List extends Component<ListProps> {
    public static Item = ListItem;

    protected static defaultProps = {
        prefixCls: 'coconut-list',
        size: 'md',
        loading: false,
        dataSource: [],
        /** 是否有hover动效 */
        hover: false
    };

    public render() {
        let {children, size, prefixCls, hover, loading} = this.props;
        const listCls = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-${size}`]: true,
            [`${prefixCls}-loading`]: loading
        })
        return <ListContext.Provider value={{
            size: size,
            hover: hover
        }}>
            <div className={listCls}>{children}</div>
        </ListContext.Provider>

    }
}


export default List;
