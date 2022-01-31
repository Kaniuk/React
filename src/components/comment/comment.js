import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h2>Comment</h2>
            <div>postId:{comment.postId}</div>
            <div>id:{comment.id}</div>
            <div>name:{comment.name}</div>
            <div>email:{comment.email}</div>
            <div>body:{comment.body}</div>
        </div>
    );
};

export default Comment;