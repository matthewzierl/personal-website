import React from 'react'
import './index.scss';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faGithub
} from "@fortawesome/free-brands-svg-icons";


export default () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className='reach-out'>
                <h1 className='contact-me' style={{ textAlign: "center" }}>
                    I love working on projects, joining teams, and collaborating with other people.
                    Don't hesistate to reach out!
                </h1>

                <div className='social' style={{textAlign:"center"}}>
                    <a href="https://www.linkedin.com/in/matthew-zierl-b203201a6/"
                        className="linkedin" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>

                    <a href="https://github.com/matthewzierl"
                        className="github" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>

            </div>
        </div>
    )
}