import { useNavigate } from "react-router-dom";

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-950">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl shadow-2xl p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Join the next ByteSource cohort
                    </h2>
                    <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                        Book a free counseling session and get your personalized learning roadmap.
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => navigate("/consultation")}
                            className="inline-block bg-white text-fuchsia-600 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
                        >
                            Book Free Counseling
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTASection;