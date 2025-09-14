"use client"

import { Link } from "react-router-dom"
import { courses } from "../data/courses"

const CoursesSection = () => {
    return (
        <section id="courses" className="py-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Our Courses</h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">Cohort-based, mentor-guided learning to become job-ready.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div key={index}>
                            <Link
                                to={`/courses/${course.slug}`}
                                className="group bg-slate-900 rounded-2xl shadow-lg overflow-hidden block h-full flex flex-col transform hover:-translate-y-2 transition-all border border-white/10"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img src={course.details.coverImage} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                                    <p className="text-slate-300 leading-relaxed line-clamp-3 flex-grow">{course.description}</p>
                                    <div className="mt-4 pt-4 border-t border-white/10">
                                        <span className="inline-flex items-center text-fuchsia-400 font-semibold">
                                            View Curriculum
                                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoursesSection