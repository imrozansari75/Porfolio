import React from 'react'
import { ABOUT_TEXT } from '../constants'
import profilePic from '../images/imroz.png'

function About() {
    return (
        <section className="px-12 py-24">
            <div className="flex justify-between items-center">
                <div className=''>
                    <img src={profilePic} alt='Profile'
                        className='' />
                </div>

                <div className="w-1/2">
                    <h1 className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl text-transparent font-medium">About Me</h1>
                    <p className="text-base md:text-lg text-gray-700 font-light">{ABOUT_TEXT}</p>
                </div>
            </div>
        </section>
    )
}

export default About