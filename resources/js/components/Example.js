import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Dashboard from './Dashboard';
import CreatePosts from "./CreatePosts";
import EditPosts from "./EditPosts.js";
import Navbar from "./Navbar";
import "../../css/app.css";

function Example() {
    return (
        <Router>
            <>
            <Navbar/>
                <Routes>
                    <Route path="/" exact element={ <Home/> }/>
                    <Route path="/dashboard" exact element={ <Dashboard/> } />
                    <Route path="/addPosts" exact element={ <CreatePosts/> }/>
                    <Route path="/edit/:id" exact element={ <EditPosts/> }/>
                </Routes>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
