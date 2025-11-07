"use client";
import React from 'react'
import { AnimatedLine } from "./ui/animated-line";

const ContactMe = () => {
    return (
        <section id='contact'>
        <div className="py-10 flex flex-col items-center justify-center text-white">
            <AnimatedLine>
                <h2 className='text-4xl py-4'>Contact <span className='text-purple-400'>Me</span> </h2>
            </AnimatedLine>
            <p> Any question, suggestion or just want to say Hi - mail me!   </p>
            <div className=" py-10 bg-black flex justify-center items-center">
                <div className="relative inline-flex group">
                    <div
                        className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <a href="mailto:musaddiq@iut-dhaka.edu" title="mailMe"
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button">Mail Me Now!
                    </a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ContactMe


