"use client"

import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"

const ProjectDetailPage = () => {
    const { slug } = useParams()
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return (
            <div className="text-center py-24">
                <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                <p className="text-lg text-slate-400 mb-8">The case study you are looking for does not exist.</p>
                <Link to="/" className="text-fuchsia-400 font-semibold">← Back to Home</Link>
            </div>
        )
    }

    const hasDetails = project.details && (project.details.challenge || project.details.solution || project.details.results)

    return (
        <div className="bg-slate-950">
            <div className="relative h-[50vh]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Case Study</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold">{project.title}</h1>
                    {project.location && <p className="mt-4 text-xl font-medium text-slate-200">{project.location}</p>}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
                <div className="prose prose-invert lg:prose-xl max-w-none">
                    <h2 className="text-3xl font-bold text-white">Overview</h2>
                    <p className="text-lg text-slate-300 leading-relaxed">{project.description}</p>

                    {hasDetails && project.details.challenge && (
                        <>
                            <h2 className="text-3xl font-bold text-white mt-12">The Challenge</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">{project.details.challenge}</p>
                        </>
                    )}
                    {hasDetails && project.details.solution && (
                        <>
                            <h2 className="text-3xl font-bold text-white mt-12">Our Solution</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">{project.details.solution}</p>
                        </>
                    )}
                    {hasDetails && project.details.results && (
                        <>
                            <h2 className="text-3xl font-bold text-white mt-12">The Results</h2>
                            <p className="text-lg text-slate-300 leading-relaxed">{project.details.results}</p>
                        </>
                    )}
                </div>

                <div className="text-center mt-16 pt-12 border-t border-white/10">
                    <Link to="/projects" className="inline-block bg-slate-900 text-slate-200 border border-white/10 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                        ← Back to All Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailPage