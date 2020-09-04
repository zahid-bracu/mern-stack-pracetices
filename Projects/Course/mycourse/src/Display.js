import React, { useState } from "react";
import "./styles.css";
import {
  Card,
  Button
} from "react-bootstrap";

export default function Display(props) {
  const {name,id,tag,img}=props.Datas;
  const [price,setPrice]=useState();


    
   

  // function setPrices(value){
  //   if(price==null){
  //     var newValue=value+"$";
  //     setPrice(newValue);
  //     var buttons=document.querySelectorAll("#button");
  //     for(var i=0;i<buttons.length;i++){
  //       var item=buttons[i];
  //       item.addEventListener("click",function(e){
  //         e.target.innerText="Hide Price";
  //       });
  //     }
  //   }else{
  //     var temp=null;
  //     setPrice(temp);
  //     var buttons=document.querySelectorAll("#button");
  //     for(var i=0;i<buttons.length;i++){
  //       var item=buttons[i];
  //       item.addEventListener("click",function(e){
  //         e.target.innerText="Show Price";
  //       });
  //     }
  //   }
  // }

  document.getElementById("button").addEventListener('click',function(event){
    console.log(event.target.innerText);   
  });

  return (
      <Card className=" col-lg-6 col-md-6 col-sm-12 col-12 m-4" style={{maxWidth: '18rem' }}>
        <Card.Img variant="top" src={img} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {tag}
                </Card.Text>
                <Card.Text>
                <h6>{price}</h6>
                </Card.Text>
              
              <Button id="button"  className="my-2" style={{display:"block"}} variant="info" size="sm">Show Price</Button>
              <Button   onClick={()=> {props.addCart(props.Datas)}} variant="secondary" size="sm">Add to Cart</Button>
          </Card.Body>
      </Card>
  );
}
