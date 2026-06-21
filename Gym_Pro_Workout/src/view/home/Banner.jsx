export default function Banner() {
    // eslint-disable-next-line no-unused-vars
    const Brands = [
        { id: 1, name: "FLEX", className: "font-black tracking-tighter text-3xl italic" },
        { id: 2, name: "Running fitness", className: "font-serif font-extrabold tracking-tight text-2xl italic tracking-tight" },
        { id: 3, name: "FITNESS TRIBE--", className: "font-mono font-bold tracking-widest text-xl uppercase leading-none max-w-[100px]" },
        { id: 4, name: "CROSSSPORT", className: "font-sans font-black tracking-normal text-3xl uppercase tracking-tighter" },
        { id: 5, name: "INSIDE FITNESS", className: "font-sans font-extrabold tracking-tight text-2xl uppercase italic" },
    ];

    return (
        <section className="w-full bg-[#e52d27] py-12 md:py-16 flex items-center justify-center select-none">
            <div className="w-full max-w-6xl mx-auto px-6 flex flex-wrap gap-12 md:gap-6 items-center justify-between text-white opacity-90">

                {/* Brand 1: FLEX */}
                <div className="flex items-center justify-center min-w-30">
                    <span className="text-4xl font-extrabold tracking-tighter uppercase italic drop-shadow-sm">
                        Flex
                    </span>
                </div>

                {/* Brand 2: Running Fitness */}
                <div className="flex items-center justify-center min-w-35">
                    <span className="text-3xl font-black italic tracking-tight uppercase flex flex-col items-start leading-none">
                        R<span className="text-xs font-bold lowercase tracking-normal -mt-1 bg-white text-[#e52d27] px-1 rounded-sm">fitness</span>
                    </span>
                </div>

                {/* Brand 3: FITNESS TRIBE-- */}
                <div className="flex items-center justify-center min-w-30 text-center">
                    <span className="text-lg font-bold tracking-widest uppercase leading-none border-y border-white/20 py-1">
                        Fitness <br /> <span className="text-xs font-black tracking-[0.3em]">Tribe</span>
                    </span>
                </div>

                {/* Brand 4: CROSSSPORT */}
                <div className="flex items-center justify-center min-w-35">
                    <span className="text-3xl font-serif font-black tracking-tighter uppercase scale-y-110 border-x-2 border-white/40 px-2">
                        Crosssport
                    </span>
                </div>

                {/* Brand 5: INSIDE FITNESS */}
                <div className="flex items-center justify-center min-w-35">
                    <span className="text-2xl font-sans font-black italic uppercase tracking-tighter leading-none flex flex-col items-center">
                        <span className="text-[10px] tracking-widest font-medium not-italic opacity-80">Inside</span>
                        Fitness
                    </span>
                </div>

            </div>
        </section>
    );
}