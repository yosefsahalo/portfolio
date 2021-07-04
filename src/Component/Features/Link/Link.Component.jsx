import React from 'react'
import './Link.css';
import { Link } from 'react-router-dom'

function Links() {
    return (
        <div id="divLinkID">
            <p><Link id="link1" to='/Skills'>Skills </Link></p>
            <p><Link id="link2" to='/Contact'>Contact </Link></p>
            <p><Link id="link3" to='/Portfolio'>Portfolio</Link></p>
            <p><Link id="link4" to='/'>Home</Link></p>
        </div>
    )
}

export default Links;