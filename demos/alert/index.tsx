/**
 * @description
 * @author justsso
 */
import {Button, Row, Col, Alert} from "../../src/components";
import React from 'react';

function AlertDemo() {
    return (
        <div>
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
                        console.log('ererw')
                        Alert.error(' 错误的消息', 0, () => {
                            console.log('关闭错误消息')
                        });
                    }}>Error</Button>
                </Col>
            </Row>
        </div>
    )
}

export default AlertDemo
