import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {userList} from '../state-managment/actions/userAction';
 

function User({userList,loading,user,error}) {
    
    useEffect(() => {
         userList();
      },[]);

       console.log(user);
    return (
        <div>
            <h5>Check the Redux toolkit for details data</h5>
            {
                user.map(key=><p>{key.name}</p>)
            }
        </div>
    )
}

const mapStateToProps=(state)=>({
    loading:state.userReducer.loading,
    user:state.userReducer.user,
    error:state.userReducer.error
})

export default connect(mapStateToProps,{userList})(User);