/*
Multiple state in single reducer with multiple action
*/

const redux= require('redux'); //importing redux
const createStore=redux.createStore; //creating store



// action 1
const COUNT_PERSON='COUNT_PERSON' // action name set
function countPerson(){ // action function
    return{
        type:COUNT_PERSON, //action name
        info:'first redux action'
    }
}


// action 1
const ADD_DOUBLE_PERSON='ADD_DOUBLE_PERSON' // action name set
function addDoublePerson(){ // action function
    return{
        type:ADD_DOUBLE_PERSON, //action name
        info:'3rd redux action'
    }
}

// action 1
const DISCOUNT_PERSON='DISCOUNT_PERSON'
function discountPerson(){
    return{
        type:DISCOUNT_PERSON, //action name
        info:'3rd redux action'
    }
}

// initial state
const initialState={
    numOfPeople:10, //state value property
    numOfWoman:20
}

// reducer
const reducer= (state = initialState, action)=>{ //reducer function //taking the initial value
    switch(action.type){ // switch case implement in reducer
        case COUNT_PERSON: return{  //check 
            ...state,
            numOfPeople: state.numOfPeople+1,
            numOfWoman: state.numOfWoman+2
        }

        case DISCOUNT_PERSON: return{
            ...state,
            numOfPeople: state.numOfPeople-1,
            numOfWoman: state.numOfWoman-2
        }

        case ADD_DOUBLE_PERSON: return{
            ...state,
            numOfPeople:state.numOfPeople*2,
            numOfWoman: state.numOfWoman*2
        }
        default: return state;
    }
}



// creating store
const store=createStore(reducer); // pass the reducer to the store
console.log("Initial State", store.getState()); // get the state value
const unsubscribe=store.subscribe=(()=> console.log('update state', store.getState())); //get the final state value

// dispatch
store.dispatch(countPerson());
unsubscribe();


store.dispatch(discountPerson());
unsubscribe();
store.dispatch(addDoublePerson());
unsubscribe();
