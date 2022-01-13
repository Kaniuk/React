import React from 'react';

const User = (props) => {
    const {getUserById, user} = props;
    const {id, name, surname, email} = user;
    return (
        <div className='item'>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>email:{email}</div>
                <button onClick={() => getUserById(id)}>get info</button>
            </div>
    );
};

export default User;