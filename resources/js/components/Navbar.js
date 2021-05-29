import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                <a className="navbar-item">
                    <Link to="/">Home</Link>
                </a>
                <a className="navbar-item">
                    <Link to="/about">About</Link>
                </a>
                <a className="navbar-item">
                    <Link to="/projects">Users</Link>
                </a>
               
            
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