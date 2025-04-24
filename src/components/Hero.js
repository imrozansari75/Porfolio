import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../images/imroz.png'

const Hero = () => {
    return (
        <section className="px-12 py-24">
        <div className="flex justify-between items-center">
            <div className="w-1/2 flex flex-col gap-2">
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900'>Imroz Ansari</h2>
                <h1 className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl text-transparent font-medium">Frontend Developer</h1>
                <p className="mt-4 text-base md:text-lg text-gray-700 font-light">{HERO_CONTENT}</p>
            </div>

            <div className=''>
                <img src={profilePic} alt='Profile'
                className='w-full' />
            </div>
        </div>
    </section>
    )
}

export default Hero