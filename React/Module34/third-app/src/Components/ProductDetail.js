import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {key}=useParams();
     
    return (
        <div>
            <h3>{key} Product Detail Coming Soon</h3>
        </div>
    );
};

export default ProductDetail;