import React from "react";
import {Collapse} from "../../src/components/collapse/index";
import {collapseData} from './data'
import {collapsePanelData} from "./data";

const {Panel} = Collapse;

export default function Index() {
    return (
        <div>
            <p className={'font-serif text-xl antialiased'}>
                <strong>collapse组件的难点：</strong>
            </p>
            <ul className={'font-serif text-lg antialiased leading-relaxed'}>
                <li>1. 不固定高度的动画，panel组件内包裹的内容不确定，高度未知。如果纯css实现，那么高度必须是设置具体的数字才可以，height:
                    auto是不行的，所以这里必须要使用js才计算出panel展开之后的高度，根据计算的height做缓动动画
                </li>
                <li>2. 状态的管理。collapse组件维护全局的展开状态数组，可以实现手风琴效果</li>
                <li>3. 我们希望当一个panel是折叠的时候，它的display为 none</li>
                <li>4. 注重重绘和回流，实现高性能</li>
                <li>https://www.zhihu.com/question/35991373/answer/130256417</li>
                <li>https://segmentfault.com/a/1190000014075248</li>
                <li>antd源码</li>
                <li>bootstrap源码</li>
            </ul>
            <p>
                panel-body 内部再包含一个div.来实现padding
            </p>
            <h2>Collapse 折叠面板</h2>
            <p>
                是否手风琴模式：
            </p>
            <Collapse defaultActiveKey={['1', 3]}>
                <Panel title={"This is Title 2"} panel_key='1'>
                    123124
                </Panel>
                <Panel title={"This is Title 3"} panel_key='2'>
                    <p>进口货</p>
                    <p>就看</p>
                </Panel>
                <Panel title={"This is Title 2"} panel_key={3}>
                    <p>喝点酒啊哈阿娇快点好</p>
                </Panel>
            </Collapse>
            <p>
                手动设置激活的面板：
            </p>
            <p>面板设置标题：</p>
            <p>面板禁用：</p>
            <p>折叠面板的动画：</p>
            <p>监听事件：</p>

            <h2>Collapse API</h2>

            <table>
                <tbody>
                {
                    collapseData.map((item, index) => {
                        return <tr key={index}>
                            {
                                item.map((td_item, td_index) => {
                                    return <td key={td_index}>{td_item}</td>
                                })
                            }
                        </tr>
                    })
                }
                </tbody>
            </table>

            <h2> Collapse Panel API </h2>
            <table>
                <tbody>
                {
                    collapsePanelData.map((item, index) => {
                        return <tr key={index}>
                            {
                                item.map((td_item, td_index) => {
                                    return <td key={td_index}>{td_item}</td>
                                })
                            }
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>

    )
}
