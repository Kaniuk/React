import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/movies.slice";
import Movie from "../../components/Movie";


const MoviesPage = () => {
    const {movies, status, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const {page} = useParams();
    const currentPage = +(page ?? 1);

    useEffect(() => {
        dispatch(getAllMovies({page}));
    }, [page]);

    return (
        <>
            <div className="movies-content">
                {status === 'loading' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className="pagination">
                <NavLink to={`/movies/page-${currentPage + 1}`}>NEXT</NavLink>
                <NavLink to={`/movies/page-${currentPage - 1}`}>PREVIOUS</NavLink>
            </div>
        </>

    );
};

export default MoviesPage;