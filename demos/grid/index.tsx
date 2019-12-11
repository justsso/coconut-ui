import {Row, Col} from '../../components/grid';
import React from 'react';
import './index.scss';

function Index() {
    return (
        <div>
            <Row gutter={16}>
                <Col span={4}>
                    <div className={'my-col'}>col-4</div>
                </Col>
                <Col span={8}>
                    <div className={'my-col'}>col-8</div>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={4}>
                    <div className="my-col">col-4</div>
                </Col>
                <Col span={4} offset={4}>
                    <div className="my-col">col-4</div>
                </Col>

            </Row>
        </div>

    )
}

export default Index;
