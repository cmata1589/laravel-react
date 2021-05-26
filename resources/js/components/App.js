import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react';
 import {
        BrowserRouter as Router,
        Switch,
        Route,

    } from "react-router-dom";

import About from './About';
import Nav from './Nav';
import Home from './Home';

function App() {

    return (
        <div>
           
            {/* <Nav /> */}

            <Home />
                {/* <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch> */}

        
            
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
