import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {Car} from "../car/Car";
import {useEffect} from "react";
import {getAllCars} from "../../store/car.slice";

const Cars = ({setCarForUpdate}) => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <div style={{margin: '50px'}}>
            {status === 'pending' && <h2>Wait a minute</h2>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};