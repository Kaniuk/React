import {NavLink, Outlet, Route, Routes} from "react-router-dom";

import CarsPage from "./pages/CarsPage/CarsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import './App.css'

const Layout = () => (
    <>
        <nav className='layout'>
            <NavLink to="users">Users</NavLink>
            <NavLink to="cars">Cars</NavLink>
            <NavLink to="posts">Posts</NavLink>
            <NavLink to="comments">Comments</NavLink>
        </nav>
        <Outlet />
    </>
);
const App = () => {
    return (
        <div>
            {/*<CarsPage/>*/}

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="cars" element={<CarsPage/>}/>
                    <Route path="users" element={<UsersPage/>}/>
                    <Route path="posts" element={<PostsPage/>}/>
                    <Route path="comments" element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
