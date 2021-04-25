import {add_data,remove_data} from '../type';

const initialState={
    data:[]
}


export default function(state=initialState,action) {
   console.log(action.payload)
    switch(action.type){
        case add_data:
            const tempData=[...state.data,action.payload]
            return{data:tempData}     

        case remove_data:
            const tempDataTwo=[...state.data];
            console.log(tempDataTwo);
            tempDataTwo.shift();
            return{data:tempDataTwo}

        default:{return state}  ;
    }
}