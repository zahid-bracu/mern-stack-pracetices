import React, {useEffect} from 'react';
import banner from './resource/banner.png'
import './style.css';
import {
    Link
  } from "react-router-dom";
import fakeData from './fakeData';
import HomeCard from './HomeCard';
import meeting from './resource/meeting.png';
import map from './resource/map.png';
import brand from './resource/brand.PNG';
const Home = () => {
    console.log(fakeData)
    return (
        <>
        <div className="container">
            
            
            <div className="row mb-5 justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12" style={{width:"90%",maxWidth:"500px"}}>
                    <h3 className="">Welcome to Rest Countries</h3>
                    
                    <h2 className="font-weight-bold" >Learn About Countries & Travel More</h2>
                    <p > <span className="bold">Rest Countries</span> is a open source API.Check & use this API mention below in your development sector</p>
                     <a target="_blank" href="https://restcountries.eu/rest/v2/all">
                        <button className="btn btn-success btn-sm mx-auto">
                            <span className="font-weight-bold">Check</span>
                        </button>
                        </a>
                    
                    
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <img className="home-bg" src={meeting} style={{width:"90%",maxWidth:"600px"}}/>
                </div>
            </div>


            {/* 2nd banner */}
            
            <div className="row mb-5 justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <img className="home-bg" src={map} style={{width:"90%",maxWidth:"300px"}}/>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 col-12" style={{width:"90%",maxWidth:"500px"}}>
                    <h3 className="bold">Rest Countries</h3>
                    <p className="text-justify">Rest Countries is a open source API.Check &
                    Lorem Ipsum is simply dummy  text of the printing and <span className="bold">Typesetting Industry</span> . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. The Rest Countries website is given below</p>
                     <a target="_blank" href="https://restcountries.eu/">
                        <button className="btn btn-success btn-sm mx-auto">
                            <span className="font-weight-bold">See More</span>
                        </button>
                    </a>
                    
                    
                </div>

                
            </div>

            <div>
                <img className="d-block mx-auto" style={{width:"95%",maxWidth:"900px"}} src={brand} />
            </div>


            {/* about us */}
            <div className="mb-5">
                <h4 className="text-center mb-3 bold">About Us</h4>
                <p className="text-justify mx-auto" style={{width:"96%",maxWidth:"1000px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div className="row justify-content-center align-items-center">
                 {
                     fakeData.map(key=> <HomeCard data={key} />)
                 }
            </div>

        </div>



        

          
        </>
    );
};

export default Home;