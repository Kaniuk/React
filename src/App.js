import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ImagePage from "./pages/ImagePage/ImagePage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route path="/cats" element={<ImagePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;