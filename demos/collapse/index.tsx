import React from "react";
import {Collapse} from "../../components/collapse/index";
import {collapseData} from './data'
import {collapsePanelData} from "./data";

const {Panel} = Collapse;

export default function Index() {
    return (
        <div>
            <p>
                <code>
                    ${" useRef<HTMLDivElement>"}
                </code>
            </p>
        <h2>Collapse 折叠面板</h2>
            <p>
                是否手风琴模式：
            </p>
            <Collapse defaultActiveKey={['1']}>
                <Panel title={"This is Title 2"}  panel_key='1'>
                    123124
                </Panel>
                <Panel title={"This is Title 3"}  panel_key='2'>
                    <p>进口货</p>
                    <p>就看</p>
                </Panel>
            </Collapse>
            <p>
                手动设置激活的面板：
            </p>
            <p>面板设置标题：</p>
            <p>面板禁用：</p>
            <p>折叠面板的动画：</p>
            <p>监听事件：</p>

            <h2>Collapse  API</h2>

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

)}
