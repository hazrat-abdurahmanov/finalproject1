import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'
import facebook from "../facebook.svg"

const Services = () => {
  return (
    <div className='services'>
      <h1 className='py-5'>Our services</h1>
      <div className='container'>
        <div className="row">

          {/* Google seo xidmetleri */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faGoogle} className='s-icon' />
              </div>
              <h2>SEO</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, possimus.</p>
            </div>
          </div>

          {/* Web development ile elaqeli sahe */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFileCode} className='s-icon' />
              </div>
              <h2>Web development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, possimus.</p>
            </div>
          </div>

          {/* Facebook Marketing SMM */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                
                {/* <img src={facebook} className= 's-icon'/> */}
                <FontAwesomeIcon icon={faFacebookF} className='s-icon' />
                
              </div>
              <h2>SMM</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, possimus.</p>
            </div>
          </div>

          {/* IT */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faDesktop} className='s-icon' />
              </div>
              <h2>IT, helpdesk</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, possimus.</p>
            </div>
          </div>



        </div>
      </div>

    </div>
  )
}

export default Services 