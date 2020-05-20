import React from "react";
import {Collapse} from "../../components/collapse/index";
import {collapseData} from './data'
import {collapsePanelData} from "./data";

const {Panle} = Collapse;

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
            <Collapse>

                <Panle title={"This is Title 2"}>
                    123124
                </Panle>

                <Panle title={"This is Title 2"}>
                    e.json   45 bytes          [emitted] [immutable] [hmr]
                    app.84454ff3772941fac73c.hot-update.js   6.79 KiB     app  [emitted] [immutable] [hmr]  app
                    app.js   3.89 MiB     app  [emitted]                    app
                    index.html  365 bytes          [emitted]
                    Entrypoint app = app.js app.84454ff3772941fac73c.hot-update.js
                </Panle>

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
