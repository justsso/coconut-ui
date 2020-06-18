import React, {Component} from "react";
import './index.less';
import DD from './cnm';
import CollapseItem from "./CollapseItem";
import classNames from "classnames";
//使用BEM CSS命名规范来
//B block 页面上的模块
//E element 模块中的元素，不能单独使用；元素可以嵌套元素，但是，一个元素始终是块的元素，不是别的元素的一部分，所以block__ele1__ele2是不对的
//M modifier 状态


//-中划线作为连字符，比如Block模块得用2个单词描述，就可以用-连接
//B和E中间用__连接
//连接M状态用单下划线_

/**
 * 偏后端 运维 智能化运维
 * 数据中心 服务器
 * 比较偏业务？
 * 怎么定义挑战性：工作中遇到哪些麻烦问题。和业务场景相关，管理东西的规模，十万和百万需要的机器是不一样的。智能化运维。
 * 它们部门，纯服务器
 * hr说cdn 广告，但是后面cdn也有cdn团队
 *
 * 自己的职业规划：偏往上一层走，找一块地方，深入下去，比如 消息队列、数据库之类的
 * 语言是没问题的
 * 这个部门和自己的职业发展不是很有关联
 * 底层架构太范范了，他们部门更底层，部门主要是机器运维
 *
 */

class MyDemo extends Component {
    constructor(props) {
        super(props);
        this.onOpen = this.onOpen.bind(this)
        this.bodyRef = React.createRef()

        this.state = {
            isActive: true,
            height1: 0,
            open: false
        }

        this.toggleOpen = this.toggleOpen.bind(this)
    }

    componentDidMount() {
        let {isActive, open} = this.state;
        if (this.bodyRef.current) {
            if (isActive) {  //相当于初识的，由父元素传进来的
                if (open) {
                    console.log(this.bodyRef.current.scrollHeight, 50)
                    this.setState({height1: this.bodyRef.current.offsetHeight})
                    this.bodyRef.current.style.height = this.bodyRef.current.offsetHeight + 'px'
                } else {
                    this.bodyRef.current.style.height = 0 + 'px'
                }
            }
            this.setState({height1: this.bodyRef.current.offsetHeight})
        }
    }

    onOpen() {
        //获取body高度
        let {isActive, height1} = this.state;
        if (isActive) {
            //执行关闭
            this.bodyRef.current.style.height = '0px'
        } else {
            //执行开启
            this.bodyRef.current.style.height = height1 + 'px';
        }

        this.setState({
            isActive: !isActive
        })
    }

    toggleOpen() {
        let {open, height1} = this.state;
        // window.getComputedStyle(this.bodyRef.current)

        if (open) {
            // 执行关闭，写入height 行内样式
            this.bodyRef.current.style.height = '0px';
            let timer = setTimeout(() => {
                this.setState({
                    open: !open
                })
                clearTimeout(timer)
            }, 350)
        } else {
            //执行打开，有可能初识状态本来就是关闭的，所以这里分两种情况
            if (height1) {
                this.setState({
                    open: !open
                }, () => {
                    let timer = setTimeout(() => {
                        this.bodyRef.current.style.height = this.state.height1 + 'px';
                        clearTimeout(timer)
                    }, 50)
                })
            } else {
                //初识是关闭
                this.bodyRef.current.style.display = 'block';
                this.bodyRef.current.style.height = '';
                let height = this.bodyRef.current.offsetHeight
                console.log(height, 105)
                this.setState({
                    height1: height
                })
                this.bodyRef.current.style.height = '0px'
                this.setState({
                    open: !open
                }, () => {
                    this.bodyRef.current.style.height = this.state.height1 + 'px';
                })

            }
        }
    }

    render() {
        let {isActive, open} = this.state;

        const collapseItemBodyCls = classNames('collapse-item__body', {
            'collapse-item__body_active': open,
            'collapse-item__body_inactive': !open,
        })


        return (
            <div>
                <DD name={'hello13'} />
                <div className="collapse">
                    <div className="collapse__item collapse-item">
                        <div className="collapse-item__title " onClick={this.onOpen}>
                            我是标题
                        </div>
                        <div className={collapseItemBodyCls} ref={this.bodyRef} onTransitionEnd={() => {
                            console.log('transitionEnd事件')
                        }}
                             onTransitionEndCapture={() => {
                                 console.log('onTransitionEndCapture事件')
                             }}
                        >
                            <div className="collapse-item__bodyContent">
                                <p>第一行第一行第一行第一行第一行</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    let height = this.bodyRef.current.offsetHeight
                    console.log(height, 'height')
                    this.setState({
                        height1: height
                    })
                }}>获取collapse body的高度{this.state.height1} </button>
                <button onClick={this.toggleOpen}>关闭/打开
                </button>
            </div>
        )
    }
}

export default MyDemo;
