import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import '../styles/general.scss';

// import App from './App';
import Home from '../pages/Home';
import Panel from '../pages/Panel';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

const url = "/";

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/panel" element={<Panel />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
);