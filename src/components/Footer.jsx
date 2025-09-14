"use client"

import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import logo from "./images/bytesourcelogo.png"

const Footer = () => {
    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden">
            {/* Background Accent Blobs */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-violet-600 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-fuchsia-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14">
                    {/* Logo + Description */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src={logo}
                                alt="ByteSource"
                                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-slate-300 mb-6 text-sm leading-relaxed max-w-sm">
                            Mentor-led, project-first coding academy. Learn real skills and ship real projects.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaFacebookF /></a>
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaTwitter /></a>
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaLinkedinIn /></a>
                            <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-slate-300 hover:text-fuchsia-400 transition-colors">About Us</Link></li>
                            <li><Link to="/courses" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Courses</Link></li>
                            <li><Link to="/projects" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Projects</Link></li>
                            {/* <li><Link to="/gallery" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Gallery</Link></li> */}
                            <li><Link to="/contact" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Courses</h3>
                        <ul className="space-y-3">
                            <li><Link to="/courses/full-stack-mern" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Full-Stack (MERN)</Link></li>
                            <li><Link to="/courses/java-dsa" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Java + DSA</Link></li>
                            <li><Link to="/courses/cpp-dsa" className="text-slate-300 hover:text-fuchsia-400 transition-colors">C++ + DSA</Link></li>
                            <li><Link to="/courses/android-kotlin" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Android (Kotlin)</Link></li>
                            <li><Link to="/courses/python-data-ai" className="text-slate-300 hover:text-fuchsia-400 transition-colors">Python for Data & AI</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start space-x-3">
                                <MapPinIcon className="w-5 h-5 text-fuchsia-400 mt-1 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">Ayodhya Bypass, Bhopal Madhya Pradesh 462022</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <PhoneIcon className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm">+91 98765 43210</a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <EnvelopeIcon className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:hello@bytesource.in" className="text-slate-300 hover:text-fuchsia-400 transition-colors text-sm"> bytesourceacademy@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-xs text-center md:text-left">
                            © {new Date().getFullYear()} ByteSource. All Rights Reserved.
                        </p>
                        <Link to="/privacy-policy" className="text-xs text-slate-400 hover:text-fuchsia-400 transition">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
