import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {add,remove} from '../redux-service/action/action'

function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}


function MyComponentTwo() {
    const data=useSelector(state=> state.reducer.data);
    const dispatch=useDispatch();
    console.log(data);

    function  addProducts() {
        var randomString=makeid(5);
        dispatch(add(randomString));
    }

    return (
        <div>
            <h5>My Component Two</h5>
            <p>Using  : Use Selector & Dispatch</p>
            <button onClick={()=>addProducts()}>Add data</button>
            <button onClick={()=>dispatch(remove())}>remove data</button>
        </div>
    )
}
 
export default MyComponentTwo;