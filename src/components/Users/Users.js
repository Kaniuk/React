import React, {useEffect, useState} from 'react';

import User from "../User/User";
import Posts from "../Posts/Posts";

import {userService} from "../../services/user.services";
import UserDetails from "../UserDetails/UserDetails";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);

    const getUserById = (id) => {
        userService.getById(id)
            .then(value => {
                setUser(value);
                setUserPosts([]);
            });
    };

    const getUserPosts = (id) => {
        userService.getCommentsById(id)
            .then(value => setUserPosts(value));
    };
    return (
        <div className="column">
            <div className="row">
                <div className='users'>{
                    users.map(user =>
                        <User key={user.id}
                              user={user}
                              getUserById={getUserById}/>
                    )}</div>

                {user && (
                    <UserDetails user={user} getUserPosts={getUserPosts}/>
                )}
            </div>
            <div>
                {userPosts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default Users;