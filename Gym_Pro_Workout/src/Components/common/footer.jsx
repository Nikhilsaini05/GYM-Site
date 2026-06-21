import { BicepsFlexed } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-neutral-400 font-sans text-sm selection:bg-[#e52d27] selection:text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                {/* Column 1: Brand & Info */}
                <div className="flex flex-col space-y-6">
                    
                        <h2 className="flex flex-row text-white text-2xl font-black tracking-wider uppercase">
                            <span className=" text-2xl text-[#ff4a3b] mr-1"><BicepsFlexed size={30} /></span>POWER GYM
                        </h2>
                    
                    <p className="leading-relaxed text-neutral-400">
                        Your fitness journey starts here. Build a stronger, healthier version of yourself.
                        Where goals meet results. Start your transformation today.</p>
                    <div className="space-y-4 pt-2">
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-[#e52d27] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span>000-000-0000</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-[#e52d27] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span>Power GYM - PLA Market ,Backside of Town Park, Hisar, Haryana</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-[#e52d27] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Mon - Sat 8.00 - 18.00</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Latest News */}
                <div className="flex flex-col space-y-6">
                    <h3 className="text-white text-lg font-extrabold tracking-wider uppercase">
                        LATEST NEWS
                    </h3>
                    <div className="divide-y divide-neutral-800 space-y-4">
                        <div className="pt-1">
                            <a href="#" className="hover:text-white transition-colors text-neutral-300 font-bold uppercase tracking-wide block">FITNESS CLASS FOR YOU</a>
                            <span className="text-xs tracking-widest uppercase font-medium text-neutral-500 mt-1 block">OCTOBER 22, 2017</span>
                        </div>
                        <div className="pt-4">
                            <a href="#" className="hover:text-white transition-colors text-neutral-300 font-bold uppercase tracking-wide block leading-snug">GYM EXERCISES TO BOOST YOUR FOOTBALL</a>
                            <span className="text-xs tracking-widest uppercase font-medium text-neutral-500 mt-1 block">OCTOBER 22, 2017</span>
                        </div>
                        <div className="pt-4">
                            <a href="#" className="hover:text-white transition-colors text-neutral-300 font-bold uppercase tracking-wide block">BOOST PERFORMANCE.</a>
                            <span className="text-xs tracking-widest uppercase font-medium text-neutral-500 mt-1 block">NOVEMBER 22, 2017</span>
                        </div>
                    </div>
                </div>

                {/* Column 3: Recent Projects */}
                <div className="flex flex-col space-y-6">
                    <h3 className="text-white text-lg font-extrabold tracking-wider uppercase">
                        RECENT PROJECTS
                    </h3>
                    <ul className="space-y-4 font-bold tracking-wider uppercase text-neutral-400">
                        <li><a href="#" className="hover:text-white transition-colors">MARCH 2018</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FEBRUARY 2018</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">JANUARY 2018</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">DECEMBER 2017</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">NOVEMBER 2017</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">OCTOBER 2017</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact Form */}
                <div className="flex flex-col space-y-6">
                    <h3 className="text-white text-lg font-extrabold tracking-wider uppercase">
                        CONTACT
                    </h3>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-[#242424] text-white placeholder-neutral-500 border border-transparent focus:border-neutral-700 focus:outline-none py-3 px-4 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-full bg-[#242424] text-white placeholder-neutral-500 border border-transparent focus:border-neutral-700 focus:outline-none py-3 px-4 transition-colors"
                        />
                        <textarea
                            placeholder="Comment"
                            rows={3}
                            className="w-full bg-[#242424] text-white placeholder-neutral-500 border border-transparent focus:border-neutral-700 focus:outline-none py-3 px-4 transition-colors resize-none"
                        />
                        <button
                            type="submit"
                            className="w-fit flex items-center bg-[#e52d27] text-white font-bold tracking-wider uppercase text-xs hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            <span className="py-4 px-6 border-r border-red-500/30">SEND MESSAGE</span>
                            <span className="py-4 px-4 font-light">→</span>
                        </button>
                    </form>
                </div>

            </div>

            {/* Sub Footer Bar */}
            <div className="bg-[#111111] py-6 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider">
                    <p>© 2017 Qode Interactive, All Rights Reserved</p>

                    <div className="flex items-center space-x-6">
                        <span className="text-[14px]">Follow us</span>
                        <div className="flex items-center space-x-3">
                            <img className="hover:cursor-pointer h-8" src="/Images/navbar_images/facebook_Icon.png" alt="Facebook" />
                            <img className="hover:cursor-pointer h-8" src="/Images/navbar_images/tweeter_Icon.png" alt="Tweeter" />
                            <img className="hover:cursor-pointer h-8" src="/Images/navbar_images/instagram_Icon.png" alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}