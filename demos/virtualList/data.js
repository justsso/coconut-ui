/**
 * @description
 * @author justsso
 */

export const virtualData = [
    ["参数", "说明", "类型", "可选值", "默认值"],
    ["itemSize", "每个小项的高度", "height", "--","--"],
    ["data","要渲染的大数据","any[]","--",""],
    ["containerHeight", "容器固定高度","number", "--", "--"],
    ["renderItem","每一个小项的渲染函数","(item: any, key: number) => React.ReactNode", "", ""],
    ["onReachBottom", "触底操作","() => void"],
    ["style", "自定义样式", "", "--", "--"],
    ["className", "自定义类名", "string[]", "--","--"]
]
