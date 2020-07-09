/**
 * @description
 * @author justsso
 */
import * as React from 'react';
import classNames from "classnames";
import './style/index.less';

/**
 * @description rowProps 参数
 * @interface RowProps
 */
interface RowProps {
    width: number | string,
    height: number | string
}

const DEFAULT_ROW_WIDTH = '100%';

/**
 * @description 骨架屏组件参数
 * @author 小雅
 * @date 2019.8.26
 *
 */
interface Props {
    /**
     *
     */
    prefixClas?: string,
    /**
     * @description 段落占位图行数
     * @type: {number}
     */
    row?: number,
    /**
     * @description 是否展示占位图，为`false`时，显示子组件
     * @type boolean
     */
    loading?: boolean,
    /**
     * @description 是否显示标题占位图
     * @type boolean
     */
    title?: boolean,
    /**
     * @description 标题占位图的宽度
     * @type {(string|number)}
     *
     */
    titleWidth?: string | number,
    /**
     * @description 是否显示头像占位图
     * @type boolean
     */
    avatar?: boolean,
    /**
     * @description 头像的大小
     * @type number
     */
    avatarSize?: number,
    /**
     * @description 头像占位图的形状,默认是round
     * @type string
     */
    avatarShape?: 'round' | 'square',
    /**
     * @description 是否显示右侧操作按钮占位图
     * @type boolean
     */
    action?: boolean,
    /**
     * @description 是否显示动画
     * @type boolean
     */
    animate?: boolean,
    /**
     * @description 段落占位图宽度，可传数组设置每一行的宽度
     * @type number|string|(number|string)[]
     *
     */
    rowWidth?: number | string | (number | string)[],
    /**
     * @description 段落占位图高度，课传数组设置每一行的高度
     * @type number|string|(number|string)[]
     */
    rowHeight?: number | string | (number | string)[],
    /**
     * @description 用于定制 row 的宽跟高，可传数组用来设置每一行的宽跟高，如果配置了该属性，则 rowWidth 配置无效
     * @type {(RowProps| RowProps[])}
     */
    rowProps?: RowProps | RowProps[],
    /**
     * @description 子组件内容
     * @type
     */
    children?: JSX.Element,
}

class Skeleton extends React.Component<Props> {
    static defaultProps = {
        prefixClas: 'c-skeleton',
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
            let {prefixClas, avatarShape, avatarSize} = this.props;
            let avatarCls = classNames(`${prefixClas}-avatar`,
                {
                    [`${prefixClas}-avatar-round`]: avatarShape === 'round'
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
            let {prefixClas, titleWidth} = this.props;
            const titleClas = classNames(`${prefixClas}-title`);
            return (<div className={titleClas} style={{
                width: this.addUnit(titleWidth)
            }}/>)
        } else {
            return null;
        }
    }

    // 渲染行数
    renderRows() {
        let {row, prefixClas} = this.props;
        console.log(row, 142);
        const RowClas = classNames(`${prefixClas}-rows`);
        if (row) {
            let arr = new Array();
            for (let i = 0; i < row; i++) {
                arr.push(i);
            }
            console.log(arr.length, 146);
            const Rows = arr.map((item, index) => {
                return <div className={`${prefixClas}-row`}
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
            let {prefixClas} = this.props;
            const actionClas = classNames(`${prefixClas}-action`);
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
        let {loading, children, prefixClas, animate} = this.props;


        if (!loading) {
            return <div>{children}</div>
        }

        const WrapClass = classNames(prefixClas, {[`${prefixClas}-animate`]: animate});

        return (
            <div className={WrapClass}>
                {this.renderAvatar()}
                <div className={`${prefixClas}-content`}>
                    {this.renderTitle()}
                    {this.renderRows()}
                </div>
                {this.renderActions()}
            </div>
        )

    }
}

export default Skeleton;
