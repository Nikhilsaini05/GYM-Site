import { useState, useRef, useEffect } from "react";
import { BicepsFlexed, Menu, Search, ShoppingCart, ChevronRight, X, Phone, MapPin, Clock, } from "lucide-react";

function DropdownContainer({ triggerText, isOpen, setIsOpen, children }) {
    const localRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (localRef.current && !localRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsOpen]);

    return (
        <li
            ref={localRef}
            className="relative py-2 cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className={`transition-colors duration-200 ${isOpen ? "text-[#ff4a3b]" : "hover:text-[#ff4a3b]"}`}>
                {triggerText}
            </span>

            <div
                className={`absolute left-0 top-full mt-4 w-64 bg-[#111111] text-gray-300 shadow-xl transition-all duration-300 ease-in-out transform origin-top-left z-50
                    ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}
                `}
            >
                {children}
            </div>
        </li>
    );
}

export function Navbar() {
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isPortfolio, setIsPortfolio] = useState(false);
    const [isBlog, setIsBlog] = useState(false);
    const [isEvents, setIsEvents] = useState(false);
    const [isShop, setIsShop] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const homeSubItems = ["Main Home", "Gym Home", "Event Home", "Extreme Sports", "Products Showcase", "Yoga Home", "Shop Home", "Fitness Home", "Coming Soon", "Landing"];
    const pagesSubItems = ["About Us", "Meet The Team", "Our Services", "Products", "Pricing Plans", "BMI Calculator", "Contact Us", "404 Error Page"];
    const portfolioSubitem = ["Standard", "Gallery", "Layouts", "Singles"];
    const blogSubitem = ["Standard list", "Blog Masonry list", "Post Types"];
    const eventSubitem = ["Classes", "Classes Timetable", "Event single"];
    const shopSubitem = ["Shop", "Product single", "Shop Layouts", "shop Pages"];

    return (
        <>
            <header className="relative w-full bg-[#404040] shadow-sm py-5 px-12 z-40">
                <nav className="max-w-7xl mx-auto flex flex-row items-center justify-between">

                    {/* Logo Section */}
                    <div className="flex items-center tracking-tight select-none">
                        <span className="text-2xl text-[#ff4a3b] ml-1 mr-1">
                            <BicepsFlexed size={30} />
                        </span>
                        <span className="text-2xl text-white font-semibold uppercase">
                            Power Gym
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="flex flex-row items-center gap-8 text-sm font-extrabold uppercase tracking-wider text-white">
                            {/* HOME DROPDOWN */}
                            <DropdownContainer triggerText="Home" isOpen={isHomeOpen} setIsOpen={setIsHomeOpen}>
                                <ul className="flex flex-col py-4">
                                    {homeSubItems.map((item, index) => (
                                        <li key={index} className={`px-6 py-3 text-[11px] font-bold tracking-widest uppercase transition-colors duration-200 hover:text-white ${index === 0 ? "text-[#ff4a3b]" : "text-[#999999]"}`}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </DropdownContainer>

                            {/* PAGES DROPDOWN */}
                            <DropdownContainer triggerText="Pages" isOpen={isPagesOpen} setIsOpen={setIsPagesOpen}>
                                <ul className="flex flex-col py-4">
                                    {pagesSubItems.map((item, index) => (
                                        <li key={index} className="flex items-center justify-between px-6 py-3 text-[11px] font-bold tracking-widest uppercase text-[#999999] transition-colors duration-200 hover:text-white group/item">
                                            <span>{item}</span>
                                            <ChevronRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-white" />
                                        </li>
                                    ))}
                                </ul>
                            </DropdownContainer>

                            {/* Portfolio Dropdown*/}
                            <DropdownContainer triggerText="Portfolio" isOpen={isPortfolio} setIsOpen={setIsPortfolio}>
                                <ul className="flex flex-col py-4">
                                    {portfolioSubitem.map((item, index) => (
                                        <li key={index} className="flex items-center justify-between px-6 py-3 text-[11px] font-bold tracking-widest uppercase text-[#999999] transition-colors duration-200 hover:text-white group/item">
                                            <span>{item}</span>
                                            <ChevronRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-white" />
                                        </li>
                                    ))}
                                </ul>
                            </DropdownContainer>

                            {/* Blog Dropdown*/}
                            <DropdownContainer triggerText="Blog" isOpen={isBlog} setIsOpen={setIsBlog}>
                                <ul className="flex flex-col py-4">
                                    {blogSubitem.map((item, index) => (
                                        <li key={index} className="flex items-center justify-between px-6 py-3 text-[11px] font-bold tracking-widest uppercase text-[#999999] transition-colors duration-200 hover:text-white group/item">
                                            <span>{item}</span>
                                            <ChevronRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-white" />
                                        </li>
                                    ))}
                                </ul>
                            </DropdownContainer>

                            {/* event Dropdown*/}
                            <DropdownContainer triggerText="Events" isOpen={isEvents} setIsOpen={setIsEvents}>
                                <ul className="flex flex-col py-4">
                                    {eventSubitem.map((item, index) => (
                                        <li key={index} className="flex items-center justify-between px-6 py-3 text-[11px] font-bold tracking-widest uppercase text-[#999999] transition-colors duration-200 hover:text-white group/item">
                                            <span>{item}</span>
                                            <ChevronRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-white" />
                                        </li>
                                    ))}
                                </ul>
                            </DropdownContainer>

                            {/* Shop Dropdown*/}
                            <DropdownContainer triggerText="Shop" isOpen={isShop} setIsOpen={setIsShop}>
                                <ul className="flex flex-col py-4">
                                    {shopSubitem.map((item, index) => (
                                        <li key={index} className="flex items-center justify-between px-6 py-3 text-[11px] font-bold tracking-widest uppercase text-[#999999] transition-colors duration-200 hover:text-white group/item">
                                            <span>{item}</span>
                                            <ChevronRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-white" />
                                        </li>
                                    ))}
                                </ul>
                            </DropdownContainer>
                        </ul>
                    </div>

                    {/* Right Action Icons */}
                    <div className="flex flex-row items-center gap-6">
                        <button className="text-white hover:text-[#ff4a3b] transition-colors">
                            <Search size={24} strokeWidth={2.5} />
                        </button>

                        <button className="relative text-white hover:text-[#ff4a3b] transition-colors pr-1">
                            <ShoppingCart size={24} strokeWidth={2.5} />
                            <span className="absolute -top-2 -right-2 bg-[#ff4a3b] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
                                0
                            </span>
                        </button>

                        <button 
                            onClick={() => setIsSidebarOpen(true)}
                            className="bg-white hover:bg-[#ff4a3b] text-[#404040] hover:text-white p-2 rounded-full transition-colors flex items-center justify-center">
                            <Menu size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* 2. SIDEBAR PANEL */}
            <div 
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
                    isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsSidebarOpen(false)}
            />
            
            <aside 
                className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm sm:max-w-md bg-white p-10 md:p-14 shadow-2xl flex flex-col justify-between transition-transform duration-500 ease-in-out transform ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div>
                    <div className="flex justify-end mb-6">
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-[#111111] hover:text-[#ff4a3b] transition-colors"
                        >
                            <X size={28} strokeWidth={2} />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center tracking-tight select-none mb-6">
                        <span className="text-2xl text-[#ff4a3b] mr-1">
                            <BicepsFlexed size={30} />
                        </span>
                        <span className="text-2xl text-[#111111] font-bold uppercase tracking-wider">
                            Power Gym
                        </span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[#a5a5a5] text-[15px]  leading-relaxed mb-10">
                        Your fitness journey starts here. Build a stronger, healthier version of yourself.
                        Where goals meet results. Start your transformation today.
                    </p>

                    {/* Info Contact List */}
                    <div className="space-y-5 text-gray-500 font-medium text-sm">
                        <div className="flex items-center gap-4">
                            <Phone size={16} className="text-[#ff4a3b]" /> 
                            <span className="hover:text-black transition-colors cursor-pointer">000-000-0000</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin size={16} className="text-[#ff4a3b] shrink-0 mt-0.5" /> 
                            <span className="text-gray-500">Power GYM - PLA Market ,Backside of Town Park, Hisar, Haryana</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Clock size={16} className="text-[#ff4a3b]" /> 
                            <span>Mon - Sat 8.00 - 18.00, Sunday CLOSED</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Socials */}
                <div>
                    <h4 className="text-xs font-extrabold tracking-[0.2em] text-[#111111] uppercase mb-5">
                        Follow Us
                    </h4>
                    <div className="flex gap-5 text-gray-400">
                        <img className="hover:cursor-pointer" src="/Images/navbar_images/facebook_Icon.png" alt="Facebook" />
                        <img className="hover:cursor-pointer" src="/Images/navbar_images/tweeter_Icon.png" alt="Tweeter" />
                        <img className="hover:cursor-pointer" src="/Images/navbar_images/instagram_Icon.png" alt="Instagram" />
                    </div>
                </div>
            </aside>
        </>
    );
}