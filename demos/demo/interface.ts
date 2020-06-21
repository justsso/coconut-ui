/**
 * @description
 * @author justsso
 */

interface CF {
    age?: number;
    color?: string;
    func1: (jkl: string)=> number;
    func2: (perps: number) =>string;
}

let A :CF = {
    func1: (jkl: string) => {
        return jkl.length
    },
    func2: (perps: number)=>{
        return perps.toString();
    }
}
A.age = 23
A.color = '#352'
