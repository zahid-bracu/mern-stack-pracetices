import React from "react";
import './style.css';

const FooterPage = () => {
  return (

       
    <footer className="site-footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">portfolio-zahid-bracu.netlify.app<i>  CODE WANTS TO BE SIMPLE </i> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="https://portfolio-zahid-bracu.netlify.app/">Portfolio Link</a></li>
              <li><a href="https://github.com/zahid-bracu">Github Link</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/in/md-zahidur-rahman-54b3ba17b/">About Us</a></li>
              <li><a href="https://www.facebook.com/zahidur/">Contact Us</a></li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="https://portfolio-zahid-bracu.netlify.app/"> Zahid's Portfolio 2020</a>.
            </p>
          </div>

           
        </div>
      </div>
</footer>
  );
}

export default FooterPage;