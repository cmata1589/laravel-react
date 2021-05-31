import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">               
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/about">About</Link>                
                    <Link className="navbar-item" to="/projects">Projects</Link>
                    <Link className="navbar-item" to="/create">Creat a Project</Link>
               
            
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;