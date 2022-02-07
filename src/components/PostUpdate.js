import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostUpdate(props) {
    const { postId }  = useParams();
    const [post, setPost] = useState ({}) 
    useEffect(() =>{
        fetch(`https://localhost:5000/api/post/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data)) 
    }, [])

    const handleDelete= () => {
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${props.token}`)

        fetch(`https://localhost:5000/api/post/${postId}`, {
            method: 'DELETE',
            headers: myHeaders
        }).then(res=> res.json())
        .then(data => console.log(data))

    }

    return (
        <>
            <div>Post Update</div>
            <div className="card ">
                <div className="card-body">
                <h5 className="card-title">{ post.name }</h5>
                <p className="card-text">{ post.body }</p>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}