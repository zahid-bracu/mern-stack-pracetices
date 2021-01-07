import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cartAction';

const initialState={
    cart:[]
}


const cardReducers=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newId=action.id;
            const newCart=[...state.cart,newId];
            return {cart:newCart}
        case REMOVE_FROM_CART:
            const id=action.id;
            const removedCart=state.cart.filter(item=>item !== id);
            return {cart:removedCart}
        default:
            return state;
    }
}