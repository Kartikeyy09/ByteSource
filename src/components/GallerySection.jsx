"use client"

import { useState, useEffect } from "react"
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const mediaItems = [
    { id: 1, type: "image", category: "campus", title: "Cohort Kickoff", location: "Bengaluru", description: "Orientation day for the new Full-Stack cohort.", src: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1600", thumbnail: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600" },
    { id: 2, type: "image", category: "workshop", title: "React Deep Dive", location: "Lab 2", description: "Advanced hooks, state management, and performance.", src: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1600", thumbnail: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600" },
    { id: 3, type: "video", category: "event", title: "Hackathon Highlights", location: "ByteSource HQ", description: "48-hour hackathon with 20+ teams shipping MVPs.", src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600" },
    { id: 4, type: "image", category: "campus", title: "Mentor Session", location: "Lecture Hall", description: "1:many mentorship on system design fundamentals.", src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1600", thumbnail: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600" },
    { id: 5, type: "image", category: "workshop", title: "Android Lab Day", location: "Mobile Lab", description: "Hands-on with Jetpack Compose.", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600" },
    { id: 6, type: "video", category: "event", title: "Demo Day", location: "Auditorium", description: "Learners present their capstone projects to mentors and recruiters.", src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600" },
    { id: 7, type: "image", category: "campus", title: "AI Track", location: "Data Lab", description: "Model training, MLOps demos, and deployments.", src: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1600", thumbnail: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=600" },
    { id: 8, type: "image", category: "workshop", title: "DevOps Day", location: "Infra Lab", description: "Docker, CI/CD, and K8s in action.", src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600", thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600" },
    { id: 9, type: "image", category: "event", title: "Alumni Meetup", location: "Cafe", description: "Networking and success stories.", src: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=1600", thumbnail: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=600" }
];

const ITEMS_PER_PAGE = 8;

const GallerySection = () => {
    const [activeTab, setActiveTab] = useState("all")
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(null)
    const [visibleItemsCount, setVisibleItemsCount] = useState(ITEMS_PER_PAGE)

    const filteredItems = activeTab === "all" ? mediaItems : mediaItems.filter((item) => item.category === activeTab)
    const visibleItems = filteredItems.slice(0, visibleItemsCount)

    const categories = [
        { id: "all", name: "All" }, { id: "campus", name: "Campus" },
        { id: "workshop", name: "Workshops" }, { id: "event", name: "Events" },
    ]

    const openModal = (index) => setSelectedMediaIndex(index)
    const closeModal = () => setSelectedMediaIndex(null)

    const handleNext = (e) => {
        e.stopPropagation()
        if (selectedMediaIndex === null) return
        setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
    }
    const handlePrev = (e) => {
        e.stopPropagation()
        if (selectedMediaIndex === null) return
        setSelectedMediaIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedMediaIndex === null) return
            if (e.key === "ArrowRight") handleNext(e)
            if (e.key === "ArrowLeft") handlePrev(e)
            if (e.key === "Escape") closeModal()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedMediaIndex, filteredItems])

    const selectedMedia = selectedMediaIndex !== null ? filteredItems[selectedMediaIndex] : null

    return (
        <section id="gallery" className="py-16 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Campus & Events</h2>
                    <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto">
                        A peek into our learning spaces, hackathons, and demo days.
                    </p>
                </div>

                <div className="w-full mb-12">
                    <div className="flex space-x-2 md:justify-center overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => { setActiveTab(category.id); setVisibleItemsCount(ITEMS_PER_PAGE); }}
                                className={`relative px-4 py-2.5 sm:px-6 rounded-full font-semibold whitespace-nowrap outline-none transition-all duration-300
                  ${activeTab === category.id ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md" : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/10"}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {visibleItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative rounded-xl overflow-hidden cursor-pointer ring-1 ring-white/10 hover:ring-fuchsia-500/40 transition-all duration-300 aspect-[4/5] bg-slate-900"
                            onClick={() => openModal(index)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                            <img
                                src={item.thumbnail} alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 z-20 text-white">
                                <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${item.type === "video" ? "bg-fuchsia-600/80" : "bg-violet-600/80"}`}>
                                    {item.type === "video" ? "▶ Video" : "📷 Photo"}
                                </span>
                                <h3 className="font-bold text-sm sm:text-lg">{item.title}</h3>
                                <p className="text-xs sm:text-sm opacity-80">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleItemsCount < filteredItems.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setVisibleItemsCount(prev => prev + ITEMS_PER_PAGE)}
                            className="bg-slate-900 text-fuchsia-400 font-semibold px-8 py-3 rounded-lg border border-white/10 hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            {selectedMedia && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeModal}>
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col mx-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="relative flex-grow bg-black/50 rounded-t-lg flex items-center justify-center">
                            {selectedMedia.type === 'video' ? (
                                <video src={selectedMedia.src} className="max-w-full max-h-[70vh]" controls autoPlay loop />
                            ) : (
                                <img src={selectedMedia.src} alt={selectedMedia.title} className="max-w-full max-h-[70vh] object-contain" />
                            )}
                        </div>
                        <div className="p-6 bg-slate-900 rounded-b-lg flex-shrink-0 border border-t-0 border-white/10">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedMedia.title}</h3>
                            <p className="text-fuchsia-400 font-medium my-1">{selectedMedia.location}</p>
                            <p className="text-slate-300">{selectedMedia.description}</p>
                        </div>
                    </div>

                    <button onClick={closeModal} className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 border border-white/20"><XMarkIcon className="w-6 h-6" /></button>
                    {filteredItems.length > 1 && (
                        <>
                            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 border border-white/20"><ChevronLeftIcon className="w-7 h-7" /></button>
                            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 border border-white/20"><ChevronRightIcon className="w-7 h-7" /></button>
                        </>
                    )}
                </div>
            )}
        </section>
    )
}

export default GallerySection