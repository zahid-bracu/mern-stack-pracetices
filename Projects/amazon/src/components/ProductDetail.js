import React from 'react';
import { useParams, Link } from 'react-router-dom';
import fakaData from './fakeData';
const ProductDetail = (props) => {
    const {id}=useParams();
    console.log(id);
    const prod=fakaData.find(i=> i.key === id); 
    console.log(prod)

    return (
        <div className="container">
            <div className="row align-items-center mt-5">
                <div   className="col-lg-3 col-md-12 col-sm-12 col-12 my-4">
                    <img src={prod.img}  />
                </div>
                <div style={{maxWidth:"400px" }} className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <h5>{prod.name}</h5>
                    <h6>Category : {prod.category}</h6>
                    <h6>Seller : {prod.seller}</h6>
                    <h6>Products in Stock : {prod.stock} items</h6>
                    <h5>Price : {prod.price}$</h5>
                    <button className="btn btn-warning">Add to Cart</button>
                   <Link to="/shop">
                   <button className="btn btn-secondary ml-3">Back</button>
                   </Link> 
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;