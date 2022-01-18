import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {postService} from "../../services/posts.service";
import Post from "../../components/Post/Post";
import css from './PostsPage.modules.css';


const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]));

    }, []);
    return (
        <div className="row">
            <div className={css.post}>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post} hasNestedRoute/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;