/**
 * @description
 * @author justsso
 */

import React, {useEffect, useState} from 'react';
import {BasicProps} from "../@types/common";
import classNames from "classnames";
import {throttle} from "../utils";
import './style/index.less';


interface VirtualListProps extends BasicProps {
    /** 每个小项的高度 */
    itemSize: number,
    /** 要渲染的大数据 */
    data: any[],
    /** 容器固定高度  */
    containerHeight: number,
    /** 每一个小项的渲染函数 */
    renderItem: (item: any, key: number) => React.ReactNode,
    /** 触底操作 */
    onReachBottom?: () => void
}


const VirtualList: React.FC<VirtualListProps> = (props) => {
    const {prefixCls, data, containerHeight, itemSize, renderItem, onReachBottom} = props;

    let allHeight = data.length * itemSize
    const visibleCount = Math.ceil(containerHeight / itemSize)

    let [renderData, setRenderData] = useState<any[]>([])
    let [translateY, setTranslateY] = useState(0)

    useEffect(() => {
        //  初始渲染list
        setRenderData(data.slice(0, visibleCount + 1))
    }, [data.length])

    const ContainerCls = classNames(prefixCls)
    const PhantomCls = classNames(`${prefixCls}-infinite-list-phantom`)
    const ListCls = classNames({
        [`${prefixCls}-list`]: true
    })


    return (
        <div className={ContainerCls}
             style={{
                 height: containerHeight + 'px'
             }}

             onScroll={throttle(function (e) {
                 // 处理虚拟渲染
                 // 计算滚动的高度，=》开始渲染的index和最后的一个index，然后计算偏离px,设置transform:translate3D(0, y,0) y
                 let scrollTop = e.currentTarget.scrollTop; // 425
                 if((e.currentTarget.scrollHeight - scrollTop- containerHeight) < 200){
                     console.log('快到底了')
                     if (onReachBottom) {
                         onReachBottom()
                     }
                 }

                 console.log(scrollTop, e.currentTarget.scrollHeight, containerHeight)

                 let startIndex = Math.floor(scrollTop / itemSize) // 数据的起始索引
                 let endIndex = startIndex + visibleCount + 6;  // 多渲染半屏

                 console.log(startIndex, endIndex, 'startIndex, endIndex')
                 // setRenderData(data.slice(0,200))
                 setRenderData(data.slice(startIndex, endIndex))
                 // setRenderData(data.slice(startIndex,endIndex));

                 setTranslateY(startIndex * itemSize)

                 // setTranslateY(scrollTop - scrollTop % listItemHeight);
             }, 150)}>
            <div className={PhantomCls} style={{height: allHeight + 'px'}}/>
            <div className={ListCls} style={{
                transform: `translate3D(0,${translateY}px,0)`
            }}>
                {
                    renderData.map(renderItem)
                }
            </div>
        </div>
    )
}
VirtualList.defaultProps = {
    prefixCls: 'coconut-virtualList'
}

export default VirtualList
