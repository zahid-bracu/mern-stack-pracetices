// importing redux
const redux=require('redux');
const createStore=redux.createStore; // store initialize
const combineReducer=redux.combineReducers; //combine reducer


// action
const  ITEM_ADD='ITEM_ADD';
function addItem(){
    return{
        type:ITEM_ADD,
    }
}

// action 2
const  ITEM_SUBTRACT='ITEM_SUBTRACT';
function subtractItem(){
    return{
        type:ITEM_SUBTRACT,
    }
}

// action 3
const  ITEM_DOUBLE='ITEM_DOUBLE';
function doubleItem(){
    return{
        type:ITEM_DOUBLE,
    }
}

 


// value initial state
const initialBook={
    book:10
}

const initialPen={
    pen:10
}


// book reducer
const bookReducer= (state=initialBook, action)=>{
    switch(action.type){
        case ITEM_ADD: return{
            ...state,
            book: state.book+1
        }

        case ITEM_SUBTRACT: return{
            ...state,
            book: state.book-1
        }

        case ITEM_DOUBLE: return{
            ...state,
            book: state.book*2
        }
        default: return state;
    }
}



//  pen reducer
const penReducer= (state=initialPen, action)=>{
    switch(action.type){
        case ITEM_ADD: return{
            ...state,
         
            pen: state.pen+2
        }

        case ITEM_SUBTRACT: return{
            ...state,
        
            pen: state.pen-2
        }

        case ITEM_DOUBLE: return{
            ...state,
         
            pen: state.pen*2
        }
        default: return state;
    }
}

// pen store
const penStore = createStore(penReducer);
console.log("Initial State : ", penStore.getState());

const penResult=penStore.subscribe=(()=>{
    console.log('Update State', penStore.getState())
});


penStore.dispatch(addItem());
penResult();


penStore.dispatch(subtractItem());
penResult();


penStore.dispatch(doubleItem());
penResult();


// book store
const bookStore = createStore(bookReducer);
console.log("Initial State : ", bookStore.getState());

const bookResult=bookStore.subscribe=(()=>{
    console.log('Update State', bookStore.getState())
});


bookStore.dispatch(addItem());
bookResult();


bookStore.dispatch(subtractItem());
bookResult();


bookStore.dispatch(doubleItem());
bookResult();
