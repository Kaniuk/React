import React from 'react';
import {Route, Routes} from "react-router-dom";
import ImagePage from "./pages/ImagePage/ImagePage";
import Layout from "./pages/Layout/Layout";

import './App.css'

const App = () => {
    return (
        <div className='page'>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/:image" element={<ImagePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;