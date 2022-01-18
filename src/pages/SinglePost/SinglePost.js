import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/posts.service";
import './SinglePost.css'


const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }
        postService.getById(id).then(value => setPost({...value}));
    }, []);

    return (
        <>
            <div>
                {post && (

                    <div>
                        <h2>Post</h2>
                        <div>id:{post.id}</div>
                        <div>userId:{post.userId}</div>
                        <div>title:{post.title}</div>
                        <div>body:{post.body}</div>
                    </div>
                )}
                <div>
                    <Link to="comments">
                        <button>Show all comments</button>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
};

export default SinglePost;