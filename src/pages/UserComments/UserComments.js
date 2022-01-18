import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/posts.service";
import Comment from "../../components/Comment/Comment";

const UserComments = () => {
    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getPostComments(id).then(data => setComments([...data.data]));
    }, [id]);
    return (
        <div>
            <h1>User comments</h1>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default UserComments;