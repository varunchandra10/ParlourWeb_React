import React from 'react'
import './about.css'
const about = () => {
    return (
        <>
            <section className='about' id='about'>
                <h1>About</h1>
                <div className='line'></div>
                <div className='abt-content'>
                    <p>
                        Welcome to our exquisite beauty parlour, where elegance meets expertise.
                        Enhance your beauty with well afforable prices and best skin products.
                        From personalized skincare services to flawless hair styling, we offer a comprehensive range of services to suit your unique needs. 
                        From Mani to pedicures all services are available.<br />
                        <b>"Bridal services are also available"<br />
                        You can view our services in below services section or <a href="#services">[ Click here ]</a></b><br />
                        Visit us today and utilise our services that will leave you looking and feeling your best. <br />
                        <span>Tap here To contact us <a href="#contact">[ Contact us.. ]</a></span>
                    
                        
                    </p>
                </div>
            </section>
        </>
    )
}

export default about