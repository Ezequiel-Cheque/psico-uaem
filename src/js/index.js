import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import '../styles/general.scss';

import Home from '../pages/Home';
import Panel from '../pages/Panel';
import User from '../pages/User';
import Simon from '../pages/Simon';
import Stop from '../pages/Stop';
import MMST from '../pages/MMST';
import MMST2 from '../pages/MMST2';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/simon/:id" element={<Simon />} />
            <Route path="/stop/:id" element={<Stop />} />
            <Route path="/mmst/:id" element={<MMST />} />
            <Route path="/mmst2/:id" element={<MMST2 />} />
        </Routes>
    </HashRouter>
);