"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import codingAnimation from "../data/codingAnimation.json"

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const navigate = useNavigate()

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 100)
        const move = (e) => setMousePosition({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", move)
        return () => { clearTimeout(t); window.removeEventListener("mousemove", move) }
    }, [])

    const parallax = (mult = 40) => {
        if (typeof window === "undefined") return {}
        const x = (mousePosition.x / window.innerWidth - 0.5) * mult * -1
        const y = (mousePosition.y / window.innerHeight - 0.5) * mult * -1
        return { transform: `translate(${x}px, ${y}px)` }
    }

    return (
        <section className="relative p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left z-20">
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                                <span className={`block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                    Learn. Build. Get Hired.
                                </span>
                                <span className={`block bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mt-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                    ByteSource Coding Academy
                                </span>
                            </h1>
                            <p className={`mt-6 text-lg text-slate-300 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                Mentor-led, project-first programs in Web, Java/C++, Android, Flutter, Python & AI. Cohort-based learning with career support.
                            </p>

                            <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                <button onClick={() => navigate("/courses")} className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                                    Explore Courses
                                </button>
                                <button onClick={() => navigate("/consultation")} className="inline-flex items-center justify-center bg-slate-800 text-slate-200 px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-700">
                                    Book Free Counseling
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 transition-transform duration-500 ease-out" style={parallax(40)}>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-90">
                                <Lottie animationData={codingAnimation} loop />
                            </div>
                            <div className="absolute top-20 right-10 w-4 h-4 bg-fuchsia-400/50 rounded-full" />
                            <div className="absolute bottom-20 left-10 w-3 h-3 bg-violet-400/50 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection