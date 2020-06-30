import React from 'react';
import {apiData as data} from './data';
import CodeView from '../Common/CodeView';
import {Button} from '../../src/components/index';

import CodePreview from "@uiw/react-code-preview";

export default function Index() {
    return (
        <div>
            <h2>Button</h2>
            <h4> 类型type </h4>

            <CodePreview
                bgWhite={true}
                code={`
import { Button } from 'coconut';

const Demo = () => (
    <div>
        <Button type="primary">primary</Button>
        <Button type="secondary">secondary</Button>
        <Button type="success">success</Button>
        <Button type="danger">danger</Button>
        <Button type="warning">warning</Button>
        <Button type="info">info</Button>
        <Button type="light">light</Button>
        <Button type="dark">dark</Button>
    </div>
)
ReactDOM.render(<Demo />, _mount_);
            `}
                dependencies={{Button}}
            />
            <h4>镂空plain</h4>
            <CodeView>
                <Button type="primary" plain={true}>
                    primary
                </Button>
                <Button type="secondary" plain>
                    secondary
                </Button>
                <Button type="success" plain>
                    success
                </Button>
                <Button type="danger" plain>
                    danger
                </Button>
                <Button type="warning" plain>
                    warning
                </Button>
                <Button type="info" plain>
                    info
                </Button>
                <Button type="light" plain>
                    light
                </Button>
                <Button type="dark" plain>
                    dark
                </Button>
            </CodeView>
            <h4>尺寸size</h4>
            <CodeView>
                <Button type="primary" plain={true} size="large">
                    大空心
                </Button>
                <Button type="primary" plain={true}>
                    正常空心
                </Button>
                <Button type="primary" plain={true} size="small">
                    小空心
                </Button>
            </CodeView>

            <h4>禁用disabled</h4>
            <CodeView>
                <Button type="primary" disabled>
                    primary disabled
                </Button>
                <Button type="primary" disabled plain>
                    primary disabled
                </Button>
                <Button type="primary" disabled size="small">
                    primary disabled
                </Button>
                <Button type="primary" disabled plain size="small">
                    primary disabled
                </Button>
                <p>
                    <Button type="secondary" disabled>
                        secondary
                    </Button>
                </p>
            </CodeView>
            <h4>圆角circle</h4>
            <CodeView>
                <Button type="primary" circle>
                    circle
                </Button>
                <Button type="primary" circle size="large" plain>
                    大circle
                </Button>
                <Button type="primary" circle size="small">
                    小circle
                </Button>
                <Button type="secondary" circle>
                    secondary
                </Button>
                <Button type="danger" plain circle>
                    danger
                </Button>
            </CodeView>
            <h4>加载loading</h4>
            <CodeView>
                <Button type="primary" loading>
                    加载中
                </Button>
            </CodeView>
            <h2>API</h2>
            <div>
                <table>
                    <tbody>
                    {data.map((item, index: number) => {
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
    );
}
