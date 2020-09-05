import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import NavBar from './NavBar';
const Header = () => {
    var img="https://i.ibb.co/r0dFWNc/IMGBIN-globe-logo-breaking-news-png-Ps-Pty5-Vz.png";
    return (
        <div>
            <NavBar></NavBar>
            <div className="row justify-content-center align-items-center">
                <div style={{maxWidth:"500px"}} className="col-lg-6 col-md-6 col-sm-12">
                    <h1>BBC News</h1>
                    <h5 style={{fontWeight:"400"}}>
                    Death of Osama bin Laden
                    </h5>
                    <p className="text-justify">Osama bin Laden, the mastermind behind the September 11, 2001, terror attacks that killed thousands of Americans, has been killed in an operation led by the United States. Egyptian-born doctor and surgeon Ayman al-Zawahri, Al-Qaida's second-in-command, is expected to succeed Laden following his killing.</p>
                    <p>
                        <Button variant="primary" size="sm">Read More</Button>
                    </p>
                </div>
                <div className="col-lg-4 offset-lg-2 col-md-6 col-sm-12">
                <img src={img} style={{width:"500px"}}/>
                </div>
            </div>
        </div>
        
    );
};

export default Header;