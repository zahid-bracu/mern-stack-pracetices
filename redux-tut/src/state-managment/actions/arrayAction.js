import {add_value,remove_value} from '../type';



export const add=(value)=>{
    return{
        type:add_value,
        payload:value
    }
}


export const remove=()=>{
    return{
        type:remove_value,
    }
}