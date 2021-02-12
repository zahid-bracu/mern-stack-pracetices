import React from 'react';
import fakeData from './fakeData';
const UploadData = () => {

    console.log(fakeData);

    function uploadData(){
        fetch('http://localhost:3010/addProducts',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={uploadData} className="btn btn-info my-5 d-block mx-auto">Add Data to Database</button>
        </div>
    );
};

export default UploadData;