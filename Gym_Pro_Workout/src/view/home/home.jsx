import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const SLIDES = [
    {
        id: 1,
        title: "GET STRONG TODAY",
        bgText: "2K26",
        buttonText: "READ MORE",
        image: "/Images/homeMain_images/slider1.png",
    },
    {
        id: 2,
        title: "CHALLENGE YOUR LIMITS",
        bgText: "PUSH",
        buttonText: "READ MORE",
        image: "/Images/homeMain_images/slider2.png",
    },
    {
        id: 3,
        title: "NO PAIN NO GAIN",
        bgText: "PULL",
        buttonText: "READ MORE",
        image: "/Images/homeMain_images/slider3.png",
    },
];

export function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className='w-full h-[100dvh] '>
            <div className="relative w-full max-w-8xl h-full overflow-hidden bg-[#f4f4f4] font-sans">
                {SLIDES.map((slide, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 px-8 md:px-8 lg:px-20 lg:pt-28 transition-opacity duration-1000 ease-in-out ${
                                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                        >
                            {/* Left Column (Text & Button Container) */}
                            <div className="relative flex-1 w-full z-20 flex flex-col justify-center items-start max-w-xl gap-2 md:gap-0">
                                
                                {/* Background Watermark Text */}
                                <div className={`absolute top-68 md:-top-16 left-0 text-left -translate-y-12 select-none text-[4rem] md:text-[7rem] lg:text-[10rem] font-black text-gray-200/70 md:text-gray-200/50 leading-none z-0 transition-all duration-1000 delay-300 ${
                                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                }`}>
                                    {slide.bgText}
                                </div>

                                {/* Main Heading */}
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-800 text-left uppercase mb-2 md:mb-8 z-10 leading-none">
                                    {slide.title.split(' ').map((word, i) => (
                                        <span
                                            key={i}
                                            className={`block transition-all duration-700 ${
                                                isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                            }`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </h1>

                                {/* Action Button */}
                                <button className={`z-10 w-fit flex items-center bg-[#e52d27] text-white font-bold tracking-wider uppercase text-sm py-2 md:py-4 px-4 md:px-8 hover:bg-black transition-all duration-500 delay-300 ${
                                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}>
                                    {slide.buttonText}
                                    <span className="ml-2"><ArrowRight size={14} /></span>
                                </button>
                            </div>

                            {/* Right Column (Image Container) */}
                            <div className="flex-1 max-h-[40%] md:max-h-full relative flex items-center md:items-end justify-center z-10">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`h-full w-full object-contain transition-all duration-1000 ease-out ${
                                        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                    }`}
                                />
                            </div>
                        </div>
                    );
                })}

                {/* Manual Slide Navigation Indicators */}
                {/* <div className="hidden md:block absolute bottom-4 left-8 md:left-24 z-30 flex space-x-2">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 transition-all duration-300 ${
                                index === currentIndex ? 'w-8 bg-[#e52d27]' : 'w-2 bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
}