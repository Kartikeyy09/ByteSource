"use client"

import { useParams, Link } from "react-router-dom"
import { services } from "../data/services"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

const ServiceDetailPage = () => {
    const { slug } = useParams()
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        return (
            <div className="text-center py-24">
                <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
                <p className="text-lg text-slate-400 mb-8">The course you are looking for does not exist.</p>
                <Link to="/courses" className="text-fuchsia-400 font-semibold">
                    ← Back to Courses
                </Link>
            </div>
        )
    }

    const { title, description, details } = service

    return (
        <div className="bg-slate-950">
            {/* Hero */}
            <div className="relative h-[40vh]">
                <img src={details.coverImage} alt={title} className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        Course
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold">{title}</h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Overview + Modules + Outcomes */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">{description}</p>

                        {details.modules?.length > 0 && (
                            <>
                                <h3 className="text-2xl font-bold text-white mt-10 mb-4">What You’ll Learn</h3>
                                <ul className="space-y-3">
                                    {details.modules.map((m, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircleIcon className="w-6 h-6 text-fuchsia-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-300">{m}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {details.outcomes?.length > 0 && (
                            <>
                                <h3 className="text-2xl font-bold text-white mt-10 mb-4">Outcomes</h3>
                                <ul className="space-y-3">
                                    {details.outcomes.map((o, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircleIcon className="w-6 h-6 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-300">{o}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    {/* Snapshot */}
                    <div className="space-y-8">
                        <div className="bg-slate-900 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Course Snapshot</h3>
                            <div className="space-y-3 text-slate-300">
                                {details.duration && (
                                    <div className="flex justify-between">
                                        <span>Duration</span>
                                        <span className="font-semibold">{details.duration}</span>
                                    </div>
                                )}
                                {details.level && (
                                    <div className="flex justify-between">
                                        <span>Level</span>
                                        <span className="font-semibold">{details.level}</span>
                                    </div>
                                )}
                                {details.tools?.length > 0 && (
                                    <div>
                                        <span className="block mb-2">Tools</span>
                                        <div className="flex flex-wrap gap-2">
                                            {details.tools.map((t, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-200 border border-white/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => window.location.assign("/consultation")}
                                className="mt-6 w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-3 rounded-lg font-semibold text-lg hover:-translate-y-0.5 transition-transform duration-300"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 pt-12 border-t border-white/10">
                    <Link to="/courses" className="inline-block bg-slate-900 text-slate-200 border border-white/10 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                        ← Back to Courses
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailPage