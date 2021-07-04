import React from 'react'
import './Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div id="footerid">
            <div>Fullstack Developer Yosef Sahalo</div>
            <div><a href="https://www.linkedin.com/in/yosefsahalo/" target="blanc"><LinkedInIcon /></a></div>
            <div><a href="https://github.com/yosefsahalo" target="blanc"><GitHubIcon /></a></div>
            <div><a href="#"><CopyrightIcon /></a></div>
        </div>
    )
}

export default Footer;