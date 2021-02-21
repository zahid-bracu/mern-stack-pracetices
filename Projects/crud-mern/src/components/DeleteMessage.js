import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const DeleteMessage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <h4 className="text-center my-5">Deleted Successfully</h4>


            <div className="d-block mx-auto mt-5" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    

                    
                    
                    
                        
                        <Link style={{textDecoration:"inherit"}} to="/contact">
                            <button className="btn btn-primary d-block my-2 mx-auto">Show All Contacts</button>
                        </Link>
                        <Link style={{textDecoration:"inherit"}} to="/form">
                            <button className="btn btn-secondary text-white my-2 d-block mx-auto">Add New Contact</button>
                        </Link>
                        
                    


                    <Link style={{textDecoration:"inherit"}} to="/home">
                        <button className="btn btn-success text-white my-2 px-4 d-block mx-auto">Back to Home</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default DeleteMessage;