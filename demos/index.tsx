import React from 'react';
class Demos extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h5>已完成：</h5>
                <ul>
                    <li>Button组件</li>
                    <li>Icon组件</li>
                </ul>
                    <h5>进行中...</h5>
                <ul>
                    <li> Collapse 折叠面板</li>
                </ul>
            </div>
        );
    }
}

export default Demos;
