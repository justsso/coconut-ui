import React from 'react';

class Demos extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h5>已完成：</h5>
                <ul>
                    <li><input type="checkbox" defaultChecked={true} name="Layout组件" id="" value="12333"/>Layout组件</li>
                    <li><input type="checkbox" defaultChecked={true} name="Grid组件" id="" value="12333"/>Grid组件</li>
                    <li><input type="checkbox" defaultChecked={true} name="Button组件" id="" value="12333"/>Button组件</li>
                    <li><input type="checkbox" defaultChecked={true} name="Icon组件" id="" value="12333"/>Icon组件</li>
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
