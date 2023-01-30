import React, { useState,useEffect } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';


const Articles = () => {
    const [article,setArticle]=useState(null);
    useEffect(()=>{
        setTimeout(async()=>{
            const result=await fetch('https://jsonplaceholder.typicode.com/posts');
            const data=await result.json();
            setArticle(data);
        },5000)
    })
    return ( 
        <div className="articles">
            <h2>Articles</h2>
            {article && article.map(arti=>(
                <div className="article" key={arti.id}>
                    <h3>{arti.title}</h3>
                    <p>{arti.body}</p>
                </div>
            ))}
            {!article&&[1,2,3,4,5].map(n=><SkeletonArticle key={n} />)}
        </div>
     );
}
 
export default Articles;