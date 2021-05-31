import ReactDOM from 'react-dom';
import React, { useState, useEffect, Component} from 'react';
 import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link

    } from 'react-router-dom';

import About from './About';
import Navbar from './Navbar';
import Home from './Home';
import NewProject from './NewProject';
import SingleProject from './SingleProject';
import ProjectsList from './ProjectsList';

import styles  from '../../css/styles.css';


function App() {

    return (
        <div className="container  body">
            <Router>
                <Navbar />
                <div>
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={ProjectsList} />
                    <Route path='/create' component={NewProject} />                  
                    <Route path='/:id' component={SingleProject} />
                    <Route exact path="/"component={Home} />
                     
                </div>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
