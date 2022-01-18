import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css';


const Layout = () => (
    <div>
        <div className={css.header}>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </div>
        <div className="content">
            <div className={css.outlet}>
                <Outlet/>
            </div>

        </div>
    </div>
);

export default Layout;