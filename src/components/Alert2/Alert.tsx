/**
 * @description
 * @author justsso
 */
import React,{useState} from "react"
import {List} from "../index";
// import AlertChild from "./AlertChild";
import ReactDOM from "react-dom";

interface childArrType{
    id:number,
    message:string
}

let isAddContainer= false;
let childArr:childArrType[]=[];
let childArrState:(value: (((prevState: childArrType[]) => childArrType[]) | childArrType[])) => void;

// function closeItem(id:number){
//     childArr.splice(id,1);
//     childArrState(childArr);
// }

function addItem(message:string){
    let id = childArr.length;
    let item = {
        id:id,
        message: message
    }

    childArr.push(item);
    childArrState(childArr);
}

function AlertContainer(){
    let [arr,arrState] = useState<childArrType[]>([]);
    return <div>
        <List dataSource={arr} renderItem={(item)=>{
            return <div>{item.message}</div>
        }
        }/>
        <button onClick={()=>{
            console.log(childArr);
            arrState([{message:"ffff",id:0}]);
        }
        }>hhhhh</button>
    </div>;
}

export default function addMessage(message:string){
    if(!isAddContainer){
        let container = <AlertContainer/>
        let div = document.createElement("div");
        document.body.appendChild(div);
        ReactDOM.render(container,div);
        isAddContainer = true;
    }
    addItem(message);
}
