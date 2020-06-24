/**
 * @description
 * @author justsso
 */

import React, {useEffect, useState} from 'react';
import {BasicProps} from "../@types/common";
import classNames from "classnames";
import {throttle} from "../utils";
import './style/index.less';
import VirtualListItem from "./VirtualListItem";

interface VirtualListProps extends BasicProps {
    /** 每个小项的高度 */
    itemSize?: number,
    /** 要渲染的大数据 */
    data: any[],
    /** 容器固定高度  */
    containerHeight: number,
    /** 每一个小项的渲染函数 */
    renderItem: (item: any, key: number) => React.ReactNode,
    /** 触底操作 */
    onReachBottom?: () => void,
    /** 当列表项是动态高度时，列表项的预估高度 */
    estimatedItemSize?: number,
    /** 可视区的上方和下方渲染列表项个数  */
    bufferScale?: number
}

interface positionType {
    index: number,
    height: number,
    top: number,
    bottom: number
}

const VirtualList: React.FC<VirtualListProps> = (props) => {
    let {prefixCls, data, containerHeight, itemSize, renderItem, onReachBottom, estimatedItemSize, bufferScale = 3} = props;

    let [translateY, setTranslateY] = useState(0)

    const ContainerCls = classNames(prefixCls);
    const PhantomCls = classNames(`${prefixCls}-infinite-list-phantom`)
    const ListCls = classNames({
        [`${prefixCls}-list`]: true
    })
    const ListItemCls = classNames({
        [`${prefixCls}-list-item`]: true
    })

    if (!estimatedItemSize && itemSize) {
        let allHeight = data.length * itemSize
        const visibleCount = Math.ceil(containerHeight as number / itemSize)

        let [renderData, setRenderData] = useState<any[]>([])

        useEffect(() => {
            //  初始渲染list
            setRenderData(data.slice(0, visibleCount + bufferScale))
        }, [data.length])

        return (
            <div className={ContainerCls}
                 style={{
                     height: containerHeight + 'px'
                 }}

                 onScroll={throttle(function (e) {
                     // 处理虚拟渲染
                     // 计算滚动的高度，=》开始渲染的index和最后的一个index，然后计算偏离px,设置transform:translate3D(0, y,0) y

                     let scrollTop = e.currentTarget.scrollTop; // 425
                     let a = 200
                     if ((e.currentTarget.scrollHeight - scrollTop - containerHeight as number) < a) {
                         if (onReachBottom) {
                             onReachBottom()
                         }
                     }
                     if (itemSize) {
                         let startIndex = Math.floor(scrollTop / itemSize) // 数据的起始索引
                         let endIndex = startIndex + visibleCount + 6;  // 多渲染半屏
                         // setRenderData(data.slice(0,200))
                         setRenderData(data.slice(startIndex, endIndex))
                         // setRenderData(data.slice(startIndex,endIndex));

                         setTranslateY(startIndex * itemSize)
                     }
                     // setTranslateY(scrollTop - scrollTop % listItemHeight);
                 }, 150)}>
                <div className={PhantomCls} style={{height: allHeight + 'px'}}/>
                <div className={ListCls} style={{
                    transform: `translate3D(0,${translateY}px,0)`
                }}>
                    {
                        renderData.map((item, index) => {
                            return (<div className={ListItemCls} key={index}>{renderItem(item, index)}</div>)
                        })
                    }

                </div>
            </div>
        )
    } else if (estimatedItemSize && !itemSize) {
        const visibleCount = Math.ceil(containerHeight / estimatedItemSize)
        let [startIndex, setStartIndex] = useState(0)
        let [endIndex, setendIndex] = useState(visibleCount);
        let [renderData, setRenderData] = useState<any>([]);
        let positions: positionType[] = []
        let allHeight = 0;
        // 初识化渲染 位置
        if (estimatedItemSize) {
            for (let i = 0; i < data.length; i++) {
                positions.push({
                    index: i,
                    height: estimatedItemSize,
                    top: i * estimatedItemSize,
                    bottom: (i + 1) * estimatedItemSize
                })
            }
        }

        allHeight = positions[positions.length - 1].bottom
        useEffect(() => {

            setRenderData(data.slice(startIndex, endIndex + visibleCount))

        }, [data.length])


        // 每次滚动之后的操作
        useEffect(() => {
            function aboveCount() {
                return Math.min(startIndex, bufferScale * visibleCount)
            }

            function belowCount() {
                return Math.min(data.length - endIndex, bufferScale * visibleCount);
            }

            function visibleData() {
                let start = startIndex - aboveCount();
                let end = endIndex + belowCount();
                return data.slice(start, end);
            }


            let startOffset;
            if (startIndex >= 1) {
                let size = positions[startIndex].top - (positions[startIndex - aboveCount()] ? positions[startIndex - aboveCount()].top : 0);
                startOffset = positions[startIndex - 1].bottom - size;
            } else {
                startOffset = 0;
            }

            setTranslateY(startOffset)

            // 渲染可视区的数据
            setRenderData(visibleData())

        }, [startIndex])


        return (
            <div className={ContainerCls}
                 style={{
                     height: containerHeight + 'px'
                 }}

                 onScroll={throttle(function (e) {
                     // 处理虚拟渲染
                     // 计算滚动的高度，=》开始渲染的index和最后的一个index，然后计算偏离px,设置transform:translate3D(0, y,0) y

                     let scrollTop = e.currentTarget.scrollTop; // 425
                     let startIndex = getStartIndex(scrollTop, positions)
                     let endIndex = startIndex + visibleCount + 6;  // 多渲染半屏
                     setStartIndex(startIndex);
                     setendIndex(endIndex);
                     console.log(positions)
                     console.log(startIndex, endIndex, 'startIndex, endIndex');


                     if ((e.currentTarget.scrollHeight - scrollTop - containerHeight) < 200) {
                         if (onReachBottom) {
                             onReachBottom()
                         }
                     }


                 }, 150)}>
                <div className={PhantomCls} style={{height: allHeight + 'px'}}/>
                <div className={ListCls} style={{
                    transform: `translate3D(0,${translateY}px,0)`
                }}>

                    {
                        renderData.map((item: any, index: number) => {
                            return (
                                <VirtualListItem key={index} index={index} onCalculatePosition={(node, index) => {
                                    let rect = node.getBoundingClientRect();
                                    let height = rect.height;
                                    let oldHeight = positions[index].height;
                                    let dValue = oldHeight - height;
                                    // 存在差值
                                    if (dValue) {
                                        positions[index].bottom = positions[index].bottom - dValue;
                                        positions[index].height = height;
                                        for (let k = index + 1; k < positions.length; k++) {
                                            positions[k].top = positions[k - 1].bottom;
                                            positions[k].bottom = positions[k].bottom - dValue;
                                        }
                                    }
                                }}>
                                    {renderItem(item, index)}
                                </VirtualListItem>
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        throw new Error('estimatedItemSize和itemSize只能写一个')
    }
}

function getStartIndex(scrollTop: number, positions: positionType[]): number {
    return binarySearch(positions, scrollTop)
}

// 二分法查找
function binarySearch(list: positionType[], value: number): number {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = -1;
    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2);
        let midValue = list[midIndex].bottom;
        if (midValue === value) {
            return midIndex + 1;
        } else if (midValue < value) {
            start = midIndex + 1;
        } else if (midValue > value) {
            if (tempIndex === -1 || tempIndex > midIndex) {
                tempIndex = midIndex;
            }
            end = end - 1;
        }
    }
    return tempIndex;
}


VirtualList.defaultProps = {
    prefixCls: 'coconut-virtualList',
    bufferScale: 1
}

export default VirtualList
