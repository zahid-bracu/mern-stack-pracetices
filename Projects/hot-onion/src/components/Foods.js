import React, {useState, useEffect} from 'react';
import Data from './Data';
import FoodCart from './FoodCart';

const Foods = () => {
    const [data,setData]=useState([]);
    
     
    useEffect(() => {
        window.scrollTo(0, 0)
        setData(Data)
    }, [])
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center mt-5">
                    {
                        data.map(key => <FoodCart info={key}/>)
                    }
                </div>
        </div>
    );
};

export default Foods;