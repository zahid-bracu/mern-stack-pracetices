import React, { useEffect, useState } from 'react';
import Display from './Display';

const Post = () => {
    const [data,setData]=useState([]);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
        const datas=json.slice(0,30)
        setData(datas);
        })


        
    },[]);

     
    return (
        <div className="row container-fluid">
            {
                data.map(pd=> <Display  key={pd.id} data={pd}></Display>)
            }
        </div>
    );
};

export default Post;