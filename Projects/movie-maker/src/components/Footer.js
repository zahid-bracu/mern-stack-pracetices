import React from 'react'
import './style.css';
import logo from './images/logo.png'
export default function Footer() {
    return (
        <div className=" footer   pt-4 pb-1">
            <div className="container">
            
                <div className="row justify-content-around align-items-center">

                <ul className=" col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled text-white">
                    <li>Career</li>
                    <li>Blog</li>
                    <li>News</li>
                </ul>

                <ul className=" col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled text-white">
                    <li>HBO Max</li>
                    <li>Disney+</li>
                    <li>Netflix</li>
                </ul>

                <ul className="col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled text-white">
                    <li>Advertising</li>
                    <li>Help</li>
                    <li>Condition of Use</li>
                </ul>

                <ul className="col-lg-3 col-md-6 col-sm-12 col-12 list-unstyled text-white">
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                </ul>

                </div>
                <img className="d-block mx-auto mt-4 mb-2" src={logo} style={{maxWidth:"50px",maxHeight:"50px"}}/>
                <p className="text-white text-center">Copyright &copy; Movie Maker 2021</p>
            </div>
        </div>
    )
}
