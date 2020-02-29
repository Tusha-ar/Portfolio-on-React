import React, { Component } from 'react';
import '../css/Projects.css';

export class Projects extends Component {
    render() {
        return (
            <div className="projectContainer">
                <h1 className="projects">MY Projects</h1>
                <ul className="projectsList">
                    <li>
                        Color Switch Replica
                    </li>
                    <li>
                        VR University Tour application
                    </li>
                    <li>
                        Github stalker app on react
                    </li>
                    <li>
                        Weather app on React
                    </li>
                    <li>
                        TODO list on React
                    </li>
                    <li>
                        You can check my Github <a href="////www.github.com/Tusha-ar" target = "_blank">
                        here
                        </a>
                    </li>
                    </ul>
            </div>
        )
    }
}

export default Projects