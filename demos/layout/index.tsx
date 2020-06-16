import React from 'react';
import { Layout } from '../../src/components';
import './index.less';
import CodeView from '../Common/CodeView';

let Sider = Layout.Sider;

class LayoutDemo extends React.Component {
    private constructor(prop: any) {
        super(prop);
    }

    public render() {
        return (
            <div>
                <h3>设计理念</h3>
                <p>
                    Layout : 布局容器，其下可嵌套 Header Sider Content Footer 或 Layout
                    本身，可以放在任何父容器中。【最外层的Layout，默认从上到下的结构；被包裹的Layout默认flex布局，主轴是横向的】
                </p>
                <p>Header : 顶部部分，只能放在 Layout 中。【width:100%】</p>
                <p>Sider: 侧边栏，只能放在 Layout 中，使用了flex布局</p>
                <p>Content： 内容部分，只能放在 Layout 中</p>
                <p>Footer： 底部部分，只能放在 Layout 中</p>
                <h3>注意：</h3>
                <p>
                    Header Sider Content Footer 也可以单独作为组件引用
                    <br />
                    Header 组件（顶部），Header组件对应原生<code>header</code>标签
                    <br />
                    Footer 组件（底部），Footer组件对应原生<code>footer</code>标签
                    <br />
                    Sider 组件（侧边栏），只能在布局的左边或者右边
                </p>

                <h4>上中下</h4>
                <CodeView>
                    <div className="layout_demo">
                        <Layout>
                            <Layout.Header>Header</Layout.Header>
                            <Layout.Container>Container</Layout.Container>
                            <Layout.Footer>Footer</Layout.Footer>
                        </Layout>
                    </div>
                </CodeView>

                <h4>侧边栏：</h4>
                <CodeView>
                    <div className="layout_demo">
                        <Layout>
                            <Sider>Sider</Sider>
                            <Layout>
                                <Layout.Header>Header</Layout.Header>
                                <Layout.Container>Container</Layout.Container>
                                <Layout.Footer>Footer</Layout.Footer>
                            </Layout>
                        </Layout>
                    </div>
                </CodeView>

                <h4>常见布局：</h4>
                <CodeView>
                    <div className="layout_demo">
                        <Layout>
                            <Layout.Header>Header</Layout.Header>

                            <Layout>
                                <Layout.Container>Container</Layout.Container>
                                <Sider>Sider</Sider>
                            </Layout>
                            <Layout.Footer>Footer</Layout.Footer>
                        </Layout>
                    </div>
                </CodeView>
            </div>
        );
    }
}

export default LayoutDemo;
