import React, {useEffect, useState} from 'react';
import {characterService} from "../../services/character.service";

import './Character.css';

const Character = (props) => {
    const {id} = props;

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        characterService.getById(id).then(value => setCharacter(value));
    }, [id]);

    if (!character) {
        return null;
    }
    return (
        <div className="character">
            <div><img src={character.image} alt="character"/></div>
            <div>name: {character.name}</div>
            <div>species: {character.species}</div>
            <div>status:{character.status}</div>
            <div>origin:{character.origin.name}</div>
        </div>
    );
};

export default Character;