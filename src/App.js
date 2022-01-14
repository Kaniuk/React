import React, {useEffect, useState} from 'react';

import './App.css';
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";
import UsersFilter from "./components/UsersFilter/UsersFilter";


const App = () => {
    const [users, setUsers] = useState([]);
    const [usersFilters, setUsersFilters] = useState({
        name: '',
        username: '',
        email: '',
    });

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);

    let filteredUsers = users;
    if (usersFilters.name) {
        filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(usersFilters.name.toLowerCase()));
    }  if (usersFilters.username) {
        filteredUsers = filteredUsers.filter(user => user.username.toLowerCase().includes(usersFilters.username.toLowerCase()));
    }  if (usersFilters.email) {
        filteredUsers = filteredUsers.filter(user => user.email.toLowerCase().includes(usersFilters.email.toLowerCase()));
    }
    return (
        <div>
            <UsersFilter applyFilters={setUsersFilters}/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;