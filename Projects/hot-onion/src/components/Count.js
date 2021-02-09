import React from 'react';
import './style.css'
const Count = (props) => {
    const {count,setCount}=props;

    function decrease(value){
        if(value>=0){
            setCount(value);
        }
    }
    return (
        <div className="d-flex">
            <button className="btn btn-light" onClick={()=>setCount(count+1)}>+</button>
            <input type="text" className="form-control input-custom" id="number" Value={count}   />
            <button onClick={()=>decrease(count-1)} className="btn btn-light">-</button>
        </div>
    );
};

export default Count;