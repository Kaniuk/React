import React from 'react';
import {NavLink} from "react-router-dom";

const Post = ({post, hasNestedRoute}) => {
    const {id, title,userId,body} = post;

    return (
        <div>
            {hasNestedRoute
                ? <NavLink to={id.toString()} state={post}>title:{title}</NavLink>
                : `id:${id} 
                    userId:${userId} 
                    body:${body}
                    title:${title}`}
        </div>
    );
};

export default Post;