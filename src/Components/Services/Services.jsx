import React from 'react'
import './Services.css'

const Services = ({ serviceData }) => {
    return (
        <>
            <section className='services' id='services'>
                <div className='title'>
                    <h1>Our Services</h1>
                    <div className='line'></div>
                </div>
                <section className='services-container' >
                    {serviceData.map((servicelem) => (
                        <li key={servicelem.id}>
                            <div className='card-container'>
                                <img src={servicelem.image} alt="images" className='card-media' width="300px" height="200px" />
                                <h4>{servicelem.name}</h4>
                            </div>
                        </li>
                    )
                    )}
                </section>
            </section>
        </>

    )
}

export default Services