import React, {useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
const Saved = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="container">
            <h2 className="text-center mt-5">Saved Successfully</h2>
            <div className="d-block mx-auto" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    
                    <Link style={{textDecoration:"inherit"}} to="/contact">
                        <button className="btn btn-primary d-block my-2 mx-auto">Show All Contacts</button>
                    </Link>
                    
                    <Link style={{textDecoration:"inherit"}} to="/form">
                            <button className="btn btn-success text-white my-2 d-block mx-auto">Add New Contact</button>
                    </Link>
                    
                    <Link style={{textDecoration:"inherit"}} to="/home">
                        <button className="btn btn-secondary text-white my-2 px-4 d-block mx-auto">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Saved;