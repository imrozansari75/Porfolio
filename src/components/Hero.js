import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../images/imroz.png'

function Hero() {
    return (
        <div className='w-[100vw] md:min-h-[calc(100vh-22vh)] flex items-center justify-center pb-8 lg:mb-20'>
            <div className='flex items-center justify-between flex-wrap w-full'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        {/* Name */}
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900'>
                            Imroz Ansari
                        </h1>

                        {/* Title */}
                        <span className='bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl tracking-tight text-transparent font-medium'>
                            Frontend Developer
                        </span>

                        {/* Description */}
                        <p className='my-4 text-base max-w-xl py-4 text-gray-700 font-light tracking-tight'>
                            {HERO_CONTENT}
                        </p>

                        {/* Buttons */}
                        <button className='px-8 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-md transition-all border border-blue-500 hover:border-blue-600'>Download CV</button>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center h-full items-center'>
                        <img src={profilePic} alt="Profile" className='absolute top-6 rounded-lg shadow-sm' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero