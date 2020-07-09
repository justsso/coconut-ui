/**
 * @description
 * @author justsso
 */

import React from "react"
import {Icon} from "../index";
import classNames from "classnames";

const baseClassName = 'coconut-alert';

interface AlertChildProps {
    message:string,
    closeMethod:(id:number)=>void,
    id:number
}

export default function AlertChild(props:AlertChildProps){
    let message = props.message;
    let closeMethod = props.closeMethod;
    let myselfId  = props.id;
    const transitionCls = `${baseClassName}`;
    const cls = classNames({
        [`${baseClassName}-item-wrapper`]: true,
        [`${transitionCls}`]: true
    })
    const contentCls = classNames({
        [`${baseClassName}-item-content`]: true,
        [`${baseClassName}-item-content`]: true
    })
    setTimeout(()=>{
        closeMethod(myselfId);
    },1000);
    return<div className={cls}>
        <div className={contentCls}>
            <div className={`${baseClassName}-item-content-body`}>
                {message}
            </div>
            <div
                className={`${baseClassName}-item-content-close`}
                onClick={() => {
                    closeMethod(myselfId);
                }}
            >
                <Icon className={['icon-close', `${baseClassName}-item-content-close`]}
                      size='small'/>
            </div>
        </div>
    </div>
}
