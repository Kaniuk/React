import React from 'react';

const Comment = (props) => {
    const {postId,id,name,email,body} = props.comment
    return (
        <div className='item'>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>

        </div>
    );
};

export default Comment;