import React from 'react';
import android from './images/android.png';
import laptop from './images/laptop.png';
import camera from './images/camera.png';
const CollectionCategory = () => {
    return (
        <div className="container">
            
                <div className="row justify-content-center align-items-center">
                    <div className=" row  align-items-center box box-1">
                        <div className="col-6">
                            <h4 className="text-white">Android</h4>
                        </div>
                        <div className="col-6">
                            <img  src={android} style={{width:"150%"}}/>
                        </div>
                    </div>

                <div className=" row  align-items-center box box-2">
                        <div className="col-6">
                            <h4 className="text-white">Laptop</h4>
                        </div>
                        <div className="col-6">
                            <img  src={laptop} style={{width:"150%"}}/>
                        </div>
                </div>

                <div className=" row  align-items-center box box-3">
                        <div className="col-6">
                            <h4 className="text-white">Camera</h4>
                        </div>
                        <div className="col-5 offset-1">
                            <img  src={camera} style={{width:"150%"}}/>
                        </div>
                </div>
                </div>
             
        </div>
    );
};

export default CollectionCategory;