"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

const StudentProjectsSection = () => {
    const [showAllProjects, setShowAllProjects] = useState(false)
    const displayedProjects = showAllProjects ? projects : projects.slice(0, 4)

    return (
        <section id="projects" className="py-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Student Projects</h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Real-world applications built and deployed by ByteSource learners.
                    </p>
                </div>

                <div className="space-y-16">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in">
                            <div className={`group relative rounded-xl overflow-hidden ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                                <img src={project.image} alt={project.title} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-xl border border-white/10" />
                            </div>

                            <div className={`text-center md:text-left ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                                <span className="inline-block bg-slate-800 text-fuchsia-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/10">
                                    {project.location}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">{project.description}</p>
                                <Link to={`/projects/${project.slug}`} className="inline-flex items-center text-fuchsia-400 font-semibold hover:text-fuchsia-300 transition-colors group">
                                    View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button onClick={() => setShowAllProjects(!showAllProjects)} className="inline-block bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                        {showAllProjects ? "Show Less" : "View All Projects"}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StudentProjectsSection