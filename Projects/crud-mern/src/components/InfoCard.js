import React from 'react';

const InfoCard = () => {
    return (
         
            <div className="info-card">
                <h5>Md. Zahidur Rahman</h5>
                <h6>01717783803</h6>
                <h6>zahid.mym@gmail.com</h6>
                <h6>Mohakhali, Dhaka</h6>
                <button className="btn btn-primary btn-sm">Update</button>
                <button className="btn btn-danger btn-sm ml-2">Delete</button>
            </div>
         
    );
};

export default InfoCard;