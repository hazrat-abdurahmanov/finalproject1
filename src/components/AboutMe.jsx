import React from 'react'

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src="https://source.unsplash.com/random " alt="" />
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-heading'>About me</h1>
                    <p className='p-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, iusto minus fuga in laudantium voluptates? Autem incidunt nesciunt quidem sunt recusandae similique doloribus facilis? Voluptatem, maiores. Magni libero eos quae quo earum, at voluptatibus ab! Odit delectus facilis nisi voluptate similique dolore sint totam, maiores, fugit perferendis quaerat explicabo nesciunt!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe