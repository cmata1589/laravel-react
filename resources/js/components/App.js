import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react';
 import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link

    } from 'react-router-dom';

import About from './About';
import Navbar from './Navbar';
import Home from './Home';

import styles  from '../../css/styles.css';

function App() {

    return (
        <div className="container  body">
            <Router>
                <Navbar />
                <div>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path="/users" component={Home} />

                    <Route exact path="/">
                        <Home />
                    </Route>
                </div>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
