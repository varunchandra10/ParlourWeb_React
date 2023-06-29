import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react';
import images from './RecentApi';
import './RecentFinishes.css'

const RecentFinishes = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
    return (
        <div className='recent-body' id='recent'>
            <div className='recent-heading'>
                <h1>Recent Finishes</h1>
                <div className='line'></div>
            </div>
            <div className='Recentfinishes'>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }} >
                    <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                        {
                            images.map(image => {
                                return (
                                    <motion.div className='item' key={image.id}>
                                        <img src={image.image} alt='images' />
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                <p> &larr; Swipe &rarr;</p>
                </motion.div>
            </div>
        </div>
    )
}

export default RecentFinishes;