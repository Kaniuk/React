import React from 'react';
import {Link} from "react-router-dom";

const User = (props) => {
    const {id, name, username} = props.user;
    return (
        <div>
            <Link to={id.toString()} state={props.user}>{id} - name:{name} - username: {username} </Link>
        </div>
    );
};

export default User;