/**
 * @description
 * @author justsso
 */
export const skeletonPropsData = [
    ["参数", "说明", "类型", "可选值", "默认值"],
    ["row", "段落占位图行数", "number", "--", "0"],
    ["rowWidth", "段落占位图高度，可传数组设置每一行的高度", "number | string | (number | string)[]", "--", "true"],
    ["rowHeight", "用于定制 row 的宽跟高，可传数组用来设置每一行的宽跟高，如果配置了该属性，则 rowWidth 配置无效", "number | string | (number | string)[]", "true false", "true"],
    ["rowProps", "子组件内容", "RowProps | RowProps[]", "true false", "true"],
    ["loading", "是否展示占位图，为`false`时，显示子组件", "boolean", "--", "--"],
    ["title", "是否显示标题占位图", "boolean", "--", "--"],
    ["titleWidth", "标题占位图的宽度", "string | number", ""],
    ["avatar", "是否显示头像占位图", "boolean"],
    ["avatarSize", "头像的大小", "number"],
    ["avatarShape", "头像占位图的形状,默认是round", "'round' | 'square'"],
    ["action", "是否显示右侧操作按钮占位图", "boolean"],
    ["animate", "是否显示动画", "boolean"],
]

export const RowPropsData = [
    ["参数", "说明", "类型", "可选值", "默认值"],
    ["width", "宽度", "number | string", "", ""],
    ["height", "高度", "number | string", "", ""]
]
