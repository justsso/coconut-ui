import React, {useState} from "react";
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}
type propT = any
const transitionStyles : any= {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

const Fade = ({ in: inProp }: propT) => {

    let [inState, setInState] = useState(inProp)

    return(
    <Transition
        in={inState}
        timeout={duration}
        // mountOnEnter={true}
        appare={true}
        exit={false}
    >
        {state => {
            console.log(state)
            return (
            <div
                onClick={() => setInState(!inState)}
                style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}
            >
                I'm a fade Transition!
            </div>
        )}}
    </Transition>)
};

export default Fade
