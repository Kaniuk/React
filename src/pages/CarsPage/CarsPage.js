import React, {useState} from 'react';
import {Forms} from "../../components/forms/forms";
import {Cars} from "../../components/cars/cars";

const CarsPage = () => {
    const [carForUpdate, setCarForUpdate] = useState({});

    return (
        <div>
            <Forms carForUpdate={carForUpdate}/>
            <Cars setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarsPage;