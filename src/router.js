import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './component/home';
import Search from './component/search';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/search" element={<Search />} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Router