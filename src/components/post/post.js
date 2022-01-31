import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h2>Posts</h2>
            <div>id:{post.id}</div>
            <div>userId:{post.userId}</div>
            <div>body:{post.body}</div>
            <div>title:{post.title}</div>
        </div>
    );
};

export default Post;