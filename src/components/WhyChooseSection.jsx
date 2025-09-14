"use client"

import { useNavigate } from "react-router-dom"
import {
    ClipboardDocumentCheckIcon, ShieldCheckIcon, GlobeAltIcon,
    TagIcon, ClockIcon, TrophyIcon, UserGroupIcon, SparklesIcon
} from "@heroicons/react/24/outline"

const WhyChooseSection = () => {
    const navigate = useNavigate()

    const reasons = [
        { title: "Mentor-Led Cohorts", description: "Learn directly from senior engineers through structured cohorts, code reviews, and feedback loops.", icon: UserGroupIcon },
        { title: "Project-First Curriculum", description: "Every module ends with a deployable project. You graduate with a strong portfolio.", icon: SparklesIcon },
        { title: "Career Services", description: "Mock interviews, resume help, referrals, and job assistance until you land an offer.", icon: TrophyIcon },
        { title: "PAN India + Remote", description: "Join in-person in major cities or learn live online from anywhere.", icon: GlobeAltIcon },
        { title: "EMI", description: "Accessible tuition with flexible payment plans.", icon: TagIcon },
        { title: "Structured Roadmaps", description: "Clear step-by-step tracks for Web, DSA, Android, Flutter, AI/ML, and DevOps.", icon: ClipboardDocumentCheckIcon },
    ]

    return (
        <section className="py-24 relative bg-slate-950 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Why Choose ByteSource?</h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">A proven system designed to get you job-ready effectively.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon
                        return (
                            <div key={index} className="relative group bg-slate-900 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border border-white/10">
                                <div className="p-8">
                                    <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-300 ease-in-out">
                                        <Icon className="w-8 h-8 text-fuchsia-400 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{reason.description}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            </div>
                        )
                    })}
                </div>

                {/* <div className="mt-24 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white p-12 rounded-3xl text-center shadow-xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to begin?</h3>
                    <p className="text-lg md:text-xl mb-8 opacity-90">Talk to a mentor and get your roadmap.</p>
                    <button
                        onClick={() => navigate("/consultation")}
                        className="bg-white text-fuchsia-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    >
                        Book Free Counseling
                    </button>
                </div> */}
            </div>
        </section>
    )
}

export default WhyChooseSection