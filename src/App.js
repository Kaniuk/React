import React from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';

import EpisodesPage from './pages/EpisodesPage/EpisodesPage';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import './App.css';

const App = () => (
    <div>
        <div className="header">
            <h1>Rick and Morty</h1>
        </div>
        <Routes>
            <Route path="/" element={<Navigate to="episodes"/>}/>
            <Route path="/episodes" element={<EpisodesPage/>}/>
            <Route path="/episodes/:id" element={<EpisodePage/>}/>
        </Routes>
    </div>
);


export default App;