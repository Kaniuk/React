import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {catsServices} from "../../services/cats.services";


const MainPage = () => {
    const [cats, setCats] = useState(null);

    useEffect(()=>{
        catsServices.getCatsImg().then(value => setCats(value))
    },[])

    return (
        <div>
            <button>Cats</button>
            <img src={cats} alt=""/>

            <Outlet/>
        </div>
    );
};

export default MainPage;