import React, { useContext } from 'react';
import GrandChild from './GrandChild';
import {numValue} from '../App'

const Child = (props) => {
    const value=useContext(numValue);
    
    return (
        <div>
            <h3>Child : {value} </h3>
            <button onClick={()=>{props.setValue(value+1)}}>Increase</button>
            <GrandChild></GrandChild>
        </div>
    );
};

export default Child;