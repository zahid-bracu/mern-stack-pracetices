/*


*/


const redux =require('redux'); // import redux
const createStore=redux.createStore; // import store


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


// result
const store = createStore(reducer);
console.log('Initial State : ', store.getState());

//result
const result=store.subscribe=(()=>{
    console.log("Updated Result : ", store.getState())
})

// dispatch
store.dispatch(action());
result();