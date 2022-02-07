import React from 'react';
import {NavLink} from "react-router-dom";

const Movie = (props) => {
    const {id, overview,backdrop_path,genre_ids,original_language,original_title,popularity,poster_path,release_date,title,vote_average,vote_count} = props.movie;

    return (
        <div>
            <NavLink to={}>
                <div>id:{id}</div>
                <div>overview:{overview}</div>
                <div><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`} alt="backdrop"/>
                </div>
                <div>genre_ids:{genre_ids}</div>
                <div>original_language:{original_language}</div>
                <div>original_title:{original_title}</div>
                <div>popularity:{popularity}</div>
                <div><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt="poster"/></div>
                <div>release_date:{release_date}</div>
                <div>title:{title}</div>
                <div>vote_average:{vote_average}</div>
                <div>vote_count:{vote_count}</div>
            </NavLink>

        </div>
    );
};

export default Movie;