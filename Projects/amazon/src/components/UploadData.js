import React from 'react';
import fakeData from './fakeData';
const UploadData = () => {

    console.log(fakeData);

    function uploadData(){
        fetch('http://localhost:3060/chunkProducts',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(fakeData)
        }).then(response => response.json())
        .then(json => {
            console.log(json.message)
            if(json.message=="Ok"){
                alert("A chunk of data has been added");
            }
        })
    }


    function deleteData() {
        fetch('http://localhost:3060/deleteAllProducts',{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({"message":"delete"})
        }).then(response => response.json())
        .then(json => {
            if(json.n>0){
                alert("All Data has been Deleted");
            }else{
                alert("No data has been deleted");
            }
        })
    }

    return (
        <div>
            <button onClick={uploadData} className="btn btn-info my-5 d-block mx-auto">Add Chunk of Data</button>
            <button onClick={deleteData} className="btn btn-danger my-5 d-block mx-auto">Delete All Data</button>
        </div>
    );
};

export default UploadData;