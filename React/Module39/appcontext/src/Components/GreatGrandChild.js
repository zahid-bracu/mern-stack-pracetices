
import React, { useContext } from 'react';
import {numValue} from '../App'

const GreatGrandChild = () => {
    const value=useContext(numValue);
    return (
        <div>
            <h3>Great Grand Child: {value}</h3>
        </div>
    );
};

export default GreatGrandChild;