import React, { Component } from 'react'
import '../css/Skills.css';
export class Skill extends Component {
    render() {
        return (
            <div className="containerSkill">
                <h1 className="classHead">MY SKILLS</h1>
                <ul className = "skills">
                    <li style={{color:'yellow'}}>Unity3D</li>
                    <li style={{color:'green'}}>HTML</li>
                    <li style={{color:'yellow'}}>CSS</li>
                    <li style={{color:'green'}}>ReactJS</li>
                </ul>
            </div>
        )
    }
}

export default Skill
