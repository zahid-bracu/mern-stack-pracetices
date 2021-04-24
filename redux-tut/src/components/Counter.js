import React, {useState} from 'react'
import {connect} from 'react-redux';
import {increment,decrement} from '../state-managment/actions/actions';
 
 function Counter({increment,decrement,count}) {
    
    return (
        <div>
            <h3>Counter Value : {count}</h3>
            <button onClick={()=>increment(5)}>Increase </button>
            <button onClick={()=>decrement(5)}>Decrease</button>
        </div>
    )
}

const mapStateToProps=(state)=> ({
    count: state.reducer.count
})

export default connect(mapStateToProps,{increment,decrement})(Counter);