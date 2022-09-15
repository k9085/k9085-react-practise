import React, {useEffect} from 'react';
import { useState, useEffect } from 'react/cjs/react.production.min';

UseeffectApi = () => {
    const [post , setPost] = useState([]);
    
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos").
        then((response) => console.log(response.data))
        .catch(err=>{
            console.log(err);
        })
    });
    
    
    return(
        <div>
            {post.map((p)=><li key={p.id}>{p.title}</li>)}
        </div>
    )
}
export default UseeffectApi;