"use client"

import { useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { courses } from "../data/courses"
import { projects } from "../data/projects"

import HeroSection from "../components/HeroSection"
import TestimonialsSection from "../components/TestimonialsSection"
import WhyChooseSection from "../components/WhyChooseSection"

const featuredCourses = courses.slice(0, 3)
const featuredProjects = projects.slice(0, 2)

const Home = () => {
    const navigate = useNavigate()
    const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }

    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <HeroSection />
            <WhyChooseSection />

            {/* Popular Courses */}
            <motion.section className="py-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Popular Courses</h2>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">Cohort-based programs designed to get you job-ready.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredCourses.map(course => (
                            <Link key={course.slug} to={`/courses/${course.slug}`} className="group bg-slate-900 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all border border-white/10">
                                <div className="relative h-56">
                                    <img src={course.details.coverImage} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                                    <p className="text-slate-300 text-sm line-clamp-2 mb-4">{course.description}</p>
                                    <span className="inline-flex items-center text-fuchsia-400 font-semibold">View Curriculum <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center bg-slate-900/60 border border-white/10 p-6 mt-12 rounded-xl">
                        <Link to="/courses" className="font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition">View All Courses →</Link>
                    </div>
                </div>
            </motion.section>

            {/* Student Projects */}
            <motion.section className="py-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Student Projects</h2>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">Real-world apps built and deployed by learners.</p>
                    </div>

                    <div className="space-y-10">
                        {featuredProjects.map((project, index) => (
                            <div key={project.slug} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <div className={`group relative rounded-xl overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                    <img src={project.image} alt={project.title} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-xl border border-white/10" />
                                </div>
                                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                    <span className="inline-block bg-slate-800 text-fuchsia-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/10">{project.location}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>
                                    <Link to={`/projects/${project.slug}`} className="inline-flex items-center text-fuchsia-400 font-semibold group">View Case Study <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center bg-slate-900/60 p-6 rounded-2xl mt-12 border border-white/10">
                        <Link to="/projects" className="font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition">View All Projects →</Link>
                    </div>
                </div>
            </motion.section>

            <TestimonialsSection />

            <motion.section className="py-24 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={sectionVariants}>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to begin?</h2>
                    <p className="mt-4 text-lg text-slate-300">Book a free counseling session and get your personalized roadmap.</p>
                    <div className="mt-8">
                        <button onClick={() => navigate("/consultation")} className="inline-block bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            Book Free Counseling
                        </button>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Home;