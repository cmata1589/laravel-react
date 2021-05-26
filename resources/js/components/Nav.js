import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Nav = () => {
    return <>
        <Router>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/">Home</Link>
        </Router>
    </>;
}



export default Nav;