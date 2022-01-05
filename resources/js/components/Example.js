import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import dashboard from './dashboard';
import createPosts from "./createPosts";
import EditPosts from "./EditPosts.js";
import "../../css/app.css";

function Example() {
    return (
        <Router>
            <>
                <Routes>
                    <Route path="/dasboard" exact component={dashboard} />
                    <Route path="/addPosts" exact component={createPosts}/>
                    <Route path="/edit/:id" exact component={EditPosts}/>
                </Routes>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
