"use client"

import { useState } from "react"
import { EnvelopeIcon, UserIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"

const GetQuotePage = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            {!submitted ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-white/10">
                    <div className="p-8 bg-slate-800 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            You’ll receive:
                        </h2>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center">
                                <span className="w-5 h-5 mr-2 text-fuchsia-400">✔</span>
                                Course brochure (PDF)
                            </li>
                            <li className="flex items-center">
                                <span className="w-5 h-5 mr-2 text-fuchsia-400">✔</span>
                                Curriculum & projects list
                            </li>
                            <li className="flex items-center">
                                <span className="w-5 h-5 mr-2 text-fuchsia-400">✔</span>
                                Scholarship/EMI options
                            </li>
                            <li className="flex items-center">
                                <span className="w-5 h-5 mr-2 text-fuchsia-400">✔</span>
                                Counseling call within 24h
                            </li>
                        </ul>
                    </div>

                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Request Brochure
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Fill your details — we’ll email you the PDF.
                        </p>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div className="relative">
                                <UserIcon className="w-5 h-5 text-slate-400 absolute top-3.5 left-4" />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-11 focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-100"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <EnvelopeIcon className="w-5 h-5 text-slate-400 absolute top-3.5 left-4" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-11 focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-100"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-slate-400 absolute top-3.5 left-4" />
                                <textarea
                                    placeholder="Which course are you interested in?"
                                    rows="3"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-11 focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-100"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-3 rounded-lg font-semibold text-lg hover:-translate-y-0.5 transition-transform duration-300"
                            >
                                Email Me the PDF
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="p-12 text-center bg-slate-900 rounded-2xl shadow-lg border border-white/10">
                    <div className="w-20 h-20 bg-green-900/40 rounded-full flex items-center justify-center mb-5 mx-auto text-green-400">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Check your inbox!
                    </h2>
                    <p className="text-slate-300">
                        We’ve sent the brochure. If not found, please check your spam folder.
                    </p>
                </div>
            )}
        </div>
    )
}

export default GetQuotePage