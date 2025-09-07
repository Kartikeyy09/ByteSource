"use client"

import { useState } from "react"
import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleBottomCenterTextIcon,
    MapPinIcon,
    ClockIcon
} from "@heroicons/react/24/outline"

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", requirement: "" })

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setSubmitted(true)
    }

    return (
        <section id="contact" className="py-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let’s Talk</h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Questions about courses, scholarships, or career support? We’re here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-slate-900 p-8 sm:p-10 rounded-2xl shadow-lg border border-white/10">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-1">Send us a message</h3>
                                <p className="text-slate-400 mb-6">We usually reply within 2 business hours.</p>

                                <div className="relative">
                                    <UserIcon className="w-5 h-5 text-slate-400 absolute top-3.5 left-4" />
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-11 focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-100" />
                                </div>
                                <div className="relative">
                                    <EnvelopeIcon className="w-5 h-5 text-slate-400 absolute top-3.5 left-4" />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-11 focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-100" />
                                </div>
                                <div className="relative">
                                    <PhoneIcon className="w-5 h-5 text-slate-400 absolute top-3.5 left-4" />
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-11 focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-100" />
                                </div>
                                <div className="relative">
                                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-slate-400 absolute top-3.5 left-4" />
                                    <textarea name="requirement" value={formData.requirement} onChange={handleChange} placeholder="How can we help?" rows="4" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-11 focus:ring-2 focus:ring-fuchsia-500 outline-none text-slate-100"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-3.5 rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        ) : (
                            <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
                                <div className="w-24 h-24 bg-green-900/40 rounded-full flex items-center justify-center mb-6 text-green-400">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-3">Thanks!</h2>
                                <p className="text-slate-300 max-w-sm">
                                    Your message is in. We’ll reach out shortly.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg flex items-center justify-center border border-white/10">
                                    <MapPinIcon className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Our Office</h4>
                                    <p className="text-slate-300">10th Floor, Tech Park, Indiranagar<br />Bengaluru, KA 560038</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg flex items-center justify-center border border-white/10">
                                    <PhoneIcon className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <a href="tel:+919876543210" className="text-slate-300 hover:text-fuchsia-400 transition-colors">+91 98765 43210</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg flex items-center justify-center border border-white/10">
                                    <EnvelopeIcon className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <a href="mailto:hello@bytesource.in" className="text-slate-300 hover:text-fuchsia-400 transition-colors">hello@bytesource.in</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-white/10">
                            <div className="flex items-center mb-4">
                                <ClockIcon className="w-6 h-6 text-fuchsia-400 mr-3" />
                                <h4 className="font-semibold text-white text-lg">Hours</h4>
                            </div>
                            <div className="space-y-2 text-slate-300 border-t border-white/10 pt-4">
                                <div className="flex justify-between"><span>Mon - Fri:</span> <span className="font-medium">10:00 AM - 7:00 PM</span></div>
                                <div className="flex justify-between"><span>Saturday:</span> <span className="font-medium">10:00 AM - 2:00 PM</span></div>
                                <div className="flex justify-between"><span>Sunday:</span> <span className="font-medium text-slate-500">Closed</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Visit Us</h3>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.013663535936!2d77.64079267526963!3d12.969781887356539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1409a4b9d7d9%3A0x9b0ebc8f1bcac569!2sIndiranagar!5e0!3m2!1sen!2sin!4v1691500000000!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection