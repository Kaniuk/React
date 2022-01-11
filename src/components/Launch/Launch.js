import React from 'react';

const Launch = (props) => {
    const {mission_name, launch_year,links} = props.launch
    return (
        <div className='item'>
            <div>mission_name:{mission_name}</div>
            <div>launch_year:{launch_year}</div>
            <div>mission_patch: <img src={links.mission_patch} alt="mission_patch"/></div>
        </div>
    );
};

export default Launch;