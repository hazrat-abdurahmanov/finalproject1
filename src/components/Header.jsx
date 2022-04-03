import React from 'react'
import Typed from 'react-typed'
import shekil from '../bg.jpg'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and website services</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        'Information Technology Engineer',
                        'Web Deweloper',
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    {/* Props */}

                </Typed>

                <a href={shekil} className='downloadcv' download>Download CV</a>
            </div>
        </div>
    )
}

export default Header