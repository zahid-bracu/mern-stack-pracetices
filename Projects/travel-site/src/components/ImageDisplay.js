import React from 'react';

const ImageDisplay = (props) => {
    const {key,photo,name,description}=props.db;
    const {display,empty}=props;

    // onClick={()=>props.display(props.db.key)}
    return (
        <div className="col-3">
            <img src={photo} onMouseEnter={()=>display(key)}  style={{width:"250px"}}/>
        </div>
    );
};

export default ImageDisplay;