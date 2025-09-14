import React, { useState } from "react"
import {
    BuildingOffice2Icon,
} from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

const Consultation = () => {
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()

    // Optional: If you still want to track clicks or show success state
    const handleOpenForm = () => {
        // You can log event or keep minimal state if needed
        // setSubmitted(true) // Uncomment if you want success screen
        window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLScdKwgHmI_aCIAUlhJ6Snl51PPfzyQZIxLAKlVOY8HqWYsKsQ/viewform?usp=dialog",
            "_blank",
            "noopener,noreferrer"
        )
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 max-w-5xl w-full bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* LEFT SIDE - BENEFITS (Hidden on mobile, shown on desktop) */}
                    <div className="p-8 sm:p-12 bg-white/5 hidden lg:flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Book Your Free Counseling
                        </h2>
                        <p className="text-slate-300 mb-8">
                            A ByteSource mentor will help you:
                        </p>
                        <ul className="space-y-4 text-slate-200">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-fuchsia-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span><strong>Assess your goals</strong> and match you to the right course and roadmap.</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-fuchsia-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span><strong>Explain EMI</strong> available for your cohort.</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-fuchsia-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>Share a <strong>course syllabus PDF</strong> and sample projects.</span>
                            </li>
                        </ul>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-sm font-semibold text-slate-400">TRUSTED BY LEARNERS ACROSS INDIA</p>
                            <div className="flex items-center space-x-6 mt-4 opacity-80 text-slate-400">
                                <p className="font-bold text-lg">Flipkart</p>
                                <p className="font-bold text-lg">Freshworks</p>
                                <p className="font-bold text-lg">Tata Elxsi</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - GOOGLE FORM BUTTON */}
                    <div className="p-8 sm:p-12 flex flex-col items-center justify-center">
                        {!submitted ? (
                            <>
                                <h1 className="text-3xl font-bold text-white mb-2 text-center">
                                    Talk to a Mentor
                                </h1>
                                <p className="text-slate-300 mb-8 text-center max-w-md">
                                    Click below to book your free 1:1 counseling session with our career advisors.
                                </p>

                                <button
                                    onClick={handleOpenForm}
                                    className="w-full max-w-xs bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                                >
                                    Book Free Session
                                </button>

                                <p className="text-slate-500 text-sm mt-4">
                                    Opens in new tab →
                                </p>
                            </>
                        ) : (
                            /* Optional Success State - You can remove this if not needed */
                            <div className="text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                                <div className="w-24 h-24 bg-green-900/40 rounded-full flex items-center justify-center mb-6 text-green-400">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-3">Thank You!</h2>
                                <p className="text-slate-300 mb-8 max-w-sm">
                                    Your request has been sent. Our team will get back to you within 24 hours.
                                </p>
                                <p
                                    className="bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                                    onClick={() => navigate("/")}
                                >
                                    Back to Home
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Consultation