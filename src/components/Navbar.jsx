import React from 'react'
import reactLogo from '../images/download.png'
import '../navStyle.css'

export default function Navbar(){
    return (
        <div className='nav'>
            <div className='leftNav'>
                <img src={reactLogo} alt='react logo' id='reactLogo'></img>
                <p id='reactFacts'>ReactFacts</p>
            </div>
            <div className='rightNav'>
                <p id='reactCourse'></p>
                React project
            </div>
        </div>
    )
}