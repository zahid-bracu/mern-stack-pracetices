import React, {useEffect, useState} from 'react';
import Features from './Features';
import ImgMediaCard from './ImgMediaCard';
const Description = () => {
    
    const [data,setData]=useState([]);

    useEffect(() => {
         setData(Features);
    }, [])
    
    return (
        <>
        <div className="mt-3 container">
            <h3 className="text-center my-3">Why You Choose Us?</h3>
            <p className="text-justify d-block mx-auto" style={{maxWidth:"700px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
        </div>
        <div className="container">
        <div className="row justify-content-center align-items-center">
            {
                data.map(key=> <ImgMediaCard info={key}/>)
            }
        </div>
        </div>
        </>

    );
};

export default Description;