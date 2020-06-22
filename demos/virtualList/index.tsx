/**
 * @description
 * @author justsso
 */
import React from 'react';
import {VirtualList, List} from "../../src/components";
import './index.less';
import CodeView from "../Common/CodeView";
import {virtualData} from './data';
import Mock from 'mockjs'

// 固定大数据
let data1: any[] = []
for (let i = 0; i < 20000; i++) {
    data1.push({
        title: '它的美是必须空着，必须干净而脆弱。',
        index: i
    })
}


// 滚动动态加载
let data2: any[] = []

function getData(data: any[], start: number, isDynamic: boolean) {
    if(!isDynamic){
    for (let i = start; i < start + 20; i++) {
        data.push({
            name: 'jack' + i,
            age: Math.floor(20 * Math.random()),
            description: '明亮的光线覆盖它，像卷心菜那么舒慵'
        })
    }
    }else{
        for (let i = start; i < start + 20; i++) {
            data.push({
                title: Mock.Random.cparagraph(), // 长文本
                index: i
            })
        }
    }
}

getData(data2, 0, false);


// 动态高度
let data3: any[] = [];
for (let i = 0; i < 10000; i++) {
    data3.push({
        title: Mock.Random.cparagraph(), // 长文本
        index: i
    })
}

let data4: any[] = []
for (let i = 0; i < 200; i++) {
    data4.push({
        title: Mock.Random.cparagraph(), // 长文本
        index: i
    })
}


const Demo = () => {
    const itemSize = 40;
    const listItemH = 60;


// 滚动加载动态高度
    return (
        <div>
            <h3>虚拟列表</h3>

            <h4>固定的大数据数组: 20000个</h4>
            <CodeView>
                <VirtualList containerHeight={406} data={data1} itemSize={itemSize + 20}
                             renderItem={(item, key) => {
                                 return (<div key={key} style={{
                                     height: itemSize + 'px',
                                 }}
                                              className='list_item'
                                 >
                                     {item.index}-
                                     {item.title}
                                 </div>)
                             }}
                />
            </CodeView>
            <h4>滚动到底部，onReachBottom()动态加载数据</h4>
            <CodeView>
                <VirtualList containerHeight={406} data={data2} itemSize={itemSize + 20}
                             renderItem={(item, key) => {
                                 return (<div key={key} style={{
                                     height: itemSize + 'px',
                                 }}
                                              className='list_item'
                                 >
                                     <span>
                                         name: {item.name}
                                     </span>

                                     age: {item.age}
                                     {item.description}
                                 </div>)
                             }}
                             onReachBottom={() => {
                                 // List触底时的操作
                                 console.log('触底了')
                                 getData(data2, data2.length, false)
                             }}
                />
            </CodeView>

            <h4>使用List ListItem组件</h4>
            <CodeView>
                <List hover>
                    <VirtualList containerHeight={406} data={data2} itemSize={listItemH + 20}
                                 renderItem={(item, key) => {
                                     return (<List.Item
                                         key={key}
                                         style={{
                                             height: listItemH + 'px',
                                         }}
                                     >
                                         <span>
                                             name: {item.name}
                                         </span>

                                         age: {item.age}
                                         {item.description}
                                     </List.Item>)
                                 }}
                    />
                </List>
            </CodeView>

            <h3>列表项动态高度</h3>
            <h4>预估高度</h4>
            <CodeView>
                <VirtualList data={data3} renderItem={(item, index) => {
                    return (
                        <div key={index} className='list_item'>
                            <span>{item.index}</span>
                            <div>{item.title}</div>
                        </div>
                    )
                }} containerHeight={400} estimatedItemSize={42} bufferScale={3}/>
            </CodeView>
            <h4>动态高度，动态加载</h4>
            <CodeView>
                <VirtualList data={data4} renderItem={(item, index) => {
                    return (
                        <div key={index} className='list_item'>
                            <span>{item.index}</span>
                            <div>{item.title}</div>
                        </div>
                    )
                }}
                             containerHeight={600}
                             estimatedItemSize={42}
                             bufferScale={1}
                             // onReachBottom={() => {
                             //     console.log('到底了~~')
                             //     for (let i = data4.length; i < data4.length+200 ; i++) {
                             //         data4.push({
                             //             title: Mock.Random.cparagraph(),
                             //             index: i
                             //         })
                             //     }
                             // }}
                />
            </CodeView>

            <h2>API</h2>
            <div>
                <table>
                    <tbody>
                    {virtualData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {item.map((td_item, td_index) => {
                                    return <td key={td_index}>{td_item}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Demo
