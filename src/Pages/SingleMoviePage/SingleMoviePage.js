import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";

import {getSingleMovie} from "../../store/singleMovie.slice";

import './SingleMoviePage.css';


const SingleMoviePage = () => {
    const {movie, status, error} = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSingleMovie({id}));
    }, [id]);

    return (
        <div>
            {status === 'loading' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {movie && (
                <div>
                    <div className="background-image">
                        <img
                            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                            alt="poster_path"/>
                    </div>

                    <div className="page-content">
                        <div className="content-img"><img
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                            alt="poster_path"/></div>
                        <div className="content-info">
                            <h1>{movie.original_title}</h1>
                            <h2> budget:{movie.budget}</h2>
                            <h3>Original language:{movie.original_language}</h3>
                            <h3>{movie.overview}</h3>
                            Popularity:{movie.popularity}
                            <hr/>
                            Vote Average:{movie.vote_average}
                            <hr/>
                            Release date:{movie.release_date}
                            <hr/>
                            Runtime:{movie.runtime}
                            <div>
                                <img src={`https://cdn-icons-png.flaticon.com/512/31/31087.png`} alt="genres" width="30"
                                     height="30"/>
                                {movie.genres.map(genre => <div key={genre.id}>{genre.name}</div>)}
                            </div>
                            <div className="companies">
                                Production companies:
                                {movie.production_companies.map(company => (
                                    <div className="company" key={company.id}>{company.name}</div>
                                ))}
                            </div>

                            <div className="companies">
                                Production countries:
                                {movie.production_countries.map((country) => (
                                    <div className="company" key={country.name}>{country.name}</div>
                                ))}
                            </div>

                            <div className="companies">
                                Spoken languages:
                                {movie.spoken_languages.map(language => (
                                    <div className="company" key={language.name}>{language.english_name}</div>
                                ))}
                            </div>
                            Status: {movie.status}
                            <a target="_blank" href={movie.homepage}>Open movie page</a>
                        </div>
                    </div>
                </div>
            )}
            <div className="go-back-button">
                <button onClick={() => navigate(-1)}> go back</button>
            </div>
        </div>
    );
};

export default SingleMoviePage;