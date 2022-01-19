import React from 'react';
import {Link} from "react-router-dom";

const Album = (props) => {
    const {userId,id,title} = props.album
    return (
        <div>
            <Link to={`${id}/photos`}><h2>Album</h2></Link>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
        </div>
    );
};

export default Album;