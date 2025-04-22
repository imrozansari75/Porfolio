import React from 'react'
import { EXPERIENCES } from '../constants'

function Experience() {
    return (
        <section className="px-10 border-t border-gray-200 py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-20 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Work Experience
                </h2>

                <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative pl-8 pb-8 border-l-2 border-gray-300 hover:border-cyan-400 transition-colors"
                        >
                            {/* Gradient dot indicator */}
                            <div className="absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-1/2 top-1"></div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/4">
                                    <p className="text-sm font-semibold text-gray-500">{exp.year}</p>
                                </div>

                                <div className="md:w-3/4">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-500 transition-colors">
                                        {exp.role} · <span className="text-blue-600">{exp.company}</span>
                                    </h3>
                                    <p className="mt-2 text-gray-600">{exp.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {exp.technologies.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience