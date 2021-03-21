import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'
function About() {
    return (
        <div className="class_about">
            <h4 style={{color: "white"}}>Version 1.0.0</h4>
            <Link style={{color: "white"}} to="/">Go Back</Link>

        </div>
    )
}

export default About
