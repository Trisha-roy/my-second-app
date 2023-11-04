import { useEffect, useState } from "react"

export default function Posts(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return(
        <div>
        <h2>Posts: {posts.length}</h2>
        {
            posts.map(post=>)
        }
        
        
        </div>
    )
}