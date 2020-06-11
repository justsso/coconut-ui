基础组件：
- [x] Button 按钮 react组件间 通信
- [x] Icon 图标 svg css  
- [ ] 气泡框 badge组件 css 定位定位
- [ ] 面包屑
- [ ] 下拉菜单 loooo o
- [ ] 分页  数据逻辑  ppppp
- [ ] tag  ppppp

form有关的组件 ， 防抖

- [ ] Switch  css定位
- [ ] Checkbox  div伪装 css定位
- [ ] 级联选择  动画
- [ ] Slider 拖拽 定位
- [ ] 日期选择
- [ ] 输入框  防xss攻击，防抖，文本溢出，省略号，placeholder，文本断行 word-break, white-space
- [ ] 上传   promise
- [ ] 树型选择 


- [ ] 表格table react底层渲染机制，怎么性能优化
- [ ] 树型表格  react底层渲染机制，怎么性能优化
- [ ] 拖拽表格  

数据展示：

- [ ] Collapse 折叠面板  动画
- [ ] 走马灯
- [ ] list
- [ ] card
- [ ] tabs

反馈类型：
- [ ] alert
- [ ] 全局toast
- [ ] 通知
- [ ] 进度条
- [ ] 骨架屏
- [ ] loading 


封装的组件
- [ ] 音乐播放组件
- [ ] 段落组件
- [ ] win日历
- [ ] 统计数值（带动画）
- [ ] 颜色选择器
- [ ] 虚拟滚动

布局的组件
- [ ] container模版
- [x] layout组件

目标：

- 按需加载
- 支持多语言 
-  换肤（黑暗模式）

考虑到适用场景：

2. 组件的性能优化：
    图片、懒加载 base64  => 多图，九宫格图片，图片预览
    防抖、  => input组件
    react最小重新加载
    一万个节点渲染，虚拟列表
    防止重复点击
    cdn
    
    
3. 安全性：防止XSS攻击 ， input 组件
7. 滚动事件要有节流，比如list组件 ，长列表优化
8. 设计模式，继承之类的，比如通知栏,全局toast
9. 底部弹出框  手势
10. css布局 定位 层叠上下文 对应的各类弹出框
11. setTimeout Promise  => 跑马灯
12. 涉及到react底层的渲染 => table组件
13. react 通信 => button组件

整体：
1. pc or 移动。pc
5. 支持多语言
6. 换肤
7. webpack打包，组件按需加载
