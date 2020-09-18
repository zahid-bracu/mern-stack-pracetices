import React from 'react';
import GreatGrandChild from './GreatGrandChild';

const GrandChild = () => {
    return (
        <div>
            <h3>Grand Child:</h3>
            <GreatGrandChild></GreatGrandChild>
        </div>
    );
};

export default GrandChild;