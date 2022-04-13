import React from 'react'

const AboutMe = () => {
    return (

        <div className="container py-5">
            <div className="row">

                <div className='col-md-6 col-xs-12'>
                    <div className='photo-wrap'>
                        <img src="https://source.unsplash.com/random" className='profile-img' alt='profile'/>
                    </div>
                </div>
 
                <div className='col-md-6 col-xs-12'>
                    <h1 className='about-heading'>AboutMe</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus mollitia, unde blanditiis consectetur harum explicabo, architecto fugit commodi asperiores facere rerum veritatis soluta perspiciatis dolores eaque, recusandae autem voluptatem deleniti!</p>
                </div>

            </div>
        </div>

    )
}

export default AboutMe