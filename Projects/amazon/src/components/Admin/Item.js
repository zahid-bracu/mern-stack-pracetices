import React, {useEffect,useState} from 'react'

export default  function Item(props) {
    const {item,allProducts}=props;
    console.log(item);
    console.log(allProducts);
    // const [items,setItems]=useState([]);
    // const [products,setProducts]=useState();
    // console.log(props.item);
    // const prods=  props.item;
    // const data=  Object.keys(prods);
    // console.log(data);

    
    // useEffect( async () => {
        
    //        fetch('http://localhost:3060/')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(data);
    //             setItems(json);
                
    //         })
    // }, [])
 
    // const array=data.map(i=>{
    //     var temp=items.filter(key=>key.key==i)
    //     if(temp[0])
    //         temp[0].count=props.item[i];
    //     return temp[0];
    // })

    // console.log(products);
    

    return (
        <div>
        {/* <h1 className="text-center">{array.length}</h1> */}
        </div>
    )
}

 