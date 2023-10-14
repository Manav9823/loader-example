/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { dataLoader } from './Components/Posts';
import Home from './Components/Home';
import Post from './Components/Post';
import { postLoader } from './Components/Post';
import Posts from './Components/Posts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<Layout />}>
      <Route index path="/home" element={<Home />}/>
      <Route path="/posts" element={<Posts />} loader={dataLoader}></Route>
      <Route path="/posts/:id" element={<Post />} loader={postLoader} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
