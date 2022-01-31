import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/posts.slice";
import Post from "../../components/post/post";
import "./PostsPage.css"

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div className='posts'>
            {status === 'pending' && <h2>Wait a minute</h2>}
            {error && <h2>{error}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;