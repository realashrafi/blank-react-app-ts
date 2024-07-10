import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
