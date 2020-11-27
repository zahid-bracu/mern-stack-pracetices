
/*
Multiple state in single reducer with multiple different action
*/

// importing redux
const redux=require('redux');
const createStore=redux.createStore; // store initialize


// book action
const ADD_BOOK='ADD_BOOK';
const ADD_PEN='ADD_PEN';

function addBook(){
    return{
        type:ADD_BOOK
    }
}

function addPen(){
    return{
        type:ADD_PEN
    }
}

 

// value initial state
const initialState={
    book:10,
    pen:10
}

 

// reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_BOOK: return{
            ...state,
            book: state.book+1
        }
        case ADD_PEN: return{
            ...state,
            pen: state.pen+1
        }
    }
}

const store=createStore(reducer);
console.log("Initial State:", store.getState());
const result=store.subscribe=(()=>{
    console.log("Updated State",store.getState())
});

store.dispatch(addBook());
result();

store.dispatch(addPen());
result();