import React, { useContext } from "react";
import {DataContext} from '../App'
import Cards from './Cards'

const Display = () => {
    const xyz = useContext(DataContext);
    console.log(xyz)
     
    return (
        <div className="row">
        {
            xyz.map(pd => <Cards item={pd}></Cards>)
        }
        </div>
    );
};

export default Display;