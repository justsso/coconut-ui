import React, {useState} from 'react';
import {List} from '../../src/components';
import {ListData} from "./data.js";
import CodeView from "../Common/CodeView";

const Index = () => {
    let [loading, setLoading] = useState(false)

    let data = new Array(200)
    data.fill('name: Mike')

    let Data2 = [
        {text: '111', name: 'Jack', description: 'hello world'},
        {text: '222', name: 'Rose', description: 'beautify'},
        {text: '333', name: '黛玉', description: '天上掉下个林妹妹'},
        {text: '444', name: '宝钗', description: '宝钗贳酒'},
        {text: '555', name: '张筱雨', description: '三百亿'}];


    let [dragData, setDragData] = useState(Data2)

    return (
        <div>
            <h2>List</h2>
            <p>列表组件</p>
            <h3>大小size</h3>
            <h4>sm</h4>
            <CodeView>
                <List size='sm'>
                    <List.Item>
                        <span>大家看肌肤立刻释放</span>
                    </List.Item>
                    <List.Item>
                        <span>大家看肌肤立刻释放</span>
                        <a href="https://justsso.github.io">blog</a>
                    </List.Item>
                </List>
            </CodeView>
            <h4>md(默认)</h4>
            <CodeView>
                <List>
                    <List.Item>
                        <span>大家看肌肤立刻释放</span>
                    </List.Item>
                    <List.Item>
                        <span>大家看肌肤立刻释放</span>
                        <a href="https://justsso.github.io">blog</a>
                    </List.Item>
                </List>
            </CodeView>

            <h4>lg</h4>
            <CodeView>
                <List size='lg'>
                    <List.Item>
                        <span>大家看肌肤立刻释放</span>
                    </List.Item>
                    <List.Item>
                        <span>大家看肌肤立刻释放</span>
                        <a href="https://justsso.github.io">blog</a>
                    </List.Item>
                </List>
            </CodeView>

            <h3>hover:鼠标经过是否有hover效果</h3>
            <h4>hover: true</h4>
            <CodeView>
                <List hover>
                    <List.Item>
                        黑夜给了我黑色的眼睛， 我却用它寻找光明。
                    </List.Item>
                    <List.Item>
                        黑夜给了我黑色的眼睛， 我却用它寻找光明。
                    </List.Item>
                    <List.Item>
                        黑夜给了我黑色的眼睛， 我却用它寻找光明。
                    </List.Item>
                </List>
            </CodeView>

            <h3>loading</h3>
            <h4>loading:true</h4>
            <CodeView>
                <label>
                    是否加载
                    <input type='checkbox' value='是否加载' onClick={() => setLoading(!loading)}/>
                </label>
                <List loading={loading} size='sm'>
                    <List.Item>
                        黑夜给了我黑色的眼睛， 我却用它寻找光明。
                    </List.Item>
                    <List.Item>
                        黑夜给了我黑色的眼睛， 我却用它寻找光明。
                    </List.Item>
                </List>
            </CodeView>
            <h3>sortable 是否可以排序</h3>
            <p>
                传给item的index必须是组内唯一的
            </p>


            <h4>onSortStart</h4>
            <h4>onSortMove</h4>
            <h4>onSortEnd</h4>
            <h4>onSort</h4>
            {
                /*
                * <CodeView>
                <DragSort data={dragData} renderItem={(item) => {
                    return (<div>
                        {item.text}-{item.name} -{item.description}
                    </div>)
                }}/>
            </CodeView>
                * */
            }

            <CodeView>
                <List sortable dataSource={dragData} renderItem={(item, index) => {
                    return (<div key={index}>
                        {item.text}
                        -{item.name}
                        -{item.description}
                    </div>)
                }}
                onSort={ (obj) => {
                    if (obj.dragIndex > obj.enterIndex) {
                        let deleChild = dragData.splice(obj.dragIndex, 1)[0];
                        dragData.splice(obj.enterIndex, 0, deleChild);

                        setDragData(
                            dragData
                        )

                    } else if (obj.dragIndex < obj.enterIndex) {
                        let delteChild = dragData.splice(obj.dragIndex, 1)[0]
                        dragData.splice(obj.enterIndex, 0, delteChild)
                        setDragData(dragData)
                    }
                }}

                />

            </CodeView>

            <h2>API</h2>
            <table>
                <tbody>
                {ListData.map((item, index: number) => {
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
    );
};

export default Index;
