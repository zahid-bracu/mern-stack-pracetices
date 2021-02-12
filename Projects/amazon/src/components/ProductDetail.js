import React,{useState,useContext,useEffect}  from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import fakaData from './fakeData';
import {CartContext} from '../App';
const ProductDetail = (props) => {
    const [datas,setDatas]=useState([]);
    const [cart,setCart]=useContext(CartContext);
    const {id}=useParams();
    console.log(id);
     

    useEffect(() => {
        fetch('http://localhost:3010/info')
        .then(response => response.json())
        .then(json => {
            const prod=json.find(i=> i.key === id);
            console.log(prod);
            setDatas(prod)
        })
    }, [])

    console.log(datas);
    let history = useHistory();
    
    function goBack(){
        history.goBack();
    }


     

    return (
        <>
            <div className="container">
            <div className="row align-items-center mt-5">
                <div   className="col-lg-3 col-md-12 col-sm-12 col-12 my-4">
                    <img style={{maxWidth:"100%"}} className="d-block" src={datas.img}  />
                </div>
                <div style={{maxWidth:"400px" }} className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <h5>{datas.name}</h5>
                    <h6>Category : {datas.category}</h6>
                    <h6>Seller : {datas.seller}</h6>
                    <h6>Products in Stock : {datas.stock} items</h6>
                    <h5>Price : {datas.price}$</h5>
                    <button className="btn btn-secondary" disabled><del>Add to Cart</del></button>
                
                   <button onClick={()=>goBack()}  className="btn btn-success ml-3">Back</button>
                   
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductDetail;