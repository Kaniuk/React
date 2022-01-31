import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/users.slice";
import User from "../../components/user/user";
import './UsersPage.css';

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state['usersReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className="users">
            {status === 'pending' && <h2>Wait a minute</h2>}
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;