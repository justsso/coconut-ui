import React from "react";
import { Panel } from "../../src/components";
import {PanelGroup} from "../../src/components";
import { panelData } from "./data";
import CodeView from "../Common/CodeView";

export default function Index() {
    return (
        <div>
            <h2>Panel面板组件</h2>
            <h4>title: string | ReactNode</h4>

            <CodeView>
                <Panel title={'我是标题'} expanded>
                    <div>Panel1</div>
                    <div>哈哈哈哈我是内容</div>
                    <div>哈哈哈哈我是内容</div>
                    <div>哈哈哈哈我是内容</div>
                    <div>哈哈哈哈我是内容</div>
                </Panel>
            </CodeView>

            <h4>title：为自定义组件</h4>

            <CodeView>
                <Panel title={<p>我是p标签的 <strong> 标题</strong></p>} expanded={false} showArrow={true}>
                    <div>Panel2</div>
                    <div>哈哈哈哈我是内容</div>
                    <h4>我h4号标题</h4>
                </Panel>
            </CodeView>

            <h4>不传入title</h4>
            <CodeView>
                <Panel>
                    没有标题
                </Panel>
            </CodeView>

            <h4>collapsible : 是否可折叠</h4>
            <CodeView>
                <Panel title='不可折叠' collapsible={false} expanded={true} >
                    <p>
                        我是不可折叠的内容，默认打开
                    </p>
                </Panel>
            </CodeView>
            <CodeView>
                <Panel title='不可折叠' collapsible={false} expanded={false} >
                    <p>
                        我是不可折叠的内容，默认关闭状态
                    </p>
                </Panel>
            </CodeView>

            <h4>
                expanded: 是否展开面板
            </h4>
            <CodeView>
                <Panel title={'不展开'} expanded={false}>
                    犹抱琵琶半遮面
                </Panel>
            </CodeView>
            <h4>
                showArrow: 不展示箭头
            </h4>
            <CodeView>
                <Panel title={'不展示箭头'} showArrow={false}>
                    层峦叠嶂
                </Panel>
            </CodeView>


            <h2>PanelGroup 折叠面板组</h2>
            <h4>accordion: 是否手风琴效果(同时只能打开一个面板)</h4>
            <p>accordion: true</p>
            <CodeView>
                <PanelGroup className={['a', 'b']} onChange={(panelName) => {
                    console.log(panelName, '我改变了')
                }}
                    accordion
                >
                    <Panel title={'标题一'} name={'111'}>
                        If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                        If you just want to have a ready to go React Hook for data f
            </Panel>
                    <Panel title={'标题三'} name={'222'}>
                        If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                        If you just want to have a ready to go React Hook for data f
            </Panel>
                    <Panel title={'标题二'} name={'333'}>
                        If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                        If you just want to have a ready to go React Hook for data f
            </Panel>
                </PanelGroup>
            </CodeView>
            
            <p>accordion: false</p>

            <CodeView>
                <PanelGroup className={['a', 'b']} onChange={(panelName) => {
                    console.log(panelName, '我改变了')
                }}
                    accordion={false}
                >
                    <Panel title={'标题一'} name={'111'}>
                        If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                        If you just want to have a ready to go React Hook for data f
            </Panel>
                    <Panel title={'标题三'} name={'222'}>
                        If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                        If you just want to have a ready to go React Hook for data f
            </Panel>
                    <Panel title={'标题二'} name={'333'}>
                        If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                        If you just want to have a ready to go React Hook for data f
            </Panel>
                </PanelGroup>
            </CodeView>


            <h2>API</h2>
            <div>
                <table>
                    <tbody>
                        {panelData.map((item, index) => {
                            return <tr key={index}>
                                {
                                    item.map((td_item, td_index) => {
                                        return <td key={td_index}>{td_item}</td>
                                    })
                                }
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
