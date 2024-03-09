import { useEffect, useState } from "react"

import Post from "./post"

export default function Posts(){

    const [posts, setposts]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setposts(data))
    },[])
    return (
        <div className="">
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}

/** Data load korte 5 ta step lage
 * 1.Create a state store the data
 * 2.create use effect no data 
 * 3.use to fetch load data
 * 
 */