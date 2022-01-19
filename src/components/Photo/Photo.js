import React from 'react';

import './Photo.css'

const Photo = (props) => {
    const {id, title, url} = props.photo;

    return (
        <div className='photo-block'>
            <h3>Photo</h3>
            <div>id: {id}</div>
            <div>title:{title}</div>
            <div>url: <img src={url} alt="url"/></div>
        </div>
    );
};

export default Photo;