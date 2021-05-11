import {users_request,get_users_failed,get_users_success} from '../type';
import axios from 'axios';




export const userList =  ()=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:users_request
            })
            const res= await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(res);
            dispatch({
                type:get_users_success,
                payload:res
            })
        }catch(error){
            dispatch({
                type:get_users_failed,
                payload:error.message
            })
        }
    }
}