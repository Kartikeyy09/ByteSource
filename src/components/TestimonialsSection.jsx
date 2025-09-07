"use client"

import { FaUserAlt, FaQuoteRight, FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

const accents = {
    indigo: { ring: "ring-indigo-500", text: "text-indigo-400" },
    fuchsia: { ring: "ring-fuchsia-500", text: "text-fuchsia-400" },
    amber: { ring: "ring-amber-500", text: "text-amber-400" },
    cyan: { ring: "ring-cyan-500", text: "text-cyan-400" },
}

const TestimonialsSection = () => {
    const scrollRef = useRef(null)

    const testimonials = [
        {
            name: "Aarav Gupta",
            position: "SDE I",
            company: "Flipkart",
            content: "The MERN bootcamp was intense and practical. My final project became the centerpiece of my portfolio and helped me crack interviews.",
            rating: 5,
            accent: "fuchsia",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Priya Sharma",
            position: "Android Developer",
            company: "Zomato",
            content: "Mentors are amazing. Code reviews and weekly mock interviews made a huge difference in my confidence.",
            rating: 5,
            accent: "indigo",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Rohan Patel",
            position: "ML Engineer",
            company: "Tata Elxsi",
            content: "Loved the Python + AI track. We built end-to-end ML projects and learned MLOps basics too.",
            rating: 5,
            accent: "cyan",
            image: "https://randomuser.me/api/portraits/men/65.jpg",
        },
        {
            name: "Sneha Reddy",
            position: "Full-Stack Dev",
            company: "Freshworks",
            content: "Structured curriculum, great peer group, and solid placement support. Highly recommend!",
            rating: 5,
            accent: "amber",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ]

    const scroll = (direction) => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({
            left: direction === "left" ? -350 : 350,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!scrollRef.current) return
            scrollRef.current.scrollBy({ left: 350, behavior: "smooth" })
            const nearEnd =
                scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                scrollRef.current.scrollWidth - 10
            if (nearEnd) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-extrabold text-center text-white mb-16">
                    What Our Students Say
                </h2>

                <div className="relative">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full z-10 hidden md:block hover:scale-110 transition text-white"
                    >
                        ◀
                    </button>

                    <div ref={scrollRef} className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-6 pt-14">
                        {testimonials.map((t, i) => {
                            const ac = accents[t.accent]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="min-w-[320px] md:min-w-[360px] bg-white/5 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 pt-16 relative border border-white/10"
                                >
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                        <div className={`w-24 h-24 rounded-full border-4 border-slate-900 ring-4 ${ac.ring} shadow-lg overflow-hidden`}>
                                            {t.image ? (
                                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                                    <FaUserAlt className="text-white text-3xl" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-center mt-6 mb-6">
                                        <h3 className={`text-lg font-bold ${ac.text}`}>{t.name}</h3>
                                        <p className="text-slate-300">{t.position}</p>
                                        <p className="text-slate-400 text-sm">{t.company}</p>
                                    </div>

                                    <p className="text-slate-200 text-sm text-center mb-8 italic leading-relaxed">
                                        "{t.content}"
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                        <div className="flex space-x-1 text-yellow-400">
                                            {[...Array(t.rating)].map((_, idx) => <FaStar key={idx} />)}
                                        </div>
                                        <FaQuoteRight className={`text-2xl ${ac.text}`} />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full z-10 hidden md:block hover:scale-110 transition text-white"
                    >
                        ▶
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection