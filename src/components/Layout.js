import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


const userName = 'Liudmyla Kaniuk';
const userInitials = userName.split(' ')
    .map(part => part[0].toUpperCase()).join('');

const Layout = () => {
    return (
        <div className="main-layout">
            <nav className="header">
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="The Movie Database (TMDB)" width="200" height="40"/>
                <NavLink to="movies">movies</NavLink>
                <div className="search">
                    <button>Search</button>
                    <input type="text" placeholder="Enter film"/>
                </div>
                <div className="user">
                    <h4>Welcome!</h4>
                    <div className="avatar">{userInitials}</div>
                </div>
            </nav>
            <div className="content">

                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;