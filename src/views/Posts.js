import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';


export default function Post(props){
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://kekambas-blog.herokuapp.com/blog/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data);
            })
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            {posts.map((p, i) => <PostCard key={i} post={p} />)}
        </div>
    )
}




