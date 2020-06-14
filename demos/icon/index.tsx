import Icon from "../../src/components/Icon/Icon";
import React from "react";
import CodeView from '../Common/CodeView';
import {apiData as data} from "./data";

export default function IconDemo() {
    return (
        <div>
            <h2>Icon</h2>

            <h4>size </h4>

            <CodeView>
                默认大小<Icon className={['icon-book']}/>，
                small<Icon size={"small"} className={['icon-book']}/>，
                middle<Icon size={"middle"} className={['icon-book']} />，
                large<Icon size={"large"} className={['icon-book']}/>
            </CodeView>
            <h4 >
                className， 根据className 指定icon
            </h4>

            <CodeView>
            <pre style={{
                wordBreak: "break-word"
            }}>
                icon-book <Icon size={"middle"} className={['icon-book']} />
                icon-load <Icon size={"middle"} className={['icon-load']} />
                icon-checkcircleo<Icon size={"middle"} className={['icon-checkcircleo']} />
                icon-my<Icon size={"middle"} className={['icon-my']} />
                icon-home<Icon size={"middle"} className={['icon-home']} />
                icon-check<Icon size={"middle"} className={['icon-check']} />
                icon-up<Icon size={"middle"} className={['icon-up']} />
                icon-check-circle<Icon size={"middle"} className={['icon-check-circle']} />
                icon-failure<Icon size={"middle"} className={['icon-failure']} />
                icon-success<Icon size={"middle"} className={['icon-success']} />
                icon-offline<Icon size={"middle"} className={['icon-offline']} />
            </pre>
            </CodeView>
            <h4>
                是否自旋 spin：
            </h4>

            <CodeView>
                <Icon style={{marginRight: '.5rem'}} className={['icon-load']} size={"middle"} spin/>ß
            </CodeView>

            <h4>
                旋转 rotate
            </h4>
            <CodeView>
                <Icon size={"middle"} className={['icon-my']} rotate={180} />
                <Icon size={"middle"} className={['icon-my']} rotate={90} />
                <Icon size={"middle"} className={['icon-my']} rotate={0} />
                <Icon size={"middle"} className={['icon-my']} rotate={-90} />
            </CodeView>
            <h4>自定义样式style</h4>
            <CodeView>

                <Icon size={"middle"} className={['icon-book']}  style={{
                    color: 'green',
                    fontSize: '24px'
                }} />
                <Icon size={"middle"} className={['icon-my']}  style={{
                    color: 'green',
                    fontSize: '24px'
                }} />

            </CodeView>
            <h2>API</h2>
            <div>
                <table>
                    <tbody>
                    {data.map((item, index: number) => {
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
