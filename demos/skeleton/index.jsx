/**
 * @description
 * @author justsso
 */
import React, {useState, useEffect} from "react";
import {Skeleton} from "../../src/components";
import {skeletonPropsData, RowPropsData} from './data';
import CodeView from "../Common/CodeView";
import CodeMirror from "codemirror/src/edit/CodeMirror";


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
            <h2>Skeleton骨架屏</h2>
            <h4>avatar avatarShape 设置头像</h4>
            <CodeView>
                <Skeleton
                    loading={true}
                    title={false}
                    avatar avatarShape="square"
                    action={false}
                />
            </CodeView>

            <h4>设置avatar title， 自定义title 宽度</h4>
            <CodeView>
                <Skeleton title={true} titleWidth={120} loading avatar={true}/>
            </CodeView>
            <h4>设置avatar title action</h4>
            <CodeView>
                <Skeleton avatar avatarShape="round" title={true} action={true}/>
            </CodeView>
            <h4>设置row row=3, action</h4>
            <CodeView>
                <Skeleton avatar row={3} action title/>
            </CodeView>

            <h4>设置 rowWidth 属性，可以是数组，也可是是单个值rowWidth=80%</h4>
            <CodeView>
                <Skeleton avatar row={2} rowWidth="80%"/>
            </CodeView>

            <h4>设置 rowWidth 属性，可以是数组rowWidth={['100%', '80%']}，也可是是单个值</h4>
            <CodeView>
                <Skeleton avatar row={2} rowWidth={['100%', '80%']}/>
            </CodeView>
            <h4>设置 rowProps, rowProps 可以是对象，也可以是对象数组</h4>
            <CodeView>
                <Skeleton avatar row={2} rowProps={{width: '100%', height: '14px'}}/>
                <Skeleton avatar action row={2} rowProps={[{width: '40%', height: 10}, {width: '80%', height: 10}]}/>
            </CodeView>
            <h4>动画: animate</h4>
            <CodeView>
                <Skeleton animate avatar row={2} title
                          rowProps={[{width: '40%', height: 10}, {width: '80%', height: 10}]}
                          action/>
            </CodeView>
            <h4>设置loading, loading为false 显示子元素，该例子中loading 3s 之后变成false</h4>
            <CodeView>
                <Skeleton animate avatar title row={1} action loading={loading}>
                    <div>我是内容, 可
                        以刷新等待3s，查看此处变化
                    </div>
                </Skeleton>
            </CodeView>
            <h2>API</h2>
            <h3>
                Skeleton
            </h3>
            <div>
                <table>
                    <tbody>
                    {skeletonPropsData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {item.map((td_item, td_index) => {
                                    return <td key={td_index}>{td_item}</td>;
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <h3>
                RowProps
            </h3>
            <div>
                <table>
                    <tbody>
                    {RowPropsData.map((item, index) => {
                        return (
                            <tr key={index}>
                                {item.map((td_item, td_index) => {
                                    return <td key={td_index}>{td_item}</td>;
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Demo
