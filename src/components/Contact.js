import React from 'react'

function Contact() {
    return (
        <section id="contact" class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">Get in Touch</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>

                <div class="flex flex-col lg:flex-row gap-12">
                    {/* Left Side - Contact Form */}
                    <div class="lg:w-1/2">
                        <form class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <div class="mb-6">
                                <label for="name" class="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div class="lg:w-1/2">
                        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
                            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>

                            {/* Phone */}
                            <div class="flex items-start mb-8">
                                <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                                    <a href="tel:+1234567890" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
                                </div>
                            </div>

                            {/* Email */}
                            <div class="flex items-start mb-8">
                                <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300">Email</h4>
                                    <a href="mailto:your.email@example.com" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">your.email@example.com</a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div class="flex items-start mb-8">
                                <div class="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Social Media</h4>
                                    <div class="flex flex-wrap gap-4">
                                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                                            <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                            <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                                            <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact