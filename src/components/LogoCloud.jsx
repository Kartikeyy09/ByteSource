const LogoCloud = () => {
    const partners = ["Flipkart", "Freshworks", "Tata Elxsi", "Zomato", "Paytm"]

    return (
        <div className="bg-slate-950 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Hiring partners
                </h2>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                    {partners.map(p => (
                        <div key={p} className="flex justify-center">
                            <p className="text-xl font-bold text-slate-500 filter grayscale hover:filter-none hover:text-slate-300 transition-all duration-300">{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogoCloud;