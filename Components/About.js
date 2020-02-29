import React from 'react'
import '../css/About.css'
import { Spring } from 'react-spring/renderprops';


export default function About() {
    return (
        <div className="Container">
            <Spring 
            from= {{opacity: 0}}
            to= {{opacity: 1}}>
            {props => (
                <div style={props}>
                    <h1>About Me</h1>
                </div>)}
            </Spring>
            <p>
            Basically I'm from Mandi Himachal Pradesh. I completed my middle school and high school from my homeTown 
            and then I moved to chandigarh for higher studies. <br/><br/>
            I'm also keen to learn new things. I took <b>Gaming and Interactive Designing </b>as my majors in BE.
            </p>
        </div>
    )
}
