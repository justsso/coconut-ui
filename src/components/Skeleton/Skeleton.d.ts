/**
 * @description
 * @author justsso
 */
interface RowProps {
    width: number | string,
    height: number | string
}

export default interface SkeletonProps {
    /**
     *
     */
    prefixCls?: string,
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
     * @description 段落占位图高度，可传数组设置每一行的高度
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
    children?: React.ReactNode,
}
