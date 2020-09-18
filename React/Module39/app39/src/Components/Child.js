import React from 'react';
import GrandChild from './GrandChild';

const Child = (props) => {
    

    return (
        <div>
            <h3>Child Value: {props.value}</h3>
            <GrandChild value={props.value}></GrandChild>
            <button onClick={()=> props.setValue(props.value+1)}>Increase</button>          
        </div>
    );
};

export default Child;