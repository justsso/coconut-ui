import {Row, Col} from '../../components/grid';
import React from 'react';
import './index.scss';

function Index() {
    return (
        <div>
            &lt;Row&gt;
            <table>
                <tr>
                    <th>成员</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <td>gutter</td>
                    <td>栅格间隔</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>布局模式</td>
                </tr>
                <tr>
                    <td>justify</td>
                </tr>
                <tr>
                    <td>align</td>
                </tr>
            </table>
            &lt;Col&gt;
            <table>
                <tr>
                    <th>成员</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <td>span</td>
                    <td>宽度</td>
                    <td>number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>offset</td>
                    <td>布局模式</td>
                </tr>
                <tr>
                    <td>order</td>
                    <td>显示顺序</td>
                    <td>值越小的在前面</td>
                    <td>默认：0</td>
                </tr>
                <tr>
                    <td>align</td>
                </tr>
            </table>


            <h3>gutter</h3>
            <h4>gutter 默认</h4>
            <Row>
                <Col span={2}>
                    <div className="my-col">col-2</div>
                </Col>
                <Col span={4}>
                    <div className="my-col">col-4</div>
                </Col>
            </Row>
            <h4>gutter=16</h4>
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
            <h4>gutter=8</h4>
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
            <h3>offset</h3>
            <h4>offset=4，gutter=16 </h4>

            <Row gutter={16}>
                <Col span={4}>
                    <div className="my-col">col-4</div>
                </Col>
                <Col span={4} offset={4}>
                    <div className="my-col">col-4</div>
                </Col>
            </Row>

            <h3>order 显示顺序, 在flex模式下起作用</h3>
            <h4>order作用在子元素上，默认是0，可以为负值。值越小的越靠前</h4>
            <Row gutter={16} type={"flex"}>
                <Col span={4} order={4}>
                    <div className="my-col">1</div>
                </Col>
                <Col span={4} order={3}>
                    <div className="my-col">2</div>
                </Col>
                <Col span={4} order={2}>
                    <div className="my-col">3</div>
                </Col>
                <Col span={4} order={1}>
                    <div className="my-col">4</div>
                </Col>
            </Row>

            <h3>响应式，支持xs , sm , md , lg , xl , xxl</h3>

            <Row gutter={16} >
                <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={10}>
                    <div className="my-col">1a</div>
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={4}>
                    <div className="my-col">1c</div>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={10}>
                    <div className="my-col">1</div>
                </Col>
            </Row>


            <h4>order 显示顺序, order作用在子元素上，默认是0，可以为负值。值越小的越靠前</h4>
            <div className="flex">
                <div className="flex-1 flex-item">1， order=2</div>
                <div className="flex-2 flex-item">2，order默认</div>
                <div className="flex-3 flex-item">3，order=-1</div>
                <div className="flex-4 flex-item">4，order=1</div>
            </div>
        </div>

    )
}

export default Index;
