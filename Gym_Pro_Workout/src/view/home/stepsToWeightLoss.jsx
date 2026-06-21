export default function StepsToWeightLoss() {
    const steps = [
        {
            id: 1,
            number: "1",
            title: "Movement",
            desc: "Begin your active lifestyle by making physical movement a natural and daily routine habit.",
            image: "/Images/homeMain_images/step-1.jpg", 
            isLarge: false,
        },
        {
            id: 2,
            number: "2",
            title: "Time",
            desc: "Dedicate structured slots in your day and track your consistency meticulously over time.",
            image: "/Images/homeMain_images/step-2.jpg", 
            isLarge: false,
        },
        {
            id: 3,
            number: "3",
            title: "Practise",
            desc: "Push through demanding training sessions regularly under high-quality technical structures.",
            image: "/Images/homeMain_images/step-3.jpg", 
            isLarge: true, 
        },
        {
            id: 4,
            number: "4",
            title: "Weight Loss",
            desc: "Achieve targeted calorie reductions, high endurance metrics, and sustainable life health.",
            image: "/Images/homeMain_images/step-4.jpg", 
            isLarge: false,
        },
    ];

    return (
        <section className="w-full bg-[#f4f4f4] py-16 md:py-16 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* --- HEADER BLOCK --- */}
                <div className="text-center max-w-3xl mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-4xl font-black text-neutral-900 uppercase tracking-tight mb-4">
                        Stop Wishing. Start Doing.
                    </h2>
                    <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto font-light">
                        Transforming your health requires a structured progression model. Take targeted action
                        by transitioning from basic routine movement towards continuous high-intensity training.
                    </p>
                </div>

                {/* --- STEPS PROCESS TIMELINE --- */}
                <div className="relative w-full max-w-5xl">

                    {/* Background Connecting Line (Visible on Large Screens) */}
                    <div className="absolute top-[35%] left-[10%] right-[10%] h-px border-t border-dashed border-gray-300 hidden lg:block z-0" />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10 items-end">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center text-center group">

                                {/* Circle Container System */}
                                <div
                                    className={`relative rounded-full border border-dashed  border-gray-300 p-2 bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${step.isLarge
                                            ? "w-44 h-44 md:w-64 md:h-64"
                                            : "w-36 h-36 md:w-50 md:h-50"
                                        }`}
                                >
                                    {/* Outer Image Circle Mask */}
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                                        />

                                        {/* Dark Tint Cover Panel */}
                                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />

                                        {/* Large Bold Step Number Stamp */}
                                        <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-black select-none drop-shadow-md">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Text Metadata Block */}
                                <div className="mt-6 max-w-55">
                                    <h3 className="text-[24px] font-black uppercase tracking-widest text-neutral-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-[14px] font-light leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}