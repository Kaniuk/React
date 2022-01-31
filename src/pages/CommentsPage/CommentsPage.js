import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comments.slice";
import Comment from "../../components/comment/comment";
import './CommentsPage.css';


const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, []);

    return (
        <div className="comments">
            {status === 'pending' && <h2>Wait a minute</h2>}
            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;