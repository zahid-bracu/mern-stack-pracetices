import React, {useState, createContext} from 'react';

export const RestaurantsContext=React.createContext();

 export default function RestaurantsContextProvider(props) {
     const [restaurants,setRestaurants]=useState();
     function testing(value){
         alert("The message is from beyond of ur limit.This is ur passed value spooky man value : "+value)
     }
     return (
         <RestaurantsContext.Provider value={[restaurants, setRestaurants,testing]}>
             {props.children}
         </RestaurantsContext.Provider>
     )
 }
 