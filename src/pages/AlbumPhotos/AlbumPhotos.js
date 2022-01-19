import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albums.service";
import {useParams} from "react-router-dom";

import Photo from "../../components/Photo/Photo";
import './AlbumPhotos.css'


const AlbumPhotos = () => {
    const {albumId} = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getAlbumsPhotos(albumId).then(value => setPhotos([...value.data]));
    }, [albumId]);


    return (
        <div className='photos'>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default AlbumPhotos;