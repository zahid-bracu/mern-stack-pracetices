import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const News = () => {
    const [article,setArticle]=useState([])
    
    useEffect(()=>{
        fetch("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=14b59f1d71dc478ead98b301a833accc")
        .then(response => response.json())
        .then(data => setArticle(data.articles))
    },[])

    
    console.log(article.length);
    return (
            <div className="row">
                {
                    article.map(key=><Cart article={key}></Cart>)
                }
            </div>
    );
};

export default News;