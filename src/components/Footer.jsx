import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF, faInstagram, faGit, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (

        <div className='footer'>
            <div className="social-media">
                <a href="#"><FontAwesomeIcon icon={faInstagram} className='f-icon' /></a>
                <a href="#"><FontAwesomeIcon icon={faGit} className='f-icon' /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} className='f-icon' /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} className='f-icon' /></a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
            <div className="copyright">
                <p>All correct rights reserved &copy; 2021-2025 </p>
            </div>
        </div>


    )
}

export default Footer