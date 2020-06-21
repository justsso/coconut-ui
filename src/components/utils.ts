/**
 * @description
 * @author justsso
 */


// 节流，在一定时间内只响应第一次触发
export function throttle(fn: (e: any) => void, wait: number) {
    let lastTime = 0
    return function (...arg: any) {
        let nowTime = Date.now()
        if (nowTime - lastTime > wait) {
            fn.apply(undefined, arg)
        }
    }
}
