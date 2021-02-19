import React from 'react';
import submit from './images/submit.png';
import './style.css';
const Submitted = () => {

    return (
        <div>
            <img className="d-block mx-auto" style={{width:"100%",maxWidth:"600px"}} src={submit}/>        
        </div>
    );
};

export default Submitted;