export default function TrainingPrograms() {
    return (
        <section className="w-full py-10 md:py-24 bg-[#f4f4f4]">
            <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 uppercase tracking-tight">
                    Training Programs
                </h2>

                {/* Description Text */}
                <p className="mt-4 md:mt-5 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl font-light">
                    Let us take your workout routines to the next level with our full-body programs and{" "}
                    <br className="hidden md:inline" />
                    intensity challenges. Find a training that matches your needs.
                </p>

            </div>
        </section>
    );
}