import React from 'react';
import { useParams } from 'react-router-dom';
import fakaData from '../fakeData';
import View from './View';
 


function ProductDetail(){
     const {pd}=useParams();  // dynamic key stored using useParams 
     const prod=fakaData.find(id=> id.key === pd); // dynamic key is checking using find & fetch the whole JSON object under the key
     console.log(prod);
    return (
        <div>
            <View product={prod}></View> {/*Dynamic Data is shown*/}
        </div>
    );
};

 

export default ProductDetail;