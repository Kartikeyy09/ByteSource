"use client"

import { Link } from "react-router-dom"
import { ShieldCheckIcon, LightBulbIcon, Cog6ToothIcon, UserGroupIcon, AcademicCapIcon, ArrowRightIcon, ChevronRightIcon, SparklesIcon, HandThumbUpIcon } from "@heroicons/react/24/solid"

const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">
                    <div className="lg:sticky lg:top-24">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop" alt="ByteSource mentors" className="rounded-2xl shadow-2xl w-full h-auto border border-white/10" />
                            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white p-6 rounded-xl shadow-lg w-64">
                                <div className="text-4xl font-extrabold">2K+</div>
                                <div className="text-lg font-semibold">Learners Trained</div>
                                <p className="text-sm opacity-90 mt-1">Project-first portfolios</p>
                            </div>
                        </div>
                        <div className="mt-20 text-center">
                            <h3 className="text-2xl font-bold text-white mb-8">Quick Stats</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-white/10">
                                    <AcademicCapIcon className="w-12 h-12 text-fuchsia-400 mb-3" />
                                    <span className="text-4xl font-extrabold text-white">25+</span>
                                    <p className="text-slate-400 font-medium mt-1">Mentors</p>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-white/10">
                                    <HandThumbUpIcon className="w-12 h-12 text-fuchsia-400 mb-3" />
                                    <span className="text-4xl font-extrabold text-white">96%</span>
                                    <p className="text-slate-400 font-medium mt-1">Satisfaction</p>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-white/10">
                                    <SparklesIcon className="w-12 h-12 text-fuchsia-400 mb-3" />
                                    <span className="text-4xl font-extrabold text-white">200+</span>
                                    <p className="text-slate-400 font-medium mt-1">Hiring Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-sm font-bold text-fuchsia-400 uppercase">About ByteSource</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-6">Mentor-led coding that lands offers</h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">We offer cohort-based programs in Web, Java/C++, Android, Flutter, Python & AI. You’ll build real projects, get code reviews, mock interviews, and placement support.</p>

                        <div className="mb-10 bg-slate-900 p-6 rounded-lg border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
                            <ul className="space-y-3 text-lg text-slate-300">
                                <li className="flex items-center"><ShieldCheckIcon className="w-6 h-6 text-green-400 mr-3" />Integrity: real skills > buzzwords.</li>
                                <li className="flex items-center"><SparklesIcon className="w-6 h-6 text-violet-400 mr-3" />Excellence: project-first, clean code, best practices.</li>
                                <li className="flex items-center"><UserGroupIcon className="w-6 h-6 text-fuchsia-400 mr-3" />Community: mentorship, peer learning, alumni network.</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-white mb-4">What Sets Us Apart</h3>
                            <div className="space-y-5">
                                <div className="flex items-start">
                                    <LightBulbIcon className="w-8 h-8 text-fuchsia-400 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Project-First Curriculum</h4>
                                        <p className="text-slate-300">Ship deployable projects each module and iterate with mentor feedback.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Cog6ToothIcon className="w-8 h-8 text-fuchsia-400 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Career Support</h4>
                                        <p className="text-slate-300">Mock interviews, resume/LinkedIn reviews, referrals and job assistance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-6">
                            <Link to="/courses" className="group inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all">
                                Explore Courses
                                <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/consultation" className="group inline-flex items-center font-semibold text-lg text-slate-300 hover:text-fuchsia-400 transition-colors">
                                Talk to a Mentor
                                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection