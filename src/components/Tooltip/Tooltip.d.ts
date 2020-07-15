/**
 * @description
 * @author justsso
 */
import {BasicProps} from "../@types/common";


interface TooltipPropsInterface extends BasicProps{
    content: string | React.ReactElement,
    trigger: 'hover' | 'foucs' | 'click',
    position: 'top' | 'bottom' | 'right' | 'left',
}

export default TooltipPropsInterface
