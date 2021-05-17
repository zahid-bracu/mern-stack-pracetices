import React, {useEffect,useState} from 'react'
import ItemCard from './ItemCard';

export default  function Item(props) {
     
    const {item,allProducts}=props;
    
    const data=  Object.keys(item);
    
    if(allProducts.length>0 && data.length>0){
        var array=data.map(i=>{
            var temp=allProducts.filter(key=>key.key==i)
            if(temp[0])
                temp[0].count=props.item[i];
            return temp[0];
        });
    }
 
 
    

    // console.log(products);
    

    return (
        <div className="mt-5">
            <hr/>
        <h4 className="text-center text-danger">Order Details</h4>
        <hr/>
        <div className="row justify-content-center align-items-center">
        {
           array  && array.map(key=> <ItemCard  details={key}/>)
        }
        {
           !array  && <h1 className="text-center">Loading</h1>
        }
        </div>
        </div>
    )
}

 