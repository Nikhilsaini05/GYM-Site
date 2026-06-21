import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function BmiCalculator() {
    const chartData = [
        { bmi: "Below 18.5", status: "Underweight", min: 0, max: 18.49 },
        { bmi: "18.5 - 24.9", status: "Healthy", min: 18.5, max: 24.99 },
        { bmi: "25.0 - 29.9", status: "Overweight", min: 25.0, max: 29.99 },
        { bmi: "30.0 - and Above", status: "Obese", min: 30.0, max: 100 },
    ];

    // 1. Form and calculation states
    const [formData, setFormData] = useState({
        height: "",
        weight: "",
        age: "",
        sex: "",
        activity: "",
    });
    const [result, setResult] = useState(null);

    // 2. Handle input field value changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 3. BMI Core Logic Calculation
    const calculateBmi = (e) => {
        e.preventDefault();
        const h = parseFloat(formData.height);
        const w = parseFloat(formData.weight);

        if (!h || !w || h <= 0 || w <= 0) {
            alert("Please enter a valid height and weight.");
            return;
        }

        // Convert height from cm to meters, then calculate
        const heightInMeters = h / 100;
        const bmiValue = w / (heightInMeters * heightInMeters);
        const finalBmi = parseFloat(bmiValue.toFixed(1));

        // Determine current text status category
        let matchedStatus = "Unknown";
        if (finalBmi < 18.5) matchedStatus = "Underweight";
        else if (finalBmi >= 18.5 && finalBmi <= 24.9) matchedStatus = "Healthy";
        else if (finalBmi >= 25.0 && finalBmi <= 29.9) matchedStatus = "Overweight";
        else if (finalBmi >= 30.0) matchedStatus = "Obese";

        setResult({
            score: finalBmi,
            status: matchedStatus,
        });
    };

    return (
        <section className="w-full bg-[#f4f4f4] py-16 md:py-24">
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
                        {chartData.map((row, index) => {
                            // Conditionally apply a solid red background tag highlight if matching computed state
                            const isCurrentRange = result && result.score >= row.min && result.score <= row.max;

                            return (
                                <div
                                    key={index}
                                    className={`grid grid-cols-2 border-b border-dashed border-gray-200 py-4 font-medium transition-all duration-300 ${isCurrentRange
                                            ? "bg-[#f14d34] text-white px-2 rounded-sm font-bold shadow-sm"
                                            : "text-gray-500"
                                        }`}
                                >
                                    <div className={isCurrentRange ? "pl-2" : ""}>{row.bmi}</div>
                                    <div className={`pl-6 border-l border-dashed ${isCurrentRange ? "border-white/40" : "border-gray-200"}`}>
                                        {row.status} {isCurrentRange && "✓"}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer Note */}
                    <p className="mt-6 text-xs text-gray-400 font-light">
                        <span className="font-bold text-neutral-900">* BMR</span> Metabolic Rate / <span className="font-bold text-neutral-900">BMI</span> Body Mass Index
                    </p>
                </div>

                {/* --- RIGHT COLUMN: FORM --- */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 uppercase tracking-tight mb-4">
                            Calculate Your BMI
                        </h2>
                        <p className="text-gray-400 text-[15px] leading-relaxed mb-8 font-light">
                            Take control of your fitness journey today. Your Body Mass Index (BMI) is a vital baseline metric that
                            reveals exactly how your weight corresponds to your height. Use this tool to help our trainers build the
                            perfect workout and nutrition program for your unique goals.
                        </p>

                        <form className="space-y-4" onSubmit={calculateBmi}>
                            {/* Height & Weight Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="number"
                                    name="height"
                                    placeholder="Height / cm"
                                    value={formData.height}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white border border-neutral-200 text-neutral-800 placeholder-gray-400 text-sm px-5 py-3.5 focus:outline-none focus:border-gray-400 transition-colors"
                                />
                                <input
                                    type="number"
                                    name="weight"
                                    placeholder="Weight / kg"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white border border-neutral-200 text-neutral-800 placeholder-gray-400 text-sm px-5 py-3.5 focus:outline-none focus:border-gray-400 transition-colors"
                                />
                            </div>

                            {/* Age & Sex Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    className="w-full bg-white border border-neutral-200 text-neutral-800 placeholder-gray-400 text-sm px-5 py-3.5 focus:outline-none focus:border-gray-400 transition-colors"
                                />
                                <div className="relative w-full">
                                    <select
                                        name="sex"
                                        value={formData.sex}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-neutral-200 text-gray-400 text-sm px-5 py-3.5 appearance-none focus:outline-none focus:border-gray-400 transition-colors"
                                    >
                                        <option value="">Sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                                </div>
                            </div>

                            {/* Activity Dropdown */}
                            <div className="relative w-full">
                                <select
                                    name="activity"
                                    value={formData.activity}
                                    onChange={handleInputChange}
                                    className="w-full bg-white border border-neutral-200 text-gray-400 text-sm px-5 py-3.5 appearance-none focus:outline-none focus:border-gray-400 transition-colors"
                                >
                                    <option value="">Select an activity factor:</option>
                                    <option value="sedentary">Sedentary (Little or no exercise)</option>
                                    <option value="light">Lightly Active (Exercise 1-3 days/week)</option>
                                    <option value="moderate">Moderately Active (Exercise 3-5 days/week)</option>
                                    <option value="active">Very Active (Exercise 6-7 days/week)</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>

                            {/* Action Button */}
                            <div className="pt-2">
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

                    {/* --- RESULTS PANEL --- */}
                    {result && (
                        <div className="mt-8 p-5 bg-white border-l-4 border-[#f14d34] shadow-sm rounded-r-sm animate-fade-in">
                            <p className="text-xs uppercase font-bold text-gray-400 tracking-wider">Your Analysis Result</p>
                            <div className="flex items-baseline gap-4 mt-1">
                                <span className="text-3xl font-black text-neutral-900">{result.score}</span>
                                <span className="text-sm font-extrabold uppercase tracking-wide text-[#f14d34]">
                                    {result.status}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 font-light">
                                A healthy target BMI range sits cleanly between 18.5 and 24.9.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}