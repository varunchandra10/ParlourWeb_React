import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contac.css'


const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_YOUR_SERVICE_ID,
            process.env.REACT_APP_YOUR_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className='contact-body' id='contact'>

                <div className='business-logo'>
                    <h1 className="log1">QUEEN'S <br />
                        <p className="log2">Beauty Parlour</p>
                    </h1>
                </div>

                <div className='location'>
                    <div className='fas fa-map-marker-alt'></div>
                    <a className='location-text' target='__blank' href={process.env.REACT_APP_location}>
                        Plot.No:87, Swaroop Nagar Rd, B.N Reddy Nagar, Vanasthalipuram, Telangana 500070</a>
                </div>

                <div className="mid-content">
                    <a href="tel: +91 6281344167" className="fas fa-mobile-alt"> </a>
                    <a href={process.env.REACT_APP_insta} target='__blank' className="fab fa-instagram"> </a>
                    <a href={process.env.REACT_APP_mail} target='__blank' className="fa fa-envelope"> </a>
                    <a href={process.env.REACT_APP_whatsapp} target='__blank' className="fab fa-whatsapp"> </a>
                </div>

                <div className='lower-part'>
                    <div className='left-side-content'>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name:</label>
                            <input type="text" name="user_name" placeholder='Enter your name' required /><br />
                            <label>Email:</label>
                            <input type="email" name="user_email" placeholder='enter your email' required /><br />
                            <label>Message:</label>
                            <textarea name="message" placeholder='Message the queries/ anything to ask (in Telugu/English)' /><br />
                            <input type="submit" value="Send" /><br />
                        </form>
                    </div>
                    <div className='right-side-content'>
                        <iframe className='map'title='map' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d476.11297805723046!2d78.5618887!3d17.3201889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3f44ae13321%3A0x730c71374ce51989!2sQueen&#39;s%20Herbal%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1687796609497!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'> </iframe>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>Created with React JS by Varun chandra &hearts; </p> 
                <p>Copyrights 2023 &#169;</p>
            </div>

        </>

    );
};

export default ContactUs;