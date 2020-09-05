import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import NavBar from './NavBar';
const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Jumbotron>
                <div style={{maxWidth:"500px"}}>
                    <h1>BBC News</h1>
                    <h5 style={{fontWeight:"400"}}>
                    Death of Osama bin Laden
                    </h5>
                    <p className="text-justify">Osama bin Laden, the mastermind behind the September 11, 2001, terror attacks that killed thousands of Americans, has been killed in an operation led by the United States. Egyptian-born doctor and surgeon Ayman al-Zawahri, Al-Qaida's second-in-command, is expected to succeed Laden following his killing.</p>
                    <p>
                        <Button variant="primary" size="sm">Read More</Button>
                    </p>
                </div>
            </Jumbotron>
        </div>
        
    );
};

export default Header;