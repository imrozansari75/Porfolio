import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiJavascript, SiTailwindcss, SiMysql } from 'react-icons/si'
import { FaHtml5, FaCss3, FaGithub, FaGitAlt } from 'react-icons/fa'
function Skills() {

    const skills = [
        { icon: FaHtml5, color: 'text-orange-500', name: 'HTML5' },
        { icon: FaCss3, color: 'text-blue-500', name: 'CSS3' },
        { icon: SiJavascript, color: 'text-yellow-500', name: 'JavaScript' },
        { icon: SiTailwindcss, color: 'text-sky-500', name: 'Tailwind CSS' },
        { icon: RiReactjsLine, color: 'text-cyan-500', name: 'React' },
        { icon: SiMysql, color: 'text-blue-600', name: 'MySQL' },
        { icon: FaGithub, color: 'text-gray-800', name: 'GitHub' },
        { icon: FaGitAlt, color: 'text-orange-500', name: 'Git' },
    ];

    return (

        <section className='pt-24 pb-24'>
            <h1 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-[1.3] py-2 mb-10">
                My Skills
            </h1>

            <div className='flex flex-wrap items-center justify-center gap-6'>
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={index}
                            className='group rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 relative flex flex-col items-center'
                        >
                            <div className='absolute inset-0 rounded-2xl -z-10 p-0.5'></div>
                            <Icon className={`text-7xl ${skill.color} mb-2`} />
                            <span className='text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity'>
                                {skill.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>

    )
}

export default Skills
