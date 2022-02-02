import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {catsServices} from "../../services/cats.services";

import './ImagePage.css';


const ImagePage = () => {
    const {image} = useParams();
    const [catImgUrl, setCatImgUrl] = useState(null);

    let updateCatImage = () => {
        catsServices.getRandomImgUrl(image).then(value => setCatImgUrl(value));
    };
    useEffect(updateCatImage, [image]);

    return (
        <div className="image">
            <div><img src={catImgUrl} alt=""/>
            </div>
            <div className="updateButton">
                <button onClick={updateCatImage}>UPDATE</button>
            </div>


            <Outlet/>
        </div>
    );
};

export default ImagePage;