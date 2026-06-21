import { useState } from "react";

export default function TimeTable() {
    const categories = [
        "Events",
        "Crossfit",
        "Cardio",
        "Box",
        "Meditation",
        "Yoga Classes",
        "Body Balance",
    ];

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const timeSlots = ["10.00", "12.00", "16.00", "18.00", "20.00"];

    const [activeTab, setActiveTab] = useState("Events");

    // 2. Class schedule 
    const scheduleData = [
        // 10:00 Slot
        { time: "10.00", day: "Monday", type: "Crossfit", label: "CROSSFIT", duration: "10.00 - 11.00", trainer: "Amanda Snow", color: "text-[#f14d34]" },
        { time: "10.00", day: "Tuesday", type: "Cardio", label: "CARDIO", duration: "10.00 - 11.00", trainer: "Randy Nelson", color: "text-[#00ced1]" },
        { time: "10.00", day: "Wednesday", type: "Crossfit", label: "CROSSFIT", duration: "10.00 - 11.00", trainer: "Amanda Snow", color: "text-[#f14d34]" },
        { time: "10.00", day: "Thursday", type: "Body Balance", label: "BODY BALANCE", duration: "10.00 - 11.00", trainer: "Barbara Holland", color: "text-[#4169e1]" },
        { time: "10.00", day: "Saturday", type: "Cardio", label: "CARDIO", duration: "10.00 - 11.00", trainer: "Randy Nelson", color: "text-[#00ced1]" },

        // 12:00 Slot
        { time: "12.00", day: "Monday", type: "Box", label: "BOX", duration: "12.00 - 13.00", trainer: "Matthew Dunn", color: "text-[#00ff7f]" },
        { time: "12.00", day: "Tuesday", type: "Crossfit", label: "CROSSFIT", duration: "12.00 - 13.00", trainer: "Amanda Snow", color: "text-[#f14d34]" },
        { time: "12.00", day: "Wednesday", type: "Meditation", label: "MEDITATION", duration: "12.00 - 13.00", trainer: "Nicole Fuller", color: "text-[#a9a9a9]" },
        { time: "12.00", day: "Thursday", type: "Box", label: "BOX", duration: "12.00 - 13.00", trainer: "Matthew Dunn", color: "text-[#00ff7f]" },
        { time: "12.00", day: "Friday", type: "Crossfit", label: "CROSSFIT", duration: "12.00 - 13.00", trainer: "Amanda Snow", color: "text-[#f14d34]" },
        { time: "12.00", day: "Saturday", type: "Body Balance", label: "BODY BALANCE", duration: "12.00 - 13.00", trainer: "Barbara Holland", color: "text-[#4169e1]" },
        { time: "12.00", day: "Sunday", type: "Crossfit", label: "CROSSFIT", duration: "12.00 - 13.00", trainer: "Amanda Snow", color: "text-[#f14d34]" },

        // 16:00 Slot
        { time: "16.00", day: "Tuesday", type: "Body Balance", label: "BODY BALANCE", duration: "16.00 - 17.00", trainer: "Barbara Holland", color: "text-[#4169e1]" },
        { time: "16.00", day: "Wednesday", type: "Box", label: "BOX", duration: "16.00 - 17.00", trainer: "Matthew Dunn", color: "text-[#00ff7f]" },
        { time: "16.00", day: "Thursday", type: "Crossfit", label: "CROSSFIT", duration: "16.00 - 17.00", trainer: "Amanda Snow", color: "text-[#f14d34]" },
        { time: "16.00", day: "Friday", type: "Body Balance", label: "BODY BALANCE", duration: "16.00 - 17.00", trainer: "Barbara Holland", color: "text-[#4169e1]" },
        { time: "16.00", day: "Sunday", type: "Cardio", label: "CARDIO", duration: "16.00 - 17.00", trainer: "Randy Nelson", color: "text-[#00ced1]" },

        // 18:00 Slot
        { time: "18.00", day: "Monday", type: "Cardio", label: "CARDIO", duration: "18.00 - 19.00", trainer: "Randy Nelson", color: "text-[#00ced1]" },
        { time: "18.00", day: "Friday", type: "Cardio", label: "CARDIO", duration: "18.00 - 19.00", trainer: "Randy Nelson", color: "text-[#00ced1]" },
        { time: "18.00", day: "Saturday", type: "Box", label: "BOX", duration: "18.00 - 19.00", trainer: "Matthew Dunn", color: "text-[#00ff7f]" },
        { time: "18.00", day: "Sunday", type: "Box", label: "BOX", duration: "18.00 - 19.00", trainer: "Matthew Dunn", color: "text-[#00ff7f]" },

        // 20:00 Slot
        { time: "20.00", day: "Monday", type: "Crossfit", label: "CROSSFIT", duration: "20.00 - 21.00", trainer: "Amanda Snow", color: "text-[#f14d34]" },
        { time: "20.00", day: "Tuesday", type: "Box", label: "BOX", duration: "20.00 - 21.00", trainer: "Matthew Dunn", color: "text-[#00ff7f]" },
        { time: "20.00", day: "Wednesday", type: "Body Balance", label: "BODY BALANCE", duration: "20.00 - 21.00", trainer: "Barbara Holland", color: "text-[#4169e1]" },
        { time: "20.00", day: "Thursday", type: "Cardio", label: "CARDIO", duration: "20.00 - 21.00", trainer: "Randy Nelson", color: "text-[#00ced1]" },
        { time: "20.00", day: "Friday", type: "Yoga Classes", label: "YOGA CLASSES", duration: "20.00 - 21.00", trainer: "Amanda Snow", color: "text-[#da70d6]" },
        { time: "20.00", day: "Sunday", type: "Body Balance", label: "BODY BALANCE", duration: "20.00 - 21.00", trainer: "Barbara Holland", color: "text-[#4169e1]" },
    ];

    return (
        <section className="w-full bg-[#1e1e22] text-white py-16 md:py-16 font-sans selection:bg-[#f14d34]">
            <div className="w-full max-w-7xl mx-auto px-4">

                {/* --- HEADER TITLE --- */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white">
                        Classes Timetable
                    </h2>
                </div>

                {/* --- FILTER NAVIGATION TABS --- */}
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-16 max-w-5xl mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-5 py-2.5 text-[16px] font-black border border-[#404040] uppercase tracking-wider transition-all duration-200 select-none ${activeTab === cat
                                    ? "bg-[#f14d34] text-white shadow-md"
                                    : "bg-transparent text-gray-400 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- TIMETABLE CORE MATRIX --- */}
                <div className="w-full overflow-x-auto border border-neutral-800/40 bg-[#404040]/40 p-4 rounded-sm">
                    <div className="min-w-237 text-center">

                        {/* Table Header: Days of the week */}
                        <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-dashed border-neutral-700/80 pb-5 text-[14px] font-black uppercase tracking-widest text-gray-400">
                            <div></div> 
                            {days.map((day) => (
                                <div key={day}>{day}</div>
                            ))}
                        </div>

                        {/* Table Body Rows Matrix */}
                        <div className="divide-y divide-dashed divide-neutral-700/90">
                            {timeSlots.map((time) => (
                                <div key={time} className="grid grid-cols-[80px_repeat(7,1fr)] items-center py-6">

                                    {/* Left Column: Time Indicator */}
                                    <div className="text-[14px] font-black text-gray-400 text-left pl-2 select-none">
                                        {time}
                                    </div>

                                    {/* Days Matrix Cells */}
                                    {days.map((day) => {
                                        // Match slot entry data
                                        const classItem = scheduleData.find(
                                            (item) => item.time === time && item.day === day
                                        );

                                        // Evaluate active category filters
                                        const isVisible =
                                            classItem &&
                                            (activeTab === "Events" || activeTab.toLowerCase() === classItem.type.toLowerCase());

                                        return (
                                            <div key={day} className="px-2 min-h-19 flex flex-col justify-center items-center">
                                                {classItem && (
                                                    <div
                                                        className={`transition-all duration-400 transform ${isVisible
                                                                ? "opacity-100 scale-100 pointer-events-auto"
                                                                : "opacity-10 scale-95 pointer-events-none filter blur-[1px]"
                                                            }`}
                                                    >
                                                        <h4 className={`text-[14px] font-black tracking-wider uppercase mb-1.5 ${classItem.color}`}>
                                                            {classItem.label}
                                                        </h4>
                                                        <p className="text-[12px] font-bold text-gray-300 select-none mb-1">
                                                            {classItem.duration}
                                                        </p>
                                                        <p className="text-[12px] text-gray-500 font-medium tracking-wide">
                                                            {classItem.trainer}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}

                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}