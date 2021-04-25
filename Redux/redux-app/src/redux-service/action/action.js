import {add_data,remove_data} from '../type';

export const add=(value)=>{
    return{
        type:add_data,
        payload:value
    }
}


export const remove=()=>{
    return{
        type:remove_data
    }
}