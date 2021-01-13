import React, { useEffect, useState } from 'react';
import { Button,Card } from 'react-bootstrap';
import { ADD_TO_GROUP, addToGroup } from '../redux/actions/groupAction';
import InfoCard from './InfoCard';
import {connect} from 'react-redux';

const DataLoad = (props) => {
    console.log(props);

    const {addToGroup}=props
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setData(json)
        })
      },[]);
    return (
        <div className="container">
            <h4 className="text-center my-5">This is People</h4>
            <div className="row justify-content-center align-items-center">
                {
                    data.map(key=> <InfoCard addToGroup={addToGroup} datas={key}></InfoCard>)
                }
            </div>
        </div>
    );
};


const mapStateToProps= state=>{
    return {
        group: state.group,
        members: state.members
    }
}

const mapDispatchToProps={
    addToGroup: addToGroup
}


export default connect(mapStateToProps, mapDispatchToProps)(DataLoad);