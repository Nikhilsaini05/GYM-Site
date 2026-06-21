import { Dumbbell, ClipboardList, Waves, HeartPulse } from "lucide-react";

export default function FitnessGoals() {
    const features = [
        {
            id: 1,
            icon: <Dumbbell size={48} strokeWidth={1.2} className="text-black" />,
            title: "Quality Equipment",
            desc: "We provide high-grade, durable workout gear and premium training machinery to keep your sessions completely safe and effective.",
        },
        {
            id: 2,
            icon: <ClipboardList size={48} strokeWidth={1.2} className="text-black" />,
            title: "Healthy Nutrition Plan",
            desc: "Get strategic dietary guides and meal structures customized by professional nutritionists to maximize your muscle recovery and energy.",
        },
        {
            id: 3,
            icon: <Waves size={48} strokeWidth={1.2} className="text-black" />,
            title: "Shower Service",
            desc: "Enjoy access to fully equipped, clean, and highly maintained locker rooms and shower amenities right after finishing your heavy workouts.",
        },
        {
            id: 4,
            icon: <HeartPulse size={48} strokeWidth={1.2} className="text-black" />,
            title: "Unique to Your Needs",
            desc: "Every workout routine and progression path is shaped precisely around your body type, personal limits, and fitness targets.",
        },
    ];

    return (
        <section className="w-full bg-white py-20 md:py-28">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Block */}
                <div className="text-center max-w-3xl mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 uppercase tracking-tight mb-5">
                        Set High Fitness Goals
                    </h2>
                    <p className="text-gray-500 text-[18px] md:text-[21px] leading-relaxed max-w-4xl mx-auto font-light">
                        After you decide to start training we will make sure you get the best fitness program.
                        <br className="hidden md:inline" />
                        Our sport experts and latest sports equipment are the winning combination.
                    </p>
                </div>

                {/* Features 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-9xl">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex flex-col items-center text-center px-2"
                        >
                            {/* Icon Container */}
                            <div className="mb-6 h-16 flex items-center justify-center">
                                {feature.icon}
                            </div>

                            {/* Feature Title */}
                            <h3 className="text-[18px] font-black uppercase tracking-wider text-neutral-900 mb-4">
                                {feature.title}
                            </h3>

                            {/* Feature Description */}
                            <p className="text-gray-400 text-[16px] font-light text-justify leading-relaxed ">
                                {feature.desc}
                            </p> 
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}