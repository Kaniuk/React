import React, {useEffect, useState} from 'react';

import Launch from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
         fetch('https://api.spacexdata.com/v3/launches/')
             .then(value => value.json())
             .then(launch => {
                 setLaunches(launch.filter(launch => launch.launch_year !== '2020'));
             });
        /*fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(launches => launches.filter(({launch_year}) => launch_year !== '2020'))
            .then(setLaunches);*/
    }, []);

    return (
        <div className="items">
            {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export default Launches;