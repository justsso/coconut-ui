/**
 * @description
 * @author justsso
 */
import React from 'react';
import {VirtualList, List} from "../../src/components";
import './index.less';
import CodeView from "../Common/CodeView";
import {virtualData} from './data';


let data: any[] = []

function getData(start: number) {
    for (let i = start; i < start + 20; i++) {
        data.push({
            name: 'jack' + i,
            age: Math.floor(20 * Math.random()),
            description: '你呢就是看风景额我快疯了多少坎坷'
        })
    }
}

getData(0)


const Demo = () => {
    const itemSize = 40;
    const listItemH = 60;


    return (
        <div>
            <h3>虚拟列表</h3>
            <h4>自定义的</h4>
            <CodeView>
                <VirtualList containerHeight={406} data={data} itemSize={itemSize + 20}
                             renderItem={(item, key) => {
                                 return (<div key={key} style={{
                                     height: itemSize + 'px',
                                 }}
                                              className='list_item'
                                 >
                                     <p>
                                         name: {item.name}
                                     </p>

                                     age: {item.age}
                                     {item.description}
                                 </div>)
                             }}
                             onReachBottom={() => {
                                 // List触底时的操作
                                 console.log('触底了')
                                 getData(data.length)
                             }}
                />
            </CodeView>


            <h4>使用List ListItem组件</h4>
            <CodeView>
                <List hover>
                    <VirtualList containerHeight={406} data={data} itemSize={listItemH + 20}
                                 renderItem={(item, key) => {
                                     return (<List.Item
                                         key={key}
                                         style={{
                                             height: listItemH + 'px',
                                         }}
                                     >
                                         <p>
                                             name: {item.name}
                                         </p>

                                         age: {item.age}
                                         {item.description}
                                     </List.Item>)
                                 }}
                    />
                </List>
            </CodeView>

            <h3>列表项动态高度</h3>
            <p>预估高度</p>

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
