import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();
    const SERVICE_ID = 'service_4s2rxq4'
    const TEMPLATE_ID = 'template_5g8d23h'
    const USER_ID ='b5fo3031ieSBPkLVz'

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            form.current.reset()
    };

    // service_4s2rxq4

    return (

        <div className='contacts'>
            <div className='text-center'>
                <h1>ContactUs</h1>
                <p>We contact you as soon as possible</p>
            </div>

            <div className='container'>
                <form ref={form} onSubmit={sendEmail}> <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        {/* Name input */}
                        <div className='text-center'>
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className='form-control'
                                name='name'
                            />
                            <div className="line"></div>
                        </div>
                        {/* Phone input */}
                        <div className='text-center'>
                            <input
                                type="text"
                                placeholder='Enter your phone number'
                                className='form-control'
                                name='phone'
                            />
                            <div className="line"></div>
                        </div>
                        {/* Email input */}
                        <div className='text-center'>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='form-control'
                                name='email'
                            />
                            <div className="line"></div>
                        </div>
                        {/* Subject input */}
                        <div className='text-center'>
                            <input
                                type="text"
                                placeholder='Enter your subject'
                                className='form-control'
                                name='subject'
                            />
                            <div className="line"></div>
                        </div>

                    </div>

                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea
                                name="message"
                                className='form-control'
                                placeholder='Describe your need'
                            />
                            
                            <div className="line"></div>
                        </div>


                        <button type='submit' className='btn btn-danger'>Send</button>
                    </div>

                </div>

                </form>


            </div>
        </div>

    )
}

export default ContactUs