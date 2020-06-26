/**
 * @description
 * @author justsso
 */
import {Button, Row, Col, Alert} from "../../src/components";
import React from 'react';

function AlertDemo(){
    return (
        <div>
            <Row>
                <Col span={4}>
                    <Button onClick={(e) => {
                        console.log(e.currentTarget)
                        Alert.info('hello');
                    }}  >打开</Button>
                </Col>
            </Row>
        </div>
    )
}
export default AlertDemo
