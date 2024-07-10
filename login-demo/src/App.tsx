import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AuthClassicLayout from "./provider/AuthProvider";
import Main from "./pages/Main";
import MainLayout from "./provider/MainProvider";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={
                        <AuthClassicLayout>
                            <Login/>
                        </AuthClassicLayout>
                    }/>
                    <Route path="/main" element={
                        <MainLayout>
                            <Main/>
                        </MainLayout>
                    }/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
