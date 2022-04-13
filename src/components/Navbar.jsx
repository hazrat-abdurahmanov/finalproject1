import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
    return (
        // navbar-toggler
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={logo} className="logo" alt=""></img></a>
                <button className="icon" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">About me</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Experience</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>

                    </ul>

                </div>
            </nav>
        
    )
}

export default Navbar