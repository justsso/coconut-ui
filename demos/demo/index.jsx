import React, {Component} from "react";
import './index.scss';
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
            height1: 0
        }
    }

    componentDidMount() {
        if (this.bodyRef.current) {
            console.log( this.bodyRef.current.paddingTop, 29292992)
            this.setState({height1: this.bodyRef.current.offsetHeight})
        }
    }

    onOpen() {
        //获取body高度

        let {isActive, height1} = this.state;
        if(isActive) {
            //执行关闭
            this.bodyRef.current.style.height = '0px'
        }else{
            //执行开启
            this.bodyRef.current.style.height = height1 + 'px';
        }

        this.setState({
            isActive: !isActive
        })
    }

    render() {
        let {isActive} = this.state;

        const collapseItemBodyCls = classNames('collapse-item__body', {
            // 'collapse-item__body_active': isActive,
            // 'collapse-item__body_inactive': !isActive,
        })


        return (
            <div>
                <div className="collapse">
                    <div className="collapse__item collapse-item">
                        <div className="collapse-item__title " onClick={this.onOpen}>
                            我是标题
                        </div>
                        <div className={collapseItemBodyCls} ref={this.bodyRef}>
                            <p>第一行第一行第一行第一行第一行</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {


                }}  >获取collapse body的高度</button>
            </div>
        )
    }
}

export default MyDemo;
