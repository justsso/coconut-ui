import React, {Component} from 'react';
import ListItem from './ListItem';
import classNames from 'classnames';
import {ListProps} from './List.d';
import {ListContext} from "./ListContext";
import './style/index.less';

interface ListState {
    renderData: any[],
    translateStyleArr: React.CSSProperties[]
}

interface DragData {
    dragIndex: number,
    enterIndex: number;
    dragKey?: number | string,
    enterKey?: number | string,
}


// TODO： 可排序，必须是dataSource传入的，默认排序按照index下标，如果直接硬编码<List.Item>则不会响应排序操作
//
class List extends Component<ListProps<any>, ListState> {

    public static Item = ListItem;

    protected static defaultProps = {
        prefixCls: 'coconut-list',
        size: 'md',
        loading: false,
        dataSource: [],
        /** 是否有hover动效 */
        hover: false,
        sortable: false,
    }
    public obj: DragData = {
        dragIndex: -1,
        enterIndex: -1
    }

    private constructor(props: ListProps<any>) {
        super(props);
        this.state = {
            renderData: props.dataSource || [],
            translateStyleArr: []
        }
        this.handleTranslateStyle = this.handleTranslateStyle.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }

    public componentDidMount() {
        let len = this.props.dataSource?.length || 0;
        this.initTransformStyleArr(len)
    }


    public handleTranslateStyle() {
        if (this.obj.enterIndex < this.obj.dragIndex) {
            let translateStyleArr = this.state.translateStyleArr;
            for (let i = 0; i < translateStyleArr.length; i++) {
                if(i>=this.obj.enterIndex&&i<this.obj.dragIndex){
                    translateStyleArr[i] = {transform: `translate(0, 100%)`, transitionDuration: '300ms'};
                }else{
                    translateStyleArr[i] = {transform: 'translate(0,0)', transitionDuration: '0ms'};
                }
            }
            this.setState({translateStyleArr: translateStyleArr})
        } else if (this.obj.enterIndex > this.obj.dragIndex) {
            let translateStyleArr = this.state.translateStyleArr;
            for (let i = 0; i < translateStyleArr.length; i++) {
                if(i>this.obj.dragIndex&&i<=this.obj.enterIndex){
                    translateStyleArr[i] = {transform: `translate(0, -100%)`, transitionDuration: '300ms'};
                }else{
                    translateStyleArr[i] = {transform: 'translate(0,0)', transitionDuration: '0ms'};
                }
            }
            this.setState({
                translateStyleArr: translateStyleArr
            })
        } else {
            // 是本元素，所有元素归位
            let translateStyleArr = this.state.translateStyleArr;
            for (let i = 0; i < translateStyleArr.length; i++) {
                translateStyleArr[i] = {transform: 'translate(0,0)', transitionDuration: '0ms'}
            }
            this.setState({
                translateStyleArr: translateStyleArr
            })
        }
    }

    public handleDragEnd() {
        let renderData = this.state.renderData;
        if (this.obj.dragIndex > this.obj.enterIndex) {
            let deleChild = renderData.splice(this.obj.dragIndex, 1)[0];
            renderData.splice(this.obj.enterIndex, 0, deleChild);

            this.setState({
                renderData: [...renderData]
            })

        } else if (this.obj.dragIndex < this.obj.enterIndex) {
            let delteChild = renderData.splice(this.obj.dragIndex, 1)[0]
            renderData.splice(this.obj.enterIndex, 0, delteChild)
            this.setState({
                renderData: [...renderData]
            })
        }
        let len = this.props.dataSource ? this.props.dataSource.length : 0;
        this.initTransformStyleArr(len)
        this.props.onSort?.(this.obj)
    }


    public render() {
        let {children, size, prefixCls, hover, loading, sortable = false, renderItem, sortKey} = this.props;
        let {renderData} = this.state;
        const listCls = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-loading`]: loading
        });

        // 要做排序的话，ListItem必须要有index，代表编号，内部实现


        return <ListContext.Provider value={{
            size: size,
            hover: hover,
            sortable: sortable,
            handleDragEnd: this.handleDragEnd,
            handleDragEnter: this.handleTranslateStyle,
            dragIndex: this.obj.dragIndex,
            enterIndex: this.obj.enterIndex,
            setDragIndex: (dragIndex: number): void => {
                console.log('开始拖动了', dragIndex);
                this.obj.dragIndex = dragIndex;
            },
            setEnterIndex: (enterIndex: number) => {
                console.log('开始进入了', enterIndex)
                this.obj.enterIndex = enterIndex
            }
        }}>
            <div className={listCls}>
                {
                    renderData.map((item, index) => {
                        return <ListItem key={index} index={index} sortKey={sortKey ? item[sortKey] : index}
                                         style={this.state.translateStyleArr[index]}>
                            {renderItem?.(item, index)}
                        </ListItem>
                    })
                }
                {children}
            </div>
        </ListContext.Provider>
    }

    protected initTransformStyleArr(len: number) {
        let translateStyleArr = []
        for (let i = 0; i < len; i++) {
            translateStyleArr.push({
                transform: 'translate(0,0)',
                transitionDuration: '0ms'
            })
        }
        this.setState({
            translateStyleArr: translateStyleArr
        })
    }

}


export default List;
