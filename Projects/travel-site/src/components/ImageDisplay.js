import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import './style.css';

const ImageDisplay = (props) => {
    const {key,photo,name,description}=props.db;
    const {display,empty}=props;

    // onClick={()=>props.display(props.db.key)}
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center  ">
            <Link className="" style={{textDecoration:"inherit",color:"white"}} to={"/form/"+key}>
              <img src={photo} className="img-display mainBox" onMouseEnter={()=>display(key)}  style={{width:"230px"}}/>
                <h3  className="name-header">{name}</h3>
            </Link>
        </div>
    );
};

export default ImageDisplay;