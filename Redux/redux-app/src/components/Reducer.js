export const initialState={count:0};

export const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREASE':
            return {count : state.count + 1}
            break;
        case 'DECREASE':
            return {count : state.count - 1}
            break;
        default:
            return state;
    }
}