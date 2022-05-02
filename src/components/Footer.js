import React from 'react';
import {FaGithubSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-links">
                {/* <a href="https://twitter.com/a0x001"><FaTwitterSquare className="foot" /></a> */}
                <a href="https://www.linkedin.com/in/jathen-mcgowan-606840219" target="_blank"><FaLinkedin className="foot" /></a>
                <a href="https://github.com/jay060" target="_blank"><FaGithubSquare className="foot" /></a>
            </div>
            <h1> Copyright © {new Date().getFullYear()} <a href='https://allanmaina.vercel.app/'>Jathen</a></h1>
        </div>
    )
}

export default Footer
