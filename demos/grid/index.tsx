import { Row, Col } from '../../src/components/Grid';
import React from 'react';
import CodeView from '../Common/CodeView';

import { rowData, colData } from './data'
import './index.less';


function Index() {
    return (
        <div>
            <h3>Row 组件 ： gutter属性，默认值为0</h3>
            <h4>gutter 默认</h4>
            <CodeView>
                <Row>
                    <Col span={2}>
                        <div className="my-col">col-2</div>
                    </Col>
                    <Col span={4}>
                        <div className="my-col">col-4</div>
                    </Col>
                </Row>
            </CodeView>

            <h4>gutter=16</h4>
            <CodeView>
                <Row gutter={16}>
                    <Col span={4}>
                        <div className={'my-col'}>col-4</div>
                    </Col>
                    <Col span={4}>
                        <div className={'my-col'}>col-4</div>
                    </Col>
                    <Col span={8}>
                        <div className={'my-col'}>col-8</div>
                    </Col>
                </Row>
            </CodeView>
            <h4>gutter=8</h4>
            <CodeView>
                <Row gutter={8}>
                    <Col span={4}>
                        <div className={'my-col'}>col-4</div>
                    </Col>
                    <Col span={4}>
                        <div className={'my-col'}>col-4</div>
                    </Col>
                    <Col span={8}>
                        <div className={'my-col'}>col-8</div>
                    </Col>
                </Row>
            </CodeView>
            <h3>Col 组件 ：offset属性</h3>
            <h4>offset=4，gutter=16 </h4>

            <CodeView>
                <Row gutter={16}>
                    <Col span={4} offset={16}>
                        <div className="my-col">col-4 offset-16</div>
                    </Col>
                </Row>
                <Row>
                <Col span={4} offset={12}>
                        <div className="my-col">col-4 offset-12</div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={4} offset={8}>
                        <div className="my-col">col-4 offset-8</div>
                    </Col>
                </Row>
                <Row>
                <Col span={4} offset={4}>
                        <div className="my-col">col-4 offset-4</div>
                    </Col>
                </Row>
            </CodeView>

            <h3>Col组件： order 显示顺序, 在flex模式下起作用</h3>
            <h4>order作用在子元素上，默认是0，可以为负值。值越小的越靠前</h4>

            <CodeView>
                <Row gutter={16} type={"flex"}>
                    <Col span={4} order={4}>
                        <div className="my-col">1, order=4</div>
                    </Col>
                    <Col span={4} order={3}>
                        <div className="my-col">2, order=3</div>
                    </Col>
                    <Col span={4} order={2}>
                        <div className="my-col">3, order=2</div>
                    </Col>
                    <Col span={4} order={1}>
                        <div className="my-col">4, order=1</div>
                    </Col>
                </Row>
            </CodeView>

            <h3>响应式，支持xs , sm , md , lg , xl , xxl</h3>

            <CodeView>
                <Row gutter={16}>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={10}>
                        <div className="my-col">xs={2} sm={4} md={6} lg={8} xl={10} xxl={10}</div>
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={4}>
                        <div className="my-col">xs={20} sm={16} md={12} lg={8} xl={4} xxl={4}</div>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={10}>
                        <div className="my-col">xs={2} sm={4} md={6} lg={8} xl={10} xxl={10}</div>
                    </Col>
                </Row>
            </CodeView>

            <h3>其他属性的响应式</h3>
            <CodeView>
                <Row gutter={16}>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} md={{ span: 4 }}
                        sm={{ span: 3, offset: 3 }}>
                        <div className="my-col">1</div>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} md={{ span: 4, offset: 4 }}
                        sm={{ span: 3, offset: 3 }}>
                        <div className="my-col">1</div>
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} md={{ span: 4, offset: 8 }}
                        sm={{ span: 3, offset: 3 }}>
                        <div className="my-col">1</div>
                    </Col>
                </Row>
            </CodeView>

            <h2>API</h2>
            <h4>Row 组件</h4>
            <table>
                <tbody>
                    {
                        rowData.map((item: string[], index: number) => {
                            return <tr key={index}>
                                {
                                    item.map((td_item: string, td_index: number) => {
                                        return <td key={td_index}>{td_item}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <h4>Col组件</h4>

            <table>
                <tbody>
                    {
                        colData.map((item: string[], index: number) => {
                            return <tr key={index}>
                                {
                                    item.map((td_item: string, td_index: number) => {
                                        return <td key={td_index}>{td_item}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>

    )
}

export default Index;
