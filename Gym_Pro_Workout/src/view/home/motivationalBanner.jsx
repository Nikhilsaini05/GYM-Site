import { ArrowRight } from "lucide-react";

export default function MotivationalBanner() {
    return (
        <section className="w-full bg-white py-20 flex justify-center items-center font-sans overflow-hidden">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 relative">

                {/* Central Divider Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 hidden md:block z-0" />

                {/* --- ROW 1: LEFT (Image 1) --- */}
                <div className="relative flex justify-end items-center pr-0 md:pr-12 pb-12 md:pb-20 z-10">
                    <div className="relative w-full max-w-md aspect-4/3 overflow-hidden">
                        <img
                            src="/Images/homeMain_images/MotivationalBanner-1.png"
                            alt="Runner tying shoe on track"
                            className="w-full h-full object-cover"
                        />
                        
                    </div>
                </div>

                {/* --- ROW 1: RIGHT (Text Block 01) --- */}
                <div className="relative flex flex-col justify-center pl-8 md:pl-16 pb-12 md:pb-20 z-10">
                    <span className="absolute -top-6 left-6 md:left-12 text-[120px] font-black text-gray-100 select-none leading-none -z-10">
                        01
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-gray-900 mb-4 leading-tight">
                        Run an extra <br /> mile easily
                    </h2>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-6">
                        Prepare for your first half-marathon or run another one easily with our personalized running programs. Try our strength exercises for runners.
                    </p>
                    <div>
                        <button className="flex flex-row items-center px-8 py-4 bg-[#e52d27] text-white font-bold tracking-widest uppercase transition-colors">
                                <h1>Read More</h1>
                                <span className="bg-[#e52d27] ml-2 transition-colors">
                                    <ArrowRight size={24} />
                                </span> 
                            </button>
                    </div>
                </div>

                {/* --- ROW 2: LEFT (Text Block 02) --- */}
                <div className="relative flex flex-col justify-center pr-8 md:pr-16 pt-12 md:pt-20 order-3 md:order-2 z-10">
                    {/* Background Number */}
                    <span className="absolute top-12 right-6 md:right-12 text-[120px] font-black text-gray-100 select-none leading-none -z-10">
                        02
                    </span>
                    <div className="md:ml-auto md:text-left max-w-sm">
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-gray-900 mb-4 leading-tight">
                            What we have <br /> to offer
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Enjoy our progressive programs with world-class fitness equipment, trainers, and nutrition counselors to help you transform your body and health.
                        </p>
                        <div>
                            <button className="flex flex-row items-center px-8 py-4 bg-[#e52d27] text-white font-bold tracking-widest uppercase transition-colors">
                                <h1>Read More</h1>
                                <span className="bg-[#e52d27] ml-2 transition-colors">
                                    <ArrowRight size={24} />
                                </span> 
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- ROW 2: RIGHT --- */}
                <div className="relative flex items-center pl-0 md:pl-12 pt-12 md:pt-20 order-2 md:order-3 z-10">
                    <div className="relative w-full max-w-md h-75 md:h-87">
                        {/* Base Image */}
                        <div className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden">
                            <img
                                src="/Images/homeMain_images/MotivationalBanner-2.png"
                                alt="Runner sitting on track"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 -right-18 w-1/2 h-[85%] border-2 border-white shadow-xl overflow-hidden">
                            <img
                                src="/Images/homeMain_images/MotivationalBanner-2.png"
                                alt="Runner jumping"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}