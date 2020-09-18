import React from 'react';
import GreatGreatChild from './GreatGreatChild';

const GrandChild = (props) => {
    return (
        <div>
            <h3>Grand Child Value: {props.value}</h3>
            <GreatGreatChild value={props.value}></GreatGreatChild>
        </div>   
    );};

export default GrandChild;