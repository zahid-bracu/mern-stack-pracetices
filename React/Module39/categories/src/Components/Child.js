import React, {useContext } from 'react';
import {contextValue} from '../App';
const Child = (props) => {
    const values = useContext(contextValue);
    console.log(values);
     
    return (
        <div>
             
        </div>
    );
};

export default Child;