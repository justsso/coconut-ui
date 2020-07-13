import Icon from '../../src/components/Icon/Icon';
import React from 'react';
import CodeView from '../Common/CodeView';
import {apiData as data} from './data';
import {Row, Col} from "../../src/components";
import './index.less';

export default function IconDemo() {
    return (
        <div>
            <h2>Icon</h2>

            <h4>size </h4>

            <CodeView>
                默认大小
                <Icon className={['icon-book']}/>， small
                <Icon size="small" className={['icon-book']}/>， middle
                <Icon size="middle" className={['icon-book']}/>， large
                <Icon size="large" className={['icon-book']}/>
            </CodeView>
            <h4>className， 根据className 指定icon</h4>

            <CodeView>
                <Row className={['icons_row']}>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-book']}/>
                        <span>icon-book</span>
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-load']}/>
                        icon-load
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-checkcircleo']}/>
                        icon-checkcircleo
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-my']}/>
                        icon-my
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-home']}/>
                        icon-home
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-check']}/>
                        icon-check
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-up']}/>
                        icon-up
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-check-circle']}/>
                        icon-check-circle
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-failure']}/>
                        icon-failure
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-success']}/>
                        icon-success
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-jiantou_xiangzuoliangci']}/>
                        icon-jiantou_xiangzuoliangci
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-jiantou_yemian_xiangyou']}/>
                        icon-jiantou_yemian_xiangyou
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-error_filled']}/>
                        icon-error_filled
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-close_circle']}/>
                        icon-close_circle
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-warn']}/>
                        icon-warn
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-warn_filled']}/>
                        icon-warn_filled
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-help']}/>
                        icon-help
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-help_filled']}/>
                        icon-help_filled
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-arrow_top']}/>
                    icon-arrow_top
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={[' icon-arrow_left']} />
                        icon-arrow_left
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={[' icon-arrow_down']} />
                        icon-arrow_down
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={[' icon-arrow_right']} />
                        icon-arrow_right
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-forbidden']} />
                        icon-forbidden
                    </Col>
                    <Col span={6}>
                        <Icon size="middle" className={['icon-forbidden_filled']} />
                        icon-forbidden_filled
                    </Col>


                </Row>
            </CodeView>
            <h4>是否自旋 spin：</h4>

            <CodeView>
                <Icon
                    style={{marginRight: '.5rem'}}
                    className={['icon-load']}
                    size="middle"
                    spin
                />
                ß
            </CodeView>

            <h4>旋转 rotate</h4>
            <CodeView>
                <Icon size="middle" className={['icon-my']} rotate={180}/>
                <Icon size="middle" className={['icon-my']} rotate={90}/>
                <Icon size="middle" className={['icon-my']} rotate={0}/>
                <Icon size="middle" className={['icon-my']} rotate={-90}/>
            </CodeView>
            <h4>自定义样式style</h4>
            <CodeView>
                <Icon
                    size="middle"
                    className={['icon-book']}
                    style={{
                        color: 'green',
                        fontSize: '24px'
                    }}
                />
                <Icon
                    size="middle"
                    className={['icon-my']}
                    style={{
                        color: 'green',
                        fontSize: '24px'
                    }}
                />
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
