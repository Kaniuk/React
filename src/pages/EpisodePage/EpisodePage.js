import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import Character from "../../components/Character/Character";
import './EpisodePage.css';

const EpisodePage = () => {
    const {id} = useParams();
    const location = useLocation();
    const {state} = location;

    const [episode, setEpisode] = useState(state?.episode);


    useEffect(() => {
        if (!episode) {
            episodeService.getById(id).then(value => setEpisode(value));
        }
    }, [id]);

    if (!episode) {
        return null;
    }


    return (
        <div>
            <Link to="/">
                <button>Return</button>
            </Link>
            <div className="episode-info">
                <div>Episode - {episode.name}</div>
                <div>Air date - {episode.air_date}</div>
            </div>
            <div className="characters">
                {episode?.characters.map(characterLink => {
                    const id = getCharacterIdFromLink(characterLink);
                    return (
                        <Character id={id}/>
                    );
                })}
            </div>
        </div>
    );
};

export default EpisodePage;

function getCharacterIdFromLink(link) {
    const linkParts = link.split('/');
    const id = linkParts[linkParts.length - 1];
    return id;
}