import React from 'react';

const Post = (props) => {
const {userId,id,title,body} = props.post
    return (
        <div className='item'>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export default Post;