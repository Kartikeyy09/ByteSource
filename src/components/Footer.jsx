"use client"

import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

const Footer = () => {
    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-violet-600 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-fuchsia-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <img src="/bytesource-logo.svg" alt="ByteSource" className="h-12 w-auto" />
                        </Link>
                        <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                            Mentor-led, project-first coding academy. Learn real skills and ship real projects.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaFacebookF /></a>
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaTwitter /></a>
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaLinkedinIn /></a>
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaInstagram /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/courses" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Courses</Link></li>
                            <li><Link to="/projects" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Projects</Link></li>
                            <li><Link to="/gallery" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Gallery</Link></li>
                            <li><Link to="/contact" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Courses</h3>
                        <ul className="space-y-3">
                            <li><Link to="/courses/full-stack-mern" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Full-Stack (MERN)</Link></li>
                            <li><Link to="/courses/java-dsa" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Java + DSA</Link></li>
                            <li><Link to="/courses/cpp-dsa" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">C++ + DSA</Link></li>
                            <li><Link to="/courses/android-kotlin" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Android (Kotlin)</Link></li>
                            <li><Link to="/courses/python-data-ai" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">Python for Data & AI</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPinIcon className="w-5 h-5 text-fuchsia-400 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">10th Floor, Tech Park, Indiranagar, Bengaluru 560038</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <PhoneIcon className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">+91 98765 43210</a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <EnvelopeIcon className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:hello@bytesource.in" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">hello@bytesource.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <p className="text-slate-400 text-xs text-center md:text-left mb-4 md:mb-0">
                            © {new Date().getFullYear()} ByteSource. All Rights Reserved. | <Link to="/privacy-policy" className="hover:text-fuchsia-400 transition">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer