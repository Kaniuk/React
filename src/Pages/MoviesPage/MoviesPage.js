import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Select from 'react-select';

import {getAllMovies} from "../../store/movies.slice";
import Movie from "../../components/Movie";
import './MoviesPage.css';


const MoviesPage = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const {movies, pageInfo, status, error} = useSelector(state => state.movies);
    const genreNamesMap = useSelector(state => state.genres.genreNamesMap);
    const {total_pages} = pageInfo;
    const dispatch = useDispatch();
    const {page} = useParams();
    const currentPage = +(page ?? 1);

    useEffect(() => {
        const genreFilter = selectedGenres.map(option => option.value);
        dispatch(getAllMovies({page, genreFilter}));
    }, [page, selectedGenres]);

    const genresOptions = [];
    for (const genreId in genreNamesMap) {
        genresOptions.push({value: +genreId, label: genreNamesMap[genreId]});
    }

    return (
        <>
            <div className="genres-select">
                <Select
                    options={genresOptions}
                    isMulti
                    defaultValue={selectedGenres}
                    onChange={setSelectedGenres}
                    closeMenuOnSelect={false}
                />
            </div>
            <div className="movies-content">
                {status === 'loading' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className="pagination">
                {currentPage > 1 && (
                    <NavLink to={`/movies/page-${currentPage - 1}`}>
                        <button>PREVIOUS</button>
                    </NavLink>
                )}
                {total_pages && currentPage < total_pages && (
                    <NavLink to={`/movies/page-${currentPage + 1}`}>
                        <button>NEXT</button>
                    </NavLink>
                )}
            </div>
        </>

    );
};

export default MoviesPage;