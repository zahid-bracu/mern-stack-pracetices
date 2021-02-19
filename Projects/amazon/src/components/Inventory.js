import React, {useState,useContext,useEffect} from 'react';
import { Button,  Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
 
 

const AddProducts = () => {
    const [flag,setFlag]=useState(false);
    const [productInfo,setProductInfo]=useState({
        img:""
    });
    const [message,setMessage]=useState("");

    const [info,setInfo]=useState({});

    const camera="https://i.ibb.co/30GV2HF/camera-logo-hd-7126.png";
    const android="https://i.ibb.co/Dg1GtdG/pngkey-com-generic-smartphone-png-3778414.png";
    const laptop="https://i.ibb.co/5rnZHCX/laptop.png";

    function changeFunc(e){
        
        if(e.target.value!=""){
            var newInfo={...productInfo}
        
            console.log(e.target.name +" : "+e.target.value);
            
            newInfo[e.target.name]=e.target.value;
            if(e.target.name=="category"){
                if(e.target.value=="android"){
                    newInfo['img']=android;
                }else if(e.target.value=="laptop"){
                    newInfo['img']=laptop;
                }else if(e.target.value=="camera"){
                    newInfo['img']=camera;
                }
            }
            setFlag(true);
            setProductInfo(newInfo);
        }else{
            console.log("Nothing completed")
        }
        
    }

    let history = useHistory();
    function addProducts(){

         
        fetch('http://localhost:3010/addOne',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(productInfo)})
        .then(res=>res.json)
        .then(data=>{
            console.log("Data has been saved");
            history.replace("/datasaved");

        })
    }

    function submitFunc(e){
        e.preventDefault();
        if(productInfo.img){
            document.getElementById('cat-error').style.display="none";
            console.log(productInfo);
            addProducts();
        }else{
            document.getElementById('cat-error').style.display="block";
            console.log("Select product")
        }
    }
     

     
    return (
        
            <Form onSubmit={submitFunc}  className="mx-auto mt-5" style={{width:"90%",maxWidth:"25rem"}}>

            <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control onBlur={changeFunc} name="category" as="select">
                    <option value="" defaultChecked>Select</option>
                    <option value="android">Android</option>
                    <option value="laptop">Laptop</option>
                    <option value="camera">Camera</option>
                </Form.Control>
                <p class="text-danger" style={{display:"none"}} id="cat-error">Select your category first</p>
            </Form.Group>

            <Form.Group controlId="key">
                <Form.Label>Key</Form.Label>
                <Form.Control onBlur={changeFunc} name="key" type="text"   required/>
            </Form.Group>

            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control onBlur={changeFunc} name="name" type="text"   required/>
            </Form.Group>


            <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control onBlur={changeFunc} name="price" type="number"   required/>
            </Form.Group>


            <Form.Group controlId="seller">
                <Form.Label>Seller</Form.Label>
                <Form.Control onBlur={changeFunc} name="seller" type="text"   required/>
            </Form.Group>


            <Form.Group controlId="stock">
                <Form.Label>Stock</Form.Label>
                <Form.Control onBlur={changeFunc} name="stock" type="text"   required/>
            </Form.Group>

            
            <Button variant="primary" value="submit" type="submit">
                Submit
            </Button>
        </Form>

         
    );
};

export default AddProducts;