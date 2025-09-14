"use client"

import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from "@heroicons/react/24/outline"

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let’s Talk</h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Questions about courses or career support? We’re here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT SIDE - GOOGLE FORM BUTTON */}
                    <div className="bg-slate-900 p-8 sm:p-10 rounded-2xl shadow-lg border border-white/10 flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
                        <p className="text-slate-400 text-center mb-8 max-w-sm">
                            Fill out our quick contact form — we’ll get back to you within 2 business hours.
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScdKwgHmI_aCIAUlhJ6Snl51PPfzyQZIxLAKlVOY8HqWYsKsQ/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg text-center focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                        >
                            Open Contact Form
                        </a>
                        <p className="text-slate-500 text-sm mt-4">
                            Opens in new tab →
                        </p>
                    </div>

                    {/* RIGHT SIDE - CONTACT INFO (UNCHANGED) */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg flex items-center justify-center border border-white/10">
                                    <MapPinIcon className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Our Office</h4>
                                    <p className="text-slate-300">Ayodhya Bypass, Bhopal <br />Madhya Pradesh 462022</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg flex items-center justify-center border border-white/10">
                                    <PhoneIcon className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <a href="tel:+919876543210" className="text-slate-300 hover:text-fuchsia-400 transition-colors">+91 9131718611</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-fuchsia-500/10 text-fuchsia-400 rounded-lg flex items-center justify-center border border-white/10">
                                    <EnvelopeIcon className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <a href="mailto:bytesourceacademy@gmail.com" className="text-slate-300 hover:text-fuchsia-400 transition-colors"> bytesourceacademy@gmail.com</a>
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

                {/* MAP - UNCHANGED */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Visit Us</h3>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58642.177218215205!2d77.42561198749488!3d23.27450477323185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f68f21f151%3A0x6cd74914e0f50350!2sAyodhya%20Bypass%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1757865176375!5m2!1sen!2sin"
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