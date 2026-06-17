import { useState, useEffect } from 'react';

const SLIDES = [
    {
        id: 1,
        title: "GET STRONG TODAY",
        bgText: "2K26",
        buttonText: "READ MORE",
        image: "https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        title: "CHALLENGE YOUR LIMITS",
        bgText: "PUSH",
        buttonText: "READ MORE",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        title: "NO PAIN NO GAIN",
        bgText: "PULL",
        buttonText: "READ MORE",
        image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxneW18ZW58MHx8MHx8fDA%3D",
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
        <>
            <div className="relative w-full h-[530px] overflow-hidden bg-[#f4f4f4] font-sans">
                {SLIDES.map((slide, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                                }`}
                        >
                            {/* Left Column: Text Content */}
                            <div className="relative flex-1 z-20 flex flex-col justify-center max-w-xl">
                                {/*  background watermark text */}
                                <div className={`absolute top-0 left-0 -translate-y-12 select-none text-[12rem] font-black text-gray-200/50 leading-none z-0 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                    }`}>
                                    {slide.bgText}
                                </div>

                                {/* Main Heading */}
                                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-800 uppercase mb-8 z-10 leading-none">
                                    {slide.title.split(' ').map((word, i) => (
                                        <span
                                            key={i}
                                            className={`block transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                                }`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </h1>

                                {/* Action Button */}
                                <button className={`z-10 w-fit flex items-center bg-[#e52d27] text-white font-bold tracking-wider uppercase text-sm py-4 px-8 hover:bg-black transition-all duration-500 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}>
                                    {slide.buttonText}
                                    <span className="ml-4 font-light">→</span>
                                </button>
                            </div>

                            {/* Right Column: Image */}
                            <div className="flex-1 h-full relative flex items-end justify-center z-10">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`max-h-[90%] object-contain transition-all duration-1000 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                        }`}
                                />
                            </div>
                        </div>
                    );
                })}

                {/* Manual Slide  */}
                <div className="absolute bottom-8 left-8 md:left-24 z-30 flex space-x-2">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#e52d27]' : 'w-2 bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
