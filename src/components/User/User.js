import React from 'react';

import './User.css'

const User = (props) => {
    const {id, name, username, email} = props.user;
    return (
        <div>
            <div className='user'>{id}  {name} -- {username} -- {email}</div>
        </div>
    );
};

export default User;