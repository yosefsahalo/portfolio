import React from 'react'
import './Header.css';

function Header() {
    return (
        <div id="headerId">
            <h3>yosefsahalu@gmail.com</h3>
            <div>
            <a href="https://tech-career-alternative.firebaseapp.com/" target="blanc"><img className="imgHeader" src="images/logotechcareer.png" alt="Tech-Career" /></a>
            <a href="#"><img className="imgHeader" src="images/indi.jpeg" alt="indi" /></a>
            </div>
        </div>
    )
}

export default Header;