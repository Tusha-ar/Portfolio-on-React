import React, { Component } from 'react'
import '../css/navBar.css'
import {Link} from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul className="links">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to="/skill">
                        <li>Skills</li>
                    </Link>
                    <Link to="/projects">
                        <li>Projects</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default NavBar
