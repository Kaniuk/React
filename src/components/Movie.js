import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import './Movie.css';

const Movie = (props) => {
    const {
        id,
        overview,
        backdrop_path,
        genre_ids,
        release_date,
        title,
        vote_average
    } = props.movie;

    const genreNamesMap = useSelector(state => state.genres.genreNamesMap);

    return (
        <div className="movie">
            <div className="movie-title">{title}</div>
            <div className="movie-element">

                <NavLink to={`/movies/${id}`}><img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`} alt="backdrop"/>
                </NavLink>

                <div className="info">
                    <div className="genres">
                        <img src={`https://cdn-icons-png.flaticon.com/512/31/31087.png`} alt="genres" width="30"
                             height="30"/>
                        {genre_ids.map(id => <div key={id}>{genreNamesMap[id]}</div>)}
                        <div>vote average:{vote_average}</div>
                    </div>

                    <div className="overview">{overview}</div>
                    <div>release:{release_date}</div>
                </div>
            </div>
        </div>
    );
};

export default Movie;