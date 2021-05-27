import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react';
 import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link

    } from 'react-router-dom';

import About from './About';
import Nav from './Nav';
import Home from './Home';

function App() {

    return (
        <>
            <Router>
                <Nav />
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
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
