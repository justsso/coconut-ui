export const ListData = [
    ["参数", "说明", "类型", "可选值", "默认值"],
    ["size", "大小", "string", "lg、sm、md", "--"],
    ["hover", "是否有hover效果", "boolean", "true、false", "false"],
    ["sortable", "是否可排序;传入的数据的方式必须是dataSource", "boolean", "true、false", "true"],
    ["loading", "是否加载中", "boolean", "true、false", "false"],
    ["onSort", "排序结束回调，排序后在回调函数中，做数据的逻辑排序，然后会自动渲染更新排序后的数据", "function({dragIndex: number,dragKey: string | number," +
    " enterIndex: number, enterKey: string | number}) => {}", "dragIndex是开始拖动时元素下标,enterIndex是最后进入元素的下标", "--"],
    ["dataSource", "数据源"],
    ["renderItem", "渲染的每一小项"],
    ["sortKey", "排序时必须要传入的，数据项中的key，唯一的", "", ""]
]
