import { ArrowRight } from "lucide-react";

export default function TeamMembers() {
    const team = [
        {
            id: 1,
            name: "Gloria Parker Joice",
            role: "Crossfit Expert",
            image: "/Images/homeMain_images/team-1.jpg",
        },
        {
            id: 2,
            name: "Marcus Aureli",
            role: "Crossfit Expert",
            image: "/Images/homeMain_images/team-2.jpg",
        },
        {
            id: 3,
            name: "Elena Rostova",
            role: "Crossfit Expert",
            image: "/Images/homeMain_images/team-3.jpg",
        },
        {
            id: 4,
            name: "Kenji Sato",
            role: "Fitness Trainer",
            image: "/Images/homeMain_images/team-4.jpg",
        },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative">

            {/* --- HEADER SECTION --- */}
            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-16 relative">

                {/* Left Side: Large Titles */}
                <div className="relative z-10">
                    {/* Background Number 03 */}
                    <span className="absolute -top-12 left-0 text-[100px] font-black text-gray-100 select-none leading-none -z-10">
                        03
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-neutral-900 uppercase tracking-tight leading-none">
                        Meet Our <br /> Strongest Team
                    </h2>
                </div>

                {/* Right Side: Read More Action + Linear Background Graphics */}
                <div className="flex md:justify-end items-center relative h-32 w-full">
                    {/* Abstract Lined Graphic Accent Background */}
                    <div className="absolute -right-25 -top-12.5 -bottom-12.5 left-0 hidden md:flex flex-col justify-between opacity-60 pointer-events-none -z-10">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <div key={i} className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-gray-300" />
                        ))}
                    </div>

                    {/* CTA Split Action Trigger */}
                    <button className="group flex items-center bg-[#f14d34] text-white text-xs font-black tracking-widest uppercase transition-colors hover:bg-neutral-900 relative z-10">
                        <span className="px-8 py-4">Read More</span>
                        <span className="bg-[#f25e47] group-hover:bg-neutral-800 p-4 transition-colors">
                            <ArrowRight size={14} strokeWidth={2.5} />
                        </span>
                    </button>
                </div>
            </div>

            {/* --- TEAM GRID SECTION WITH INTERACTIVE HOVER MASKS --- */}
            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member) => (
                    <div
                        key={member.id}
                        className="relative aspect-4/5 bg-neutral-100 overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                        {/* Base Portrait Image */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Default State: Vertical White Ribbon Side Badge */}
                        <div className="absolute right-0 bottom-12 bg-white px-2 py-4 shadow-sm flex items-center justify-center min-w-7 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                            <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-[#f14d34] [writing-mode:vertical-lr] rotate-180 select-none">
                                {member.role}
                            </span>
                        </div>

                        {/* Hover State: Full Dark Overlay Panel with Focused Text Alignment */}
                        <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">

                            {/* Trainer Full Name */}
                            <h3 className="text-white font-black uppercase tracking-wide text-base mb-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {member.name}
                            </h3>

                            {/* Role Indicator Subtext */}
                            <p className="text-[#f14d34] font-bold text-[10px] uppercase tracking-widest mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                {member.role}
                            </p>

                            {/* Social Channels Network */}
                            <div className="flex items-center gap-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                <img className="hover:cursor-pointer" src="/Images/navbar_images/facebook_Icon.png" alt="Facebook" />
                                <img className="hover:cursor-pointer" src="/Images/navbar_images/tweeter_Icon.png" alt="Tweeter" />
                                <img className="hover:cursor-pointer" src="/Images/navbar_images/instagram_Icon.png" alt="Instagram" />

                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}