import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";
import Album from "../../components/Album/Album";


const UserAlbums = () => {
    const {userId} = useParams()
    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        usersService.getUserAlbums(userId).then(value => setAlbums([...value.data]))
    },[userId])

    return (
        <div>
           <div>
               {albums.map(album => <Album key = {album.id} album = {album}/>)}
           </div>
            <Outlet/>
        </div>

    );
};

export default UserAlbums;