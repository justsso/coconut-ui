/**
 * @description
 * @author justsso
 */
import './style/index.less';

class Alert {
    public static prefixCls = 'coconut';

    public static info(text: string, duration?:number, onClose?: () => void) {
        let root = document.body || document.documentElement;
        let newAlertDom = document.createElement('div');
        let newAlertContent = document.createElement('div');
        newAlertDom.className = `${this.prefixCls}-alert-item ${this.prefixCls}-alert-info`;
        newAlertContent.className = `${this.prefixCls}-alert-item-content`;
        newAlertContent.innerText = text;

        newAlertDom.appendChild(newAlertContent);
        console.log(duration, onClose)

        let wrap = document.getElementById(`${this.prefixCls}-alert-wrap`);
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.id = `${this.prefixCls}-alert-wrap`;
            root.appendChild(wrap)
            wrap.appendChild(newAlertDom);
        } else {
            wrap.appendChild(newAlertDom)
        }
    }

    public static success() {
        console.log('success')

    }
}


/**
 * Alert.info('bajdlkjak', 3000, () => {
 *
 * })
 *
 *
 * */
export default Alert;

