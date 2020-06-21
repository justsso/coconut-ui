/**
 * @description
 * @author justsso
 */

import React, {useEffect, useRef, useState} from 'react';
import './index.less';
import {throttle} from "../../src/components/utils";

const listItemCount = 10000;
const listItemHeight = 50;
const listContentHeight = 320;  // 可视区的高度


let Data: number[] = new Array(listItemCount)
for (let i = 0; i < Data.length; i++) {
    Data[i] = i
}

const VRDemo = () => {

    let listTopDiv = useRef<HTMLDivElement>(null)

    let [renderList, setRenderList] = useState<number[]>([])
    let [translateY, setTranslateY] = useState(0)
    const visibleCount = Math.ceil(listContentHeight / listItemHeight)

    useEffect(() => {
        // 计算容器总共需要高多少px
        let allHeight = listItemCount * listItemHeight
        // 如果listTopDiv没有渲染到页面中
        if (listTopDiv.current) {
            listTopDiv.current.style.height = allHeight + 'px'
        }

        //  初始渲染list
        setRenderList(Data.slice(0, visibleCount))
    }, [listItemCount])


    return (
        <div>
            虚拟渲染，适用场景大数据量渲染。分为两种：子组件是固定高度的，子组件不固定高度
            <ul>
                <li>子组件是固定高度的</li>
                <li>子组件不固定高度</li>
            </ul>

            思路：子组件固定高度
            可以计算出所有的子组件总共的高度，然后容器也是固定高度的，就可以清楚容器可以展示几个完整的组件，监听滚动事件，根据容器内滚动条的高度，计算出应该渲染出子组件的一个区间，
            这样每次一滚动就更新子组件，达到可视区更新。注意细节：利用容器的paddingTop和paddingBottom撑开容器。

            思路：子组件不固定高度
            子组件传入一个计算高度的函数，得到子组件的高度，然后缓存到一个数组中，监听滚动事件，根据容器内滚动条的高度，计算出应该渲染的子组件的

            <div>
                要产生真正的滚动高度，需要先计算出所有节点的总高度。然后弄在一个index:-1的定位元素上，撑开容器
            </div>


            <div className="container"
                 style={{
                     height: listContentHeight + 'px'
                 }}
                 onScroll={throttle(function (e: any) {
                // 处理虚拟渲染
                // 计算滚动的高度，=》开始渲染的index和最后的一个index，然后计算偏离px,设置transform:translate3D(0, y,0) y

                let scrollTop = e.currentTarget.scrollTop; // 425
                console.log(scrollTop)

                let startIndex = Math.floor(scrollTop / listItemHeight) // 数据的起始索引
                let endIndex = startIndex + visibleCount +6;
                console.log(startIndex, endIndex, 'startIndex, endIndex')
                setRenderList(Data.slice(startIndex,endIndex));


                setTranslateY( Math.floor( scrollTop / listItemHeight) * listItemHeight)



                // setTranslateY(scrollTop - scrollTop % listItemHeight);

            }, 150)}
            >
                <div className="listtop" ref={listTopDiv}/>
                <div className="content" style={{
                    transform: `translate3D(0,${translateY}px,0)`
                }}>
                    {
                        renderList.map((item, index) => {
                            return (
                                <div className='list_item' key={index}>{item}-{index}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default VRDemo
