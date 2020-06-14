import React from "react";
import {Panel} from "../../src/components";
import {panelData} from "./data";
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
