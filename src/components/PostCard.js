import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard(props){
    const { post } = props;
    console.log(post);
    return (
        <div className='col-6 col-sm-4'>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{ post.name }</h5>
                <p className="card-text">{ post.body }</p>
                <Link to={`/post/${post.id}`} className="btn btn-primary">Edit Post </Link>
                </div>
            </div>
        </div>
    )
}