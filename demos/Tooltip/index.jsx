/**
 * @description
 * @author justsso
 */
import React from 'react';
import {Tooltip, Button, Col, Row, Icon} from "../../src/components";
import './index.less';
import TooltipData from "./data";


function Demo() {
    return (
        <div>
            <h2>Tooltip 文字提示</h2>
            <p>当鼠标移动对应元素上方时，或者点击时，会显示Tooltip文字提示，气泡</p>
            <h4>
                方位，设置position= top | bottom | left | right
            </h4>
            <div>
                <Row type="flex">
                    <Col span={4} offset={2}>
                        <Tooltip content="提示文字提示文字提示文字" position="top" trigger="hover">
                            <Button>top</Button>
                        </Tooltip>
                    </Col>
                    <Col span={4}>
                        <Tooltip content="提示文字" position="bottom" trigger="hover">
                            <Button>bottom</Button>
                        </Tooltip>
                    </Col>
                    <Col span={4}>
                        <Tooltip content="提示文字" position="left" trigger="hover">
                            <Button>left</Button>
                        </Tooltip>
                    </Col>
                    <Col span={4}>
                        <Tooltip content="提示文字" position="right" trigger="hover">
                            <Button>right</Button>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
            <h4>触发方式, 设置trigger = hover | click | focus</h4>
            <div>
                <Row>
                    <Col span={4} offset={2}>
                        <Tooltip content="提示文字" position="top" trigger="hover">
                            <Button>hover(默认)</Button>
                        </Tooltip>
                    </Col>
                    <Col span={4}>
                        <Tooltip content="提示文字" position="top" trigger="click">
                            <Button>click</Button>
                        </Tooltip>
                    </Col>
                    <Col span={4}>
                        <Tooltip content="提示文字" position="top" trigger="focus">
                            <Button>focus</Button>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
            <div>
                <Row type="flex">
                    <Col span={4} offset={2}>
                        下方出现
                        <Tooltip content="帮助文字信息" position="bottom" trigger="click">
                            <Icon size="middle" className={['icon-help']}/>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
            <h3>API</h3>
            <div>
                <table>
                    <tbody>
                    {TooltipData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {item.map((td_item, td_index) => {
                                    return <td key={td_index}>{td_item}</td>;
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Demo;
