import React from 'react';
import {Routes, Route} from 'react-router-dom';

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import SinglePost from "./pages/SinglePost/SinglePost";
import UserComments from "./pages/UserComments/UserComments";
import SingleUser from "./pages/SingleUser/SingleUser";
import UserPosts from "./pages/UserPosts/UserPosts";
import UserAlbums from "./pages/UserAlbums/UserAlbums";
import AlbumPhotos from "./pages/AlbumPhotos/AlbumPhotos";

const App = () => (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="users" element={<UsersPage/>}>
                <Route path=":userId" element={<SingleUser/>}>
                    <Route path="posts" element={<UserPosts/>}/>
                </Route>
                <Route path=":userId/albums" element={<UserAlbums/>}>
                <Route path=":albumId/photos" element={<AlbumPhotos/>}/>
                </Route>
            </Route>
            <Route path="posts" element={<PostsPage/>}>
                <Route path=":id" element={<SinglePost/>}>
                    <Route path="comments" element={<UserComments/>}/>
                </Route>
            </Route>
        </Route>
    </Routes>
);


export default App;