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
        <div className="col-3">
            <Link to={"/form/"+key}>
              <img src={photo} className="img-display" onMouseEnter={()=>display(key)}  style={{width:"250px"}}/>
                <h2 className="name-header">{name}</h2>
            </Link>
            
        </div>
    );
};

export default ImageDisplay;