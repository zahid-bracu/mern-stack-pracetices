import React from 'react';

const UXUI = () => {
    return (
        <div className="container">
             <h5 className="text-center mt-3 mb-3">Important topics of UI UX</h5>
                <div className="row justify-content-center   ">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <h6>UX Topics</h6>
                        <ul className="list-unstyled">
                            <li>- Business Research</li>
                            <li>- User Research </li>
                            <li>- Competitor Research </li>
                            <li>- Usability Testing</li>
                        </ul>
                    </div>


                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <h6>UI Topics</h6>
                    <ul className="list-unstyled">
                        <li>- Color Theory</li>
                        <li>- Balance </li>
                        <li>- Contrast </li>
                        <li>- Grid System</li>
                        <li>- Typography</li>
                        <li>- Consistency</li>
                    </ul>

                    </div>
                </div>
        </div>
    );
};

export default UXUI;