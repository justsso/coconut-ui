import React, {useEffect, useState} from "react";
import PropType from "prop-types";
import classNames from "classnames";
import {BasicProps} from "../@types/common";


interface PanelGroupInterface extends BasicProps {
    accordion?: boolean, //是否是手风琴效果
    defaultActiveName?: string | number | [],
    children: React.ReactElement,
    onChange: (panelName : string | number) => void
}

function PanelGroup(props: PanelGroupInterface) {
    let {children, prefixCls, defaultActiveName, accordion, onChange, className, style} = props;
    if (!defaultActiveName) {
        if (accordion) {
            defaultActiveName = []
        } else {
            defaultActiveName = ''
        }
    }
    let [activeName, setActiveName] = useState(defaultActiveName)  //内部维护activeName 状态

    useEffect(() => {

    }, [activeName])

    //处理内部Panel被点击逻辑，修改activename状态
    function handleChange(panelName: never) {
        onChange && onChange(panelName)
        if (accordion) {
           if(panelName === activeName){
               activeName = ''
           }else{
               activeName = panelName
           }
        } else {
            if (Array.isArray(activeName)) {
                let index = activeName.indexOf(panelName)
                if (index === -1) {
                    activeName.push(panelName)
                } else {
                    activeName.splice(index, 1)
                }
            }
        }
        setActiveName(activeName)
    }


    function renderPanels() {
        return React.Children.map(children, (child, index) => {
            if (child.type) {
                //如果没有传入name , 那么序号就是name
                let name = child.props.name || index
                let expanded = false

                if (accordion) {
                    if (name === activeName) {
                        expanded = true
                    }else{
                        expanded = false
                    }
                } else {
                    expanded = (activeName as number[]).indexOf(name) !== -1
                }

                return React.cloneElement(child, {
                    expanded: expanded,
                    name: name,
                    onItemClick: handleChange
                })
            } else {
                return null
            }
        })

    }

    const PanelGroupCls = classNames({
        [ `${prefixCls}`]: true,
    }, className && className?.join(' '))

    return (
        <div className={PanelGroupCls} style={style}>
            {renderPanels()}
        </div>
    )
}

PanelGroup.defaultProps = {
    accordion: false,
    prefixCls: 'coconut-panel-group',
    // defaultActiveName: []
}

PanelGroup.propType = {
    accordion: PropType.bool, //是否是手风琴效果
    prefixCls: PropType.string,
    onChange: PropType.func,
    //默认展开面板，用于初识化
    defaultActiveName: PropType.oneOfType([
        PropType.string,
        PropType.number,
        PropType.arrayOf(PropType.string),
        PropType.arrayOf(PropType.number)
    ])
}


export default PanelGroup
