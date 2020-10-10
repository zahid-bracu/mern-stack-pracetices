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
        <div className="row container-fluid mx-auto">
            {
                data.map(pd=> <Display className="col-12"   key={pd.id} data={pd}></Display>)
            }
        </div>
    );
};

export default Post;