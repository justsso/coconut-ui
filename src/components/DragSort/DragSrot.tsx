/**
 * @description
 * @author justsso
 */
import React from 'react';


interface DragSortProps<T> {
    data: T[],
    renderItem: (item: T, index: number) => React.ReactNode
}

const DragSort: React.FC<DragSortProps<any>> = (props) => {
    let {data, renderItem} = props;
    let renderData = data;
    let dragObj: HTMLDivElement;
    let enterObj: HTMLDivElement;
    let dragIndex: number;
    let enterIndex: number;


    function dragStart(e: React.DragEvent<HTMLDivElement>) {
        console.log('dragStart')
        dragObj = e.currentTarget;
        dragIndex = Number(e.currentTarget.dataset.index);
    }

    function dragEnd() {
        // e.persist()
        console.log('dragEnd');
        console.log(dragObj, dragIndex, enterObj, enterIndex);
    }

    function dragEnter(e: React.DragEvent<HTMLDivElement>) {
        console.log('dragEnter')
        enterObj = e.currentTarget;
        enterIndex = Number(e.currentTarget.dataset.index);

        // 进行动画操作，先全部translate 0 ,然后当前被影响的所有元素的translate


    }

    // TODO: e.target e.currentTarget 的根本区别，在ts的类型系统中的差别
    // 虽然在js中可以通过e.terget.dataset.index 获取到，不会报错，但是在ts中，因为类型声明文件target中没有dataset等一系列定义，所以会有编译错误
    // 而ts中，在currentTarget中有dataset的声明，所以可以正确获取到

    return (
        <div onDragOver={(e) => {
            // 默认情况下，无法将文字/元素放置到其他元素中。如果需要可以放置，我们要组织默认行为
            e.preventDefault();
        }}>
            {
                renderData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable={true}
                            data-index={index}
                            onDragEnter={dragEnter}

                        > {renderItem(item, index)}</div>)
                })
            }
        </div>
    )
}

export default DragSort;
