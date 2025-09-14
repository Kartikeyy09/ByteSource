"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import logo from "./images/bytesourcelogo.png"
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Courses", path: "/courses" },
        { name: "Projects", path: "/projects" },
        // { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
    ]

    const linkClasses = (isActive) =>
        `relative font-medium transition-colors ${isActive ? "text-fuchsia-400" : "text-slate-300 hover:text-fuchsia-300"
        }`

    return (
        <>
            <header className="sticky top-0 z-40 w-full">
                <div className={`absolute inset-0 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md" : "bg-transparent"}`} />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <NavLink to="/" className="flex-shrink-0">
                            <img
                                src={logo}
                                alt="ByteSource"
                                className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 object-contain"
                            />
                        </NavLink>



                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) => linkClasses(isActive)}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center">
                            <NavLink
                                to="/consultation"
                                className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Apply Now
                            </NavLink>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-200">
                                {isMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/60" onClick={() => setIsMenuOpen(false)}></div>
                <div className={`absolute top-0 right-0 h-full w-72 bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        <nav className="flex flex-col space-y-2 mt-6">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    end={item.path === "/"}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg text-lg font-medium transition-all ${isActive ? "text-fuchsia-400 bg-slate-800" : "text-slate-200 hover:text-fuchsia-400 hover:bg-slate-800"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>
                        <NavLink
                            to="/consultation"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-auto w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 shadow-md text-center"
                        >
                            Apply Now
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header