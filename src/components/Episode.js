import React from 'react';
import {Link} from 'react-router-dom';

import './Episode.css'

const Episode = (props) => {
    const {id, name, air_date, episode, created} = props.episode;

    return (
        <div className='episode'>
            <div>Name:{name}</div>
            <div>Air_date:{air_date}</div>
            <div>Episode:{episode}</div>
            <div>Created:{created}</div>
            <div>
                <Link to={`${id}`} state={{episode: props.episode}}>Episode Details </Link>
            </div>
        </div>
    );
};

export default Episode;