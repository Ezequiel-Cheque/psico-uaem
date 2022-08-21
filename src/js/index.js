import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import '../styles/general.scss';

import Home from '../pages/Home';
import Panel from '../pages/Panel';
import User from '../pages/User';
import Simon from '../pages/Simon';
import Stop from '../pages/Stop';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/simon/:id" element={<Simon />} />
            <Route path="/stop/:id" element={<Stop />} />
        </Routes>
    </BrowserRouter>
);