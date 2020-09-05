import React, { useEffect, useState } from 'react';

const News = () => {
    const [article,setArticle]=useState([])
    useEffect(()=>{
         
        fetch("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=14b59f1d71dc478ead98b301a833accc")
        .then(response => response.json())
        .then(data => setArticle(data.articles))
    },[])

    console.log(article.length);
    return (
        <div>
            <h3>Total Article : {article.length}</h3>
        </div>
    );
};

export default News;