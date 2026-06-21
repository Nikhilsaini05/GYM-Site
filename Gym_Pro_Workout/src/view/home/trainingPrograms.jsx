import { ArrowRight } from "lucide-react";

export default function TrainingPrograms() {
    const programs = [
        {
            id: 1,
            type: "text",
            bgColor: "bg-[#404040]", 
            tag: "Body Shape",
            title: "Crossfit",
            desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas.",
        },
        {
            id: 2,
            type: "image",
            src: "/Images/homeMain_images/Training-1.jpg",
            alt: "Woman stretching leg",
        },
        {
            id: 3,
            type: "text",
            bgColor: "bg-[#e52d27]", 
            tag: "Relax Program",
            title: "Body Balance",
            desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas.",
        },
        {
            id: 4,
            type: "image",
            src: "/Images/homeMain_images/Training-2.jpg",
            alt: "Woman running outdoors",
        },
        {
            id: 5,
            type: "image",
            src: "/Images/homeMain_images/Training-3.jpg",
            alt: "Person running on track close up",
        },
        {
            id: 6,
            type: "text",
            bgColor: "bg-[#e52d27]", 
            tag: "Cardio Workflow",
            title: "Cardio",
            desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas.",
        },
        {
            id: 7,
            type: "image",
            src: "/Images/homeMain_images/Training-4.jpg",
            alt: "Person lifting weights/barbell close up",
        },
        {
            id: 8,
            type: "text",
            bgColor: "bg-[#404040]", 
            tag: "Power-Pro",
            title: "Box",
            desc: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas.",
        },
    ];

    return (
        <section className="w-full bg-[#f4f4f4]">
            {/* Top Header Block */}
            <div className="w-full max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 uppercase tracking-tight">
                    Training Programs
                </h2>
                <p className="mt-4 md:mt-5 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl font-light">
                    Let us take your workout routines to the next level with our full-body programs and{" "}
                    <br className="hidden md:inline" />
                    intensity challenges. Find a training that matches your needs.
                </p>
            </div>

            {/* Feature Grid Core System */}
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
                {programs.map((item) => {
                    if (item.type === "text") {
                        return (
                            <div
                                key={item.id}
                                className={`${item.bgColor} text-white p-10 md:p-12 flex flex-col justify-center aspect-square select-none`}
                            >
                                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-100 font-bold mb-2 block">
                                    {item.tag}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-100 font-light leading-relaxed mb-6 max-w-xs">
                                    {item.desc}
                                </p>
                                <button className="group flex items-center text-xs font-bold uppercase tracking-widest text-white hover:opacity-80 transition-opacity self-start">
                                    Read More
                                    <span className="ml-1"><ArrowRight size={15}/></span>
                                </button>
                            </div>
                        );
                    }

                    return (
                        <div key={item.id} className="w-full aspect-square overflow-hidden bg-neutral-200">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-500 hover:scale-105"
                            />
                        </div>
                    );
                })}
            </main>
        </section>
    );
}