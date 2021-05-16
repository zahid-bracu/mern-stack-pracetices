import React, {useEffect,useState} from 'react'

export default function Item(props) {
    const [items,setItems]=useState([]);
    const [datas,setDatas]=useState([]);
    const data=Object.keys(props.item);
    useEffect( () => {
         fetch('http://localhost:3060/')
            .then(response => response.json())
            .then(json => {
                setItems(json)
            })
    }, [])
 
    const array=data.map(i=>{
        const temp=items.filter(key=>key.key==i)
        return temp[0];
    })
    console.log(array);
    
    // task count add to the array
    // count multiply with price
    // total info set
    // ES6 Array higher Component Method revise and Study + related problem solve
    return (
        <div>
            
        </div>
    )
}
