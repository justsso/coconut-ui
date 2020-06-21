import React, { useEffect, useState, useCallback } from 'react';
import { Transition } from 'react-transition-group';
import Icon from '../Icon';
import PropType from 'prop-types';
import classNames from 'classnames';
import { BasicProps } from '../@types/common';
import './style/index.less';

export interface PanelProp extends BasicProps {
    /** 面板标题  */
    title?: string | React.ReactNode;
    /** 可折叠的 */
    collapsible: boolean;
    /** 是否展开 */
    expanded?: boolean;
    children?: React.ReactChildren;
    prefixCls: string;
    showArrow?: boolean;
    onItemClick?: (panelName: string | number) => {};
    name: string | number;
}

const Panel: React.FC<PanelProp> = (props) => {
    let {
        children,
        prefixCls,
        title,
        collapsible,
        expanded,
        showArrow,
        onItemClick,
        name,
        className,
        style
    } = props;
    let [expanedState, setExpanedState] = useState(expanded);
    let initRotate = expanded ? 90 : 0;
    let [iconRotate, setIconRotate] = useState(initRotate);
    let [height, setHeight] = useState(0);

    const duration = 300;

    let panelBody = React.useRef<HTMLDivElement>(null)

    const measuredRef = useCallback((node) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    const PanelClassName = classNames(prefixCls, className?.join(' '));
    const PanelTitleCls = classNames({
        [`${prefixCls}-title`]: true
    });
    const PanelBodyCls = classNames({
        [`${prefixCls}-body`]: true
    });

    const PanelContentCls = classNames({
        [`${prefixCls}-body-content`]: true
    });

    useEffect(() => {
        if (expanded) {
            onEnter();
            // 展开 且 没有标题时，处理一下panelBody的borderTop
            if (title === undefined) {
                onExited();
            }
        } else {
            onExit();
            onExited();
        }
    }, [expanded, height]);

    // 切换打开/关闭状态
    function toggleExpand() {
        if (collapsible) {
            onItemClick?.(name);
            if (expanedState) {
                setIconRotate(0);
            } else {
                setIconRotate(90);
            }
            setExpanedState(!expanedState);
        }
    }

    // 获取panelContent高度
    // function getContentHeight() {
    //     return panelContent.current ? panelContent.current.offsetHeight : null
    // }

    function onEnter() {
        // let H = getContentHeight()
        if (panelBody.current) {
            // panelBody.current.style.borderColor = '#d6d6d6';
            // panelBody.current.style.height = H + 'px';

            panelBody.current.style.height = height + 'px';
            setIconRotate(90);
        }
    }

    function onEntering() {}

    function onEntered() {}

    function onExit() {
        // console.log('onExit')
        if (panelBody.current) {
            panelBody.current.style.height = 0 + 'px';
            setIconRotate(0);
        }
    }

    function onExiting() {
        // console.log('onExiting')
    }

    function onExited() {
        if (panelBody.current) {
            // panelBody.current.style.borderColor = 'transparent'
        }
    }

    return (
        <div className={PanelClassName} style={style}>
            {title && (
                <div className={PanelTitleCls} onClick={toggleExpand}>
                    {showArrow && (
                        <Icon
                            className={['icon-icon-test3']}
                            size={20}
                            rotate={iconRotate}
                            style={{
                                transition: `all ${duration * 0.0008}s ease-in-out`
                            }}
                        />
                    )}
                    {title}
                </div>
            )}

            <Transition
                in={expanedState} // in变为true，触发onEnter onEntering onEntered ;in变为false，触发onExit onExiting onExited
                timeout={duration}
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={onEntered}
                onExit={onExit}
                onExiting={onExiting}
                onExited={onExited}
            >
                <div className={PanelBodyCls} ref={panelBody}>
                    <div className={PanelContentCls} ref={measuredRef}>
                        {children}
                    </div>
                </div>
            </Transition>
        </div>
    );
};

Panel.defaultProps = {
    prefixCls: 'coconut-panel',
    collapsible: true,
    expanded: true, // 默认展开的
    showArrow: true // 默认展示箭头
};

Panel.propTypes = {
    onItemClick: PropType.func
};

export default Panel;
