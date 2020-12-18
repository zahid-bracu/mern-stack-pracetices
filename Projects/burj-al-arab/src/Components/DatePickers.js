import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
const DatePickers = () => {
     
    const [dates,selectDates]=useState({
        start:'',
        end:''
    })
    
    function handleStartDateChange(event){
        console.log(event.target.value) 
        var startdate=event.target.value;
        var newDate={...dates};
        newDate.start=startdate;
        selectDates(newDate)
    }


    function handleEndDateChange(event){
        console.log(event.target.value) 
        var enddate=event.target.value;
        var newDate={...dates};
        newDate.end=enddate;
        selectDates(newDate)
    }
    
    console.log(dates);
    return (
        <div className="container">
                <div className="row my-5 ">
                    <div className="col-md-6 col-6">
                        <h5 className="my-3 text-info">Confirm Check in & Check out dates</h5>
                        <Form.Group >
                            <Form.Label for="start">Select Check in Date</Form.Label>
                            <Form.Control id="start" onChange={handleStartDateChange} style={{width:"300px"}} type="date" name="dob" placeholder="Date of Birth" />

                            <div style={{height:"20px"}}> </div>

                            <Form.Label for="end">Select Check out Date</Form.Label>
                            <Form.Control id="end" onChange={handleEndDateChange} style={{width:"300px"}} type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                        
                        <Link to="/booking"><button className="btn btn-info">Go to Booking page</button></Link>
                        
                     </div>

                    
                </div>
            </div>
    );
};

export default DatePickers;