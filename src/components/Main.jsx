import React from 'react'
import '../MainStyle.css'

export default function Main(){
    return (
        <div className='main'>
            <header>
                <h1>
                    Fun facts about React
                </h1>
            </header>
            <div className='mainBody'>
                <ul>
                    <li>
                        <span>
                            Was first released in 2013
                        </span>
                    </li>
                    <li>
                        <span>
                            Was originally created by Jorden Walke
                        </span>
                    </li>
                    <li>
                        <span>
                            Has well over 100k stars on GitHub
                        </span>
                            
                    </li>
                    <li>
                        <span>
                        Is maintained by Facebook
                        </span>
                    </li>
                    <li>
                        <span>
                        Powers thousands of enterprise apps. including mobile apps
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}