import React, {ReactNode, useState} from "react";
import classNames from "classnames";
import './style/index.less';
import CollapsePanel from "./collapsePanel";
import Panel, {PanelProp} from "./panel";

type panelKey = number | string

interface CollapseProp {
    prefixCls?: string,
    children: React.ReactElement<PanelProp>[] | React.ReactElement<PanelProp>,
    defaultActiveKey: panelKey [],  //默认开启的panel
    accordion?: boolean
}


function Collapse(props: CollapseProp) {
    const {prefixCls, children, defaultActiveKey, accordion} = props;

    let [activeKey, setActiveKey] = useState(defaultActiveKey);  //activeKey 当前开启的panel

    const collapseClassName = classNames(prefixCls, {
        [`${prefixCls}-accordion`]: accordion
    })
    //如果开启了accordion，那么只能有一个panel是打开的

    //onOpen事件传递给子组件，在父组件统一的处理开启事件。因为父组件需要知道当前开启了哪几个panel
    function onOpen(key: panelKey) {
        console.log('onOpen', key)
        //更新activeKey数组
        if (!activeKey.includes(key)) {
            activeKey.push(key)
        } else {
            activeKey.splice(activeKey.indexOf(key), 1)
        }
        setActiveKey(activeKey)

        setTimeout(() => {
            console.log(activeKey)
        }, 500)
    }


    //抽离出子组件，子组件只能是panel组件
    function renderPanels(): ReactNode {
        console.log('-----renderPanels-----')
        return React.Children.map<ReactNode, React.ReactElement<PanelProp>>(children, (panel: React.ReactElement<PanelProp>) => {
            let key = panel.props.panel_key;
            // const active = true
            const active = activeKey.includes(key); //当前panel是否展开

            return (
                <CollapsePanel active={active}
                               panel_key={key}
                               title={panel.props.title}
                               onOpen={(key) => {
                                   onOpen(key)
                               }}
                >
                    {panel.props.children}
                </CollapsePanel>
            );
        });
    }

    return (
        <div>
            <div className={collapseClassName}>
                {renderPanels()}
            </div>
        </div>
    )
}

Collapse.defaultProps = {
    prefixCls: 'coconut-collapse',
    accordion: false
}
Collapse.Panel = Panel
export default Collapse;
