import React from 'react'
import '../css/Home.css'
import dp from '../DSC_0120.png';
import { Spring } from 'react-spring/renderprops';
import git from '../git.png'
import linkdin from '../linkdin.png'
import insta from '../instagram.png'



function Home() {

    return (
            <div>
                <Spring
                from={{opacity: 0, marginLeft: -500}}
                to={{opacity: 1, marginLeft: 0}}>
                    {props => (
                        <div style={props}>
                <img src = {dp} alt="ME" className="DisplayPicture"></img>
                <div className="HomeContent">
                    <h1 className="heading">MySelf</h1>
                    <h3 className="name"><bold>I'm Tushar</bold></h3>
                    <p>I'm currently pursuing my BE from Chitkara University. I am in 3rd year.
                        I like code and I also like web designing.  I made this React-app just to practice my React skills
                        and to enhance them.
                        
                    </p>

                </div>
                        </div>
                    )}
                </Spring>
                <hr className="horizontal"></hr>
                <a href={'//www.github.com/Tusha-ar'} target="_blank">
                    <img src={git} alt= "git" className="git"></img>
                </a>
                <a href={'//www.linkedin.com/in/tushar-gupta-53002312a/'} target="_blank">
                    <img src={linkdin} alt= "link" className="linkdin"></img>
                </a>
                <a href={'//www.instagram.com/tusha_aar/'} target="_blank">
                    <img src={insta} alt= "insta" className="insta"></img>
                </a>
            </div>
    )
}
export default Home