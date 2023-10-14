/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet, 
    Link
  } from "react-router-dom";
const Layout = () => {
    return(
        <>
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <div>
            <Outlet />
        </div>
        </>
    )
} 


export default Layout