import React from "react";
import Layout from "../../components/layout";
import './index.less';

let Sider = Layout.Sider

class LayoutDemo extends React.Component {
    constructor(prop: any) {
        super(prop);
    }

    render() {
        return (
            <div>
                <p>
                    设计理念：
                    Layout : 布局容器，其下可嵌套 Header Sider Content Footer 或 Layout
                    本身，可以放在任何父容器中。【最外层的Layout，默认从上到下的结构；被包裹的Layout默认flex布局，主轴是横向的】
                    Header : 顶部布局，只能放在 Layout 中。【width:100%】
                    Sider: 侧边栏，只能放在 Layout 中flex布局
                    Content： 内容部分，只能放在 Layout 中
                    Footer： 底部部分，只能放在 Layout 中
                </p>

                <div  className={'layout_demo'}  >
                    <h3> 上中下：</h3>
                    <Layout>
                        <Layout.Header>
                            Header
                        </Layout.Header>
                        <Layout.Container>
                            Container
                        </Layout.Container>
                        <Layout.Footer>
                            Footer
                        </Layout.Footer>
                    </Layout>


                    <h3>侧边栏：</h3>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Layout>
                            <Layout.Header>Header</Layout.Header>
                            <Layout.Container>Container</Layout.Container>
                            <Layout.Footer>Footer</Layout.Footer>
                        </Layout>
                    </Layout>


                    <h3>常见布局：</h3>
                    <Layout >
                        <Layout.Header>Header</Layout.Header>

                        <Layout >
                            <Layout.Container>Container</Layout.Container>
                            <Sider>Sider</Sider>
                        </Layout>
                        <Layout.Footer>Footer</Layout.Footer>

                    </Layout>

                </div>

            </div>
        );
    }
}

export default LayoutDemo
