/**
 * @description
 * @author justsso
 */
import * as React from 'react';
import classNames from "classnames";
import './style/index.less';
import SkeletonProps from './Skeleton.d';

/**
 * @description rowProps 参数
 * @interface RowProps
 */


const DEFAULT_ROW_WIDTH = '100%';

/**
 * @description 骨架屏组件参数
 * @author 小雅
 * @date 2019.8.26
 *
 */


class Skeleton extends React.Component<SkeletonProps> {
    static defaultProps = {
        prefixCls: 'coconut-skeleton',
        loading: true,
        row: 0,
        rowWidth: DEFAULT_ROW_WIDTH,
        avatarSize: 60,
        avatarShape: "round",
        action: false,
        animate: true
    };

    // 计算rowWidth
    getRowWidth(index: number) {
        if (this.props.rowProps) {
            if (Array.isArray(this.props.rowProps)) {
                return this.props.rowProps[index].width
            }
            return this.props.rowProps.width
        }

        if (this.props.rowWidth === DEFAULT_ROW_WIDTH) {
            return DEFAULT_ROW_WIDTH
        }

        if (Array.isArray(this.props.rowWidth)) {
            return this.props.rowWidth[index]
        }
        return this.props.rowWidth;
    }

    // 计算rowHeight
    getRowHeight(index: number) {
        if (this.props.rowProps) {
            if (Array.isArray(this.props.rowProps)) {
                return this.props.rowProps[index].height
            }
            return this.props.rowProps.height
        }

        if (Array.isArray(this.props.rowHeight)) {
            return this.props.rowHeight[index]
        }
        return this.props.rowHeight;
    }


    // 渲染头像
    renderAvatar() {
        if (!this.props.avatar) {
            return null;
        } else {
            let {prefixCls, avatarShape, avatarSize} = this.props;
            let avatarCls = classNames(`${prefixCls}-avatar`,
                {
                    [`${prefixCls}-avatar-round`]: avatarShape === 'round'
                });
            return (<div className={avatarCls} style={{
                width: this.addUnit(avatarSize),
                height: this.addUnit(avatarSize),
            }} />
            )
        }
    }

    // 渲染标题
    renderTitle() {
        if (this.props.title) {
            let {prefixCls, titleWidth} = this.props;
            const titleClas = classNames(`${prefixCls}-title`);
            return (<div className={titleClas} style={{
                width: this.addUnit(titleWidth)
            }}/>)
        } else {
            return null;
        }
    }

    // 渲染行数
    renderRows() {
        let {row, prefixCls} = this.props;
        const RowClas = classNames(`${prefixCls}-rows`);
        if (row) {
            let arr = new Array();
            for (let i = 0; i < row; i++) {
                arr.push(i);
            }
            const Rows = arr.map((item, index) => {
                return <div className={`${prefixCls}-row`}
                            key={item}
                            style={{
                                width: `${this.addUnit(this.getRowWidth(index))}`,
                                height: `${this.addUnit(this.getRowHeight(index))}`
                            }}
                />
            });

            return (
                <div className={RowClas}>
                    {Rows}
                </div>
            )
        } else {
            return null;
        }
    }

    // 渲染操作
    renderActions() {
        if (this.props.action) {
            let {prefixCls} = this.props;
            const actionClas = classNames(`${prefixCls}-action`);
            return (
                <div className={actionClas}/>
            )
        } else {
            return null;
        }
    }

    // 整理宽度和高度
    addUnit(value?: string | number) {
        return typeof value === 'number' ? value + 'px' : value
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {loading, children, prefixCls, animate} = this.props;
        if (!loading) {
            return <div>{children}</div>
        }
        const WrapClass = classNames(prefixCls, {[`${prefixCls}-animate`]: animate});
        return (
            <div className={WrapClass}>
                {this.renderAvatar()}
                <div className={`${prefixCls}-content`}>
                    {this.renderTitle()}
                    {this.renderRows()}
                </div>
                {this.renderActions()}
            </div>
        )
    }
}

export default Skeleton;
