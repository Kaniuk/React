import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode";
import './EpisodesPage.css';

const EpisodesPage = () => {
    const [episodesData, setEpisodesData] = useState({
        info: undefined,
        results: [],
    });

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        episodeService.getAll(currentPage).then(data => setEpisodesData(data));
    }, [currentPage]);

    return (
        <div>
            <div className="episodes">
                {episodesData.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className="buttons">
                {episodesData.info?.prev && (
                    <button onClick={() => setCurrentPage(currentPage - 1)}>PREVIOUS</button>)}
                {episodesData.info?.next && (
                    <button onClick={() => setCurrentPage(currentPage + 1)}>NEXT</button>)}
            </div>
        </div>
    );
};

export default EpisodesPage;