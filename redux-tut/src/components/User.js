import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {userList} from '../state-managment/actions/userAction';
 

function User({userList,loading,user,error}) {
    
    useEffect(() => {
         userList();
      },[]);


    return (
        <div>
            <h5>Check the Redux toolkit for details data</h5>
            
        </div>
    )
}

const mapStateToProps=(state)=>({
    loading:state.userReducer.loading,
    user:state.userReducer.users,
    error:state.userReducer.error
})

export default connect(mapStateToProps,{userList})(User);