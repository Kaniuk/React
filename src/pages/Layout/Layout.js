import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css';

const navLinks = [{
    path: 'cat',
    title: 'CAT',
}, {
    path: 'dog',
    title: 'DOG',
}, {
    path: 'paris',
    title: 'PARIS',
}, {
    path: 'ukraine',
    title: 'UKRAINE',
}, {
    path: 'chernivtsi',
    title: 'CHERNIVTSI',
}, {
    path: 'birds',
    title: 'BIRDS',
}, {
    path: 'car',
    title: 'CAR',
}


];


const Layout = () => {


    return (
        <div className="main-layout">
            <div className="navbar">
                {navLinks.map(link => (
                    <NavLink to={link.path}>
                        <button className="buttons">{link.title}</button>
                    </NavLink>
                ))}
            </div>
            <div className="content">

                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;