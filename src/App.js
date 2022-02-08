import React, {useEffect} from 'react';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';
import {useDispatch} from "react-redux";

import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import SingleMoviePage from "./Pages/SingleMoviePage/SingleMoviePage";
import {getAllGenres} from "./store/genres.slice";

import './App.css';
import './components/Layuot.css'
import Layout from "./components/Layout";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGenres());
    });

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="movies" element={<MoviesPage/>}/>
                <Route path="movies/:id" element={<SingleMoviePage/>}/>
                <Route path="movies/page-:page" element={<MoviesPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
