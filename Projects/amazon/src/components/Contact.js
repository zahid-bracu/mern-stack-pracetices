import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <h4 className="text-center mt-5 text-danger">Contact Page</h4>
            <h4>
            <ul className="list-unstyled">
                <li className="my-2"><a style={{textDecoration:"none",cursor:"pointer"}} href="https://github.com/zahid-bracu" target="_blank">Github</a></li>
                <li className="my-2"><a style={{textDecoration:"none"}}  href="https://www.instagram.com/zaheed_rahman/" target="_blank">Instagram</a></li>
                <li className="my-2"><a style={{textDecoration:"none"}} href="" target="_blank">Portfolio</a></li>
                <li><a style={{textDecoration:"none",cursor:"pointer"}}>Mobile : +8801717783803</a></li>
            </ul>
            </h4>
        </div>
    );
};

export default Contact;