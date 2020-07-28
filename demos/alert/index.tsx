/**
 * @description
 * @author justsso
 */
import {Button, Row, Col, Alert} from "../../src/components";
import React from 'react';
import {apiData as data} from "./data";

function AlertDemo() {
    return (
        <div>
            <h2>Alert</h2>
            <h4>duration 默认时间 2000ms</h4>
            <Row>
                <Col span={4}>
                    <Button onClick={() => {
                        Alert.info('信息提示');
                    }}>Info</Button>
                </Col>
                <Col span={4}>
                    <Button type='success' onClick={() => {
                        Alert.success(' 这是一条成功的消息');
                    }}>Success</Button>
                </Col>
                <Col span={4}>
                    <Button type='warning' onClick={() => {
                        Alert.warn(' 这是一条警告的消息');
                    }}>Warn</Button>
                </Col>
                <Col span={4}>
                    <Button type='danger' onClick={() => {
                        Alert.error(' 错误的消息');
                    }}>Error</Button>
                </Col>
            </Row>
            <h4>duration:0,则表示默认不关闭</h4>
            <Row>
                <Col span={4}>
                    <Button onClick={() => {
                        Alert.info('信息提示', 0, onclose = () => {
                            console.log('关系信息提示')
                        });
                    }}>Info</Button>
                </Col>
                <Col span={4}>
                    <Button type='success' onClick={() => {
                        Alert.success(' 这是一条成功的消息', 0, () => {
                            console.log('关闭成功消息')
                        });
                    }}>Success</Button>
                </Col>
                <Col span={4}>
                    <Button type='warning' onClick={() => {
                        Alert.warn(' 这是一条警告的消息', 0, () => {
                            console.log('关闭警告消息')
                        });
                    }}>Warn</Button>
                </Col>
                <Col span={4}>
                    <Button type='danger' onClick={() => {
                        Alert.error(' 错误的消息', 0, () => {
                            console.log('关闭错误消息')
                        });
                    }}>Error</Button>
                </Col>
            </Row>
            <h2>API</h2>
            <h4>Alert.info </h4>
            <code>
                Alert.info(content: string, duration?: number, onClose?: () =&gt; void);
            </code>
            <h4>Alert.success</h4>
            <code>
                Alert.success(content: string, duration?: number, onClose?: () =&gt; void);
            </code>
            <h4>Alert.warn</h4>
            <code>
               Alert.warn(content: string, duration?: number, onClose?: () =&gt; void);
            </code>
            <h4>Alert.error</h4>
            <code>
                Alert.error(content: string, duration?: number, onClose?: () =&gt; void);
            </code>
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
            <h4>Alert.close</h4>
            <code>Alert.close();</code>
            <h4>Alert.closeAll</h4>
            <code>Alert.closeAll()</code>
        </div>
    )
}

export default AlertDemo
