import { AcademicCapIcon, StarIcon, TrophyIcon, RocketLaunchIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const journeyData = [
    { year: "2021", title: "ByteSource Founded", description: "Started with a clear mission: make high-quality coding education practical, affordable, and career-focused.", outcomes: ["Launched Web & DSA cohorts", "Built mentor network", "First 100 learners"], icon: StarIcon, imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop" },
    { year: "2022", title: "Bootcamps Expand", description: "Introduced Android (Kotlin) and Flutter tracks with a project-first approach.", outcomes: ["Mobile dev programs", "Hackathons & demo days", "Hiring partner network grows"], icon: AcademicCapIcon, imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" },
    { year: "2023", title: "Career Outcomes", description: "Placement and interview prep matured — alumni started joining top companies.", outcomes: ["Mock interviews @ scale", "Alumni community", "Corporate workshops"], icon: TrophyIcon, imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1932&auto=format&fit=crop" },
    { year: "2024", title: "AI & DevOps Era", description: "Launched AI/ML and DevOps tracks with hands-on labs, CI/CD, and MLOps basics.", outcomes: ["AI/ML projects", "DevOps pipelines", "200+ hiring partners"], icon: RocketLaunchIcon, imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2071&auto=format&fit=crop" },
];

const MilestoneCard = ({ item, index, setActiveIndex, isActive }) => {
    const { ref } = useInView({
        threshold: 0.5,
        onChange: (inView) => { if (inView) setActiveIndex(index) },
    });

    return (
        <div ref={ref} className={`py-5 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40 lg:opacity-30'}`}>
            <div className="bg-slate-900 p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-x-4">
                    <item.icon className="w-10 h-10 text-fuchsia-400" />
                    <div>
                        <span className="text-xl font-black text-fuchsia-400">{item.year}</span>
                        <h3 className="text-3xl font-extrabold text-white leading-tight">{item.title}</h3>
                    </div>
                </div>
                <p className="mt-6 text-lg text-slate-300 leading-relaxed border-t border-white/10 pt-6">{item.description}</p>
                <div className="mt-6">
                    <h4 className="text-lg font-bold text-slate-200">Key Outcomes:</h4>
                    <ul className="mt-3 space-y-2">
                        {item.outcomes.map((o, i) => (
                            <li key={i} className="flex items-center">
                                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                <span className="text-slate-200">{o}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const StickyVisuals = ({ activeIndex }) => {
    const progressPercentage = activeIndex >= 0 ? ((activeIndex + 1) / journeyData.length) * 100 : 0;
    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                {journeyData.map((item, index) => (
                    <img key={index} src={item.imageUrl} alt={item.title} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeIndex === index ? 'opacity-60' : 'opacity-0'}`} />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
            </div>
            <div className="relative z-10 w-full max-w-md p-8 text-center backdrop-blur-md rounded-3xl">
                <div className="relative w-40 h-40 mx-auto">
                    {journeyData.map((item, index) => (
                        <h2 key={index} className={`absolute inset-0 flex items-center justify-center text-7xl font-black text-white transition-all duration-300 ease-out ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}>
                            {item.year}
                        </h2>
                    ))}
                </div>
                <div className="mt-4 w-48 h-1.5 bg-slate-700/50 rounded-full mx-auto">
                    <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full transition-all duration-300 ease-out" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>
        </div>
    );
};

const JourneySection = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section id="journey" className="relative bg-slate-950">
            <div className="text-center pt-8 pb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Our Journey
                </h2>
                <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                    From a small cohort to a thriving community of engineers and mentors.
                </p>
            </div>
            <div className="relative container mx-auto lg:grid lg:grid-cols-2 lg:gap-x-16">
                <div className="lg:sticky lg:top-0 h-screen">
                    <StickyVisuals activeIndex={activeIndex} />
                </div>
                <div className="relative">
                    {journeyData.map((item, index) => (
                        <MilestoneCard
                            key={index}
                            item={item}
                            index={index}
                            setActiveIndex={setActiveIndex}
                            isActive={index === activeIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JourneySection