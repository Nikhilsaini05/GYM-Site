
const SERVICES = [
    {
        id: 1,
        title: "Group Fitness",
        description: "Stay motivated. Our group fitness classes will help you find a perfect workout.",
        image: "/Images/homeMain_images/group_activity.png",
        
    },
    {
        id: 2,
        title: "Personal Trainer",
        description: "Stay motivated. Our personal trainers will help you find a perfect workout.",
        image: "/Images/homeMain_images/personal_trainer.png",
        
    },
    {
        id: 3,
        title: "Cardio Program",
        description: "Stay motivated. Our cardio programs will help you find a perfect workout.",
        image: "/Images/homeMain_images/Cardio_Program.png",
        
    }
];

export default function ServicesBanners() {
    return (
        <section className="w-full  ">
            <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-3 bg-black overflow-hidden select-none">
            {SERVICES.map((service) => (
                <div
                    key={service.id}
                    className="group relative h-75 w-full flex flex-col items-center justify-center text-center px-8 cursor-pointer bg-[#0f0f0f] overflow-hidden"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1200 ease-in-out opacity-40 group-hover:opacity-0 group-hover:scale-105"
                        style={{ backgroundImage: `url(${service.image})` }}
                    />

                    <div className="relative z-10 flex flex-col items-center w-full max-w-xs transition-transform duration-500 group-hover:-translate-y-2">

                        <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                            {service.icon}
                        </div>

                        <h3 className="text-xl md:text-2xl font-black tracking-wider text-white uppercase mb-3 font-sans">
                            {service.title}
                        </h3>

                        <p className="text-neutral-400 text-sm font-medium leading-relaxed tracking-wide transition-all duration-500 max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2">
                            {service.description}
                        </p>

                        <a
                            href="#"
                            className="text-[#e52d27] font-black tracking-widest text-xs uppercase flex items-center transition-all duration-500 max-h-0 opacity-0 overflow-hidden group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-6 hover:text-white"
                        >
                            READ MORE <span className="ml-2 font-medium text-base leading-none">→</span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </section>
        
    );
}