import { ArrowRight, ChevronDown } from "lucide-react";

export default function BmiCalculator() {
    const chartData = [
        { bmi: "Below 18.5", status: "Underweight" },
        { bmi: "18.5 - 24.9", status: "Healthy" },
        { bmi: "25.0 - 29.9", status: "Overweight" },
        { bmi: "30.0 - and Above", status: "Obese" },
    ];

    return (
        <section className="w-full bg-[#f4f4f4] py-18 md:py-16">
            <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* --- LEFT COLUMN: CHART --- */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 uppercase tracking-tight mb-8">
                        BMI Calculator Chart
                    </h2>

                    <div className="w-full border-collapse text-sm text-gray-700">
                        {/* Table Header */}
                        <div className="grid grid-cols-2 border-b border-dashed border-gray-300 pb-4 font-black uppercase tracking-wider text-neutral-900">
                            <div>BMI</div>
                            <div className="pl-6 border-l border-dashed border-gray-300">Weight Status</div>
                        </div>

                        {/* Table Body */}
                        {chartData.map((row, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-2 border-b border-dashed border-gray-200 py-4 font-medium text-gray-500"
                            >
                                <div>{row.bmi}</div>
                                <div className="pl-6 border-l border-dashed border-gray-200">{row.status}</div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <p className="mt-6 text-xs text-gray-400 font-light">
                        <span className="font-bold text-neutral-900">* BMR</span> Metabolic Rate / <span className="font-bold text-neutral-900">BMI</span> Body Mass Index
                    </p>
                </div>

                {/* --- RIGHT COLUMN: FORM --- */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 uppercase tracking-tight mb-4">
                        Calculate Your BMI
                    </h2>
                    <p className="text-gray-400 text-[16px] leading-relaxed mb-8 font-light">
                        Take control of your fitness journey today. Your Body Mass Index (BMI) is a vital baseline metric that
                        reveals exactly how your weight corresponds to your height. Use this tool to help our trainers build the 
                        perfect workout and nutrition program for your unique goals.
                    </p>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {/* Height & Weight Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Height / cm"
                                className="w-full bg-neutral-50 border border-neutral-100 text-neutral-800 placeholder-gray-400 text-sm px-5 py-3.5 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Weight / kg"
                                className="w-full bg-neutral-50 border border-neutral-100 text-neutral-800 placeholder-gray-400 text-sm px-5 py-3.5 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors"
                            />
                        </div>

                        {/* Age & Sex Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Age"
                                className="w-full bg-neutral-50 border border-neutral-100 text-neutral-800 placeholder-gray-400 text-sm px-5 py-3.5 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors"
                            />
                            <div className="relative w-full">
                                <select className="w-full bg-neutral-50 border border-neutral-100 text-gray-400 text-sm px-5 py-3.5 appearance-none focus:outline-none focus:bg-white focus:border-gray-300 transition-colors">
                                    <option value="">Sex</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Activity Dropdown */}
                        <div className="relative w-full">
                            <select className="w-full bg-neutral-50 border border-neutral-100 text-gray-400 text-sm px-5 py-3.5 appearance-none focus:outline-none focus:bg-white focus:border-gray-300 transition-colors">
                                <option value="">Select an activity factor:</option>
                                <option value="sedentary">Sedentary (Little or no exercise)</option>
                                <option value="light">Lightly Active (Exercise 1-3 days/week)</option>
                                <option value="moderate">Moderately Active (Exercise 3-5 days/week)</option>
                                <option value="active">Very Active (Exercise 6-7 days/week)</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>

                        {/* Action Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="group flex items-center bg-[#f14d34] text-white text-xs font-black tracking-widest uppercase transition-colors hover:bg-neutral-900"
                            >
                                <span className="px-8 py-4">Calculate</span>
                                <span className="bg-[#f25e47] group-hover:bg-neutral-800 p-4 transition-colors">
                                    <ArrowRight size={14} strokeWidth={2.5} />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}