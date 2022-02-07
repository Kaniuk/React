import React from 'react';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';
import GenresPage from "./Pages/GenresPage/GenresPage";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import SingleMoviePage from "./Pages/SingleMoviePage/SingleMoviePage";
import UserPage from "./Pages/UserPage/UserPage";


const Layout = () => (
    <>
        <nav className="layout">
            <NavLink to="user">User</NavLink>
            <NavLink to="genres">Genres</NavLink>
            <NavLink to="movies">Movies</NavLink>
            <NavLink to="user">User info</NavLink>
        </nav>
        <Outlet/>
    </>
);


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="genres" element={<GenresPage/>}/>
                    <Route path="movies" element={<MoviesPage/>}>
                        <Route path=":id" element={<SingleMoviePage/>}/>
                    </Route>
                    <Route path="movies/page-:page" element={<MoviesPage/>}/>
                    <Route path="user" element={<UserPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
