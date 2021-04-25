import React from 'react'
import {connect} from 'react-redux';
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


function MyComponent({add,remove,data}) {
    console.log(data);

    function  addProducts() {
        var randomString=makeid(5);
        add(randomString);
    }

    return (
        <div>
            <h5>My Component</h5>
            <p>Using Connector & Map State to Props</p>
            <button onClick={()=>addProducts()}>Add data</button>
            <button onClick={()=>remove()}>remove data</button>
        </div>
    )
}

const mapStateToProps=(state)=> ({
    data: state.reducer.data
})


export default connect(mapStateToProps,{add,remove})(MyComponent);