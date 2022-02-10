import React from 'react';

import "./Switcher.css";

const Switcher = ({checked, onToggle}) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={onToggle}/>
            <span className="slider round"/>
        </label>
    );
};

export default Switcher;