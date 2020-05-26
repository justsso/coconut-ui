import React, {ReactNode, useState} from "react";
import classNames from "classnames";
import './style/index.scss';
import CollapsePanle from "./collapsePanle";
import Panel, {PanelProp} from "./panel";
type panelKey = number | string

interface CollapseProp {
    prefixCls?: string,
    children:  React.ReactElement<PanelProp>[] | React.ReactElement<PanelProp>,
    defaultActiveKey : [panelKey]
}


function Collapse(props: CollapseProp) {
    const {prefixCls, children, defaultActiveKey} = props;

    let [activeKey, setActiveKey] = useState(defaultActiveKey);

    const collapseClassName = classNames(prefixCls, {})

    function onOpen(key: panelKey, active: boolean) {
        console.log('onOpen',key, active)

        if (!activeKey.includes(key)) {
            activeKey.push(key)
        } else {
            activeKey.splice(activeKey.indexOf(key), 1)
        }
        setActiveKey(activeKey)
    }


    function renderPanels() : ReactNode{
        return  React.Children.map<ReactNode, React.ReactElement<PanelProp>>(children, (panel: React.ReactElement<PanelProp>) => {
            console.log(activeKey, panel.props.panel_key, 36)
            let key = panel.props.panel_key;
            // const active = true
            const active =  activeKey.includes(key);

            return (
                <CollapsePanle active={active}
                               panel_key={key}
                               title={panel.props.title}
                               onOpen={() => {onOpen(1, true)}}
                >
                    {panel.props.children}
                </CollapsePanle>
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
    prefixCls: 'coconut-collapse'
}
Collapse.Panel = Panel
export default Collapse;
