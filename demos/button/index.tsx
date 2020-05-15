import Button from "../../components/button/button";
import React from 'react';
import {apiData as data} from './data';

export default function Index() {
    return <div>
        <p>
            类型type:
            <Button type={"primary"}>primary</Button>
            <Button type={"secondary"}>secondary</Button>
            <Button type={"success"}>success</Button>
            <Button type={"danger"}>danger</Button>
            <Button type={"warning"}>warning</Button>
            <Button type={"info"}>info</Button>
            <Button type={"light"}>light</Button>
            <Button type={"dark"}>dark</Button>
        </p>
        <p>
            镂空plain：
            <Button type={"primary"} plain={true}>primary</Button>
            <Button type={"secondary"} plain>secondary</Button>
            <Button type={"success"} plain>success</Button>
            <Button type={"danger"} plain>danger</Button>
            <Button type={"warning"} plain>warning</Button>
            <Button type={"info"} plain>info</Button>
            <Button type={"light"} plain>light</Button>
            <Button type={"dark"} plain>dark</Button>
        </p>
        <p>
            尺寸size:
            <Button type={"primary"} plain={true} size={"large"}>大空心</Button>
            <Button type={"primary"} plain={true}>正常空心</Button>
            <Button type={"primary"} plain={true} size={"small"}>小空心</Button>
        </p>

        <p>
            禁用disabled:
            <Button type={"primary"} disabled> primary disabled</Button>
            <Button type={"primary"} disabled plain> primary disabled</Button>
            <Button type={"primary"} disabled size={"small"}> primary disabled</Button>
            <Button type={"primary"} disabled plain size={"small"}> primary disabled</Button>
        </p>
        <p>
            圆角circle:
            <Button type={"primary"} circle>circle</Button>
            <Button type={"primary"} circle size={"large"} plain>大circle</Button>
            <Button type={"primary"} circle size={"small"}>小circle</Button>
        </p>
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
}
