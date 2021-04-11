import React, {useState, createContext} from 'react';

export const RestaurantsContext=React.createContext();

 export default function RestaurantsContextProvider(props) {
     const [restaurants,setRestaurants]=useState();
     return (
         <RestaurantsContext.Provider value={[restaurants, setRestaurants]}>
             {props.children}
         </RestaurantsContext.Provider>
     )
 }
 