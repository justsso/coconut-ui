/**
 * @description
 * @author justsso
 */
import React, {useState, useEffect} from "react";
import {Skeleton} from "../../src/components";


const Demo = () => {
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <div>
            <h6>设置头像</h6>
            <Skeleton
                loading={true}
                title={false}
                avatar avatarShape="square"
                action={false}
            />
            <h6>设置avatar title， 自定义title 宽度</h6>
            <Skeleton title={true} titleWidth={120} loading avatar={true}/>

            <h6>设置avatar title action</h6>
            <Skeleton avatar avatarShape="round" title={true} action={true}/>

            <h6>设置row row=3, action</h6>
            <Skeleton avatar row={3} action title/>


            <h6>设置 rowWidth 属性，可以是数组，也可是是单个值rowWidth=80%</h6>
            <Skeleton avatar row={2} rowWidth="80%"/>


            <h6>设置 rowWidth 属性，可以是数组rowWidth={['100%', '80%']}，也可是是单个值</h6>
            <Skeleton avatar row={2} rowWidth={['100%', '80%']}/>

            <h6>设置 rowProps, rowProps 可以是对象，也可以是对象数组</h6>
            <Skeleton avatar row={2} rowProps={{width: '100%', height: '14px'}}/>

            <Skeleton avatar action row={2} rowProps={[{width: '40%', height: 10}, {width: '80%', height: 10}]}/>
            <h6>动画: animate</h6>
            <Skeleton animate avatar row={2} title rowProps={[{width: '40%', height: 10}, {width: '80%', height: 10}]}
                      action/>

            <h6>设置loading, loading为false 显示子元素，该例子中loading 3s 之后变成false</h6>
            <Skeleton animate avatar title row={1} action loading={loading}>
                <div>我是内容, 可
                    以刷新等待3s，查看此处变化
                </div>
            </Skeleton>
        </div>
    )
}
export default Demo
