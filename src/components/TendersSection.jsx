const TendersSection = () => {
    const paths = [
        {
            title: "Web Development (MERN)",
            description: "Frontend + Backend + DevOps basics. Build and deploy real apps.",
            features: ["React mastery", "Node/Express APIs", "MongoDB + Auth"],
            sector: "Web",
        },
        {
            title: "DSA (Java/C++)",
            description: "Ace coding interviews with DS & Algo mastery.",
            features: ["Patterns & problem-solving", "Mock interviews", "System design intro"],
            sector: "DSA",
        },
        {
            title: "Android (Kotlin)",
            description: "Native apps using Kotlin, Jetpack and modern architecture.",
            features: ["Compose UI", "Room DB", "Retrofit + MVVM"],
            sector: "Android",
        },
        {
            title: "Flutter (Dart)",
            description: "Cross-platform apps with clean architecture and Firebase.",
            features: ["State mgmt", "Realtime features", "Deploy to stores"],
            sector: "Flutter",
        },
        {
            title: "Python for Data & AI",
            description: "Data wrangling to ML & DL essentials with projects.",
            features: ["Pandas & sklearn", "NN basics", "MLOps intro"],
            sector: "AI",
        },
        {
            title: "DevOps & Cloud",
            description: "CI/CD pipelines, Docker, Kubernetes, and logging.",
            features: ["Docker + K8s", "GitHub Actions", "Monitoring"],
            sector: "DevOps",
        },
    ]

    const badgeStyle = (s) => {
        switch (s) {
            case "Web": return "bg-violet-500/15 text-violet-300"
            case "DSA": return "bg-fuchsia-500/15 text-fuchsia-300"
            case "Android": return "bg-emerald-500/15 text-emerald-300"
            case "Flutter": return "bg-cyan-500/15 text-cyan-300"
            case "AI": return "bg-amber-500/15 text-amber-300"
            default: return "bg-sky-500/15 text-sky-300"
        }
    }

    return (
        <section className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Learning Paths We Offer</h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Choose a clear, outcome-driven path to reach your goals — with mentor guidance throughout.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paths.map((p, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-white/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold border border-white/10 ${badgeStyle(p.sector)}`}>
                                    {p.sector} Path
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                            <p className="text-slate-300 mb-6">{p.description}</p>
                            <ul className="space-y-2">
                                {p.features.map((f, i) => (
                                    <li key={i} className="flex items-center">
                                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></div>
                                        <span className="text-slate-200">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-slate-900 p-8 rounded-xl shadow-md max-w-4xl mx-auto border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-4">How Your Learning Journey Works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-slate-200">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                    1
                                </div>
                                <h4 className="font-semibold text-white mb-2">Assessment</h4>
                                <p className="text-sm text-slate-300">Free counseling + skills assessment</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                    2
                                </div>
                                <h4 className="font-semibold text-white mb-2">Cohort & Curriculum</h4>
                                <p className="text-sm text-slate-300">Join the cohort & start building</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                    3
                                </div>
                                <h4 className="font-semibold text-white mb-2">Projects</h4>
                                <p className="text-sm text-slate-300">Ship projects, review & iterate</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                    4
                                </div>
                                <h4 className="font-semibold text-white mb-2">Placement</h4>
                                <p className="text-sm text-slate-300">Mock interviews & job support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TendersSection