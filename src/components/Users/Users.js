import React from 'react';

import User from "../User/User";


const Users = (props) => {
    const {users} = props;
debugger

    return (
        <div>
            {users.map(user =>
                <User key={user.id}
                      user={user}/>
            )}
        </div>
    );
};

export default Users;