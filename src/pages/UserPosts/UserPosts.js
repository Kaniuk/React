import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";
import Post from "../../components/Post/Post";

const UserPosts = () => {
    const {userId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        usersService.getUserPosts(userId).then(data => setPosts([...data.data]));
    }, [userId]);
    return (
        <div>
            <h1>User posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPosts;