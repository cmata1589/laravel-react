import ReactDOM from 'react-dom';
import React, { useState, useEffect} from 'react';
 import {
        BrowserRouter as Router,
        Switch,
        Route,

    } from 'react-router-dom';

import About from './About';
import Nav from './Nav';
import Home from './Home';

function App() {

    return (
        <div>
            <Router>
                <Nav />


                <Switch>
                    <Route path="/about" component={About} />
                        
                    
                    <Route path="/users" component={Home}/>
                    
                    <Route path="/" component={Home} />
                    
             
                </Switch>

            </Router>
            
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
