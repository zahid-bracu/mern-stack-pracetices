const redux =require('redux');
const createStore=redux.createStore;


//action

const ACTION='ACTION';
function action(){
    return{
        type:ACTION
    }
}


// initial state
const initialstate={
    value:100
}


// reducer
const reducer=(state=initialstate, action)=>{
    switch(action.type){
        case ACTION: return{
            ...state,
            value:++state.value
        }
    }
}


const store = createStore(reducer);
console.log('Initial State : ', store.getState());
const result=store.subscribe=(()=>{
    console.log("Updated Result : ", store.getState())
})

store.dispatch(action());
result();