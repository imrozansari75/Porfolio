import React from 'react'
import { ABOUT_TEXT } from '../constants'

function About() {
    return (
        <div className='min-h-[calc(100vh-22vh)] flex items-center justify-center pb-8 lg:mb-20'>
            <div className='flex flex-row-reverse flex-wrap w-full'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        {/* Title */}
                        <span className='bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl tracking-tight text-transparent font-medium'>
                            About Me
                        </span>

                        {/* Description */}
                        <p className='my-4 text-base max-w-xl py-4 text-gray-700 font-light tracking-tight'>
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center h-full items-center'>
                        {/* <img src={profilePic} alt="Profile" className='rounded-lg shadow-sm' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About