import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-24 px-6 lg:px-12 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Image with floating stats */}
                <div className="lg:w-1/2 relative">
                    {/* Decorative dots */}
                    <div className="absolute -top-8 left-1/2 text-[#2D241E] opacity-20 text-2xl">
                        ••••••<br />••••••<br />••••••
                    </div>

                    {/* Updated Main Image */}
                    <div className="w-full h-[500px] rounded-tl-[150px] rounded-br-[20px] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2070&auto=format&fit=crop"
                            alt="FiFash Quality Apparel"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Statistics Floating Card */}
                    <div className="absolute -bottom-10 right-0 lg:-right-10 bg-white dark:bg-gray-800 shadow-2xl p-8 flex gap-12 border-t-4 border-[#EBD9C8]">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-[#2D241E] dark:text-white">2014</h4>
                            <p className="text-[10px] uppercase tracking-tighter text-gray-500">FiFash Founded</p>
                        </div>
                        <div className="w-[1px] bg-gray-200"></div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-[#2D241E] dark:text-white">8900+</h4>
                            <p className="text-[10px] uppercase tracking-tighter text-gray-500">Products Sold</p>
                        </div>
                        <div className="w-[1px] bg-gray-200"></div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-[#2D241E] dark:text-white">3105+</h4>
                            <p className="text-[10px] uppercase tracking-tighter text-gray-500">Happy Reviews</p>
                        </div>
                    </div>

                    {/* Decorative Beige Box behind image */}
                    <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-[#F3E5D8] -z-10"></div>
                </div>

                {/* Right Side: Content */}
                <div className="lg:w-1/2 mt-20 lg:mt-0">
                    <h2 className="text-5xl font-serif text-[#2D241E] dark:text-white leading-tight mb-8">
                        Crafting Your <br /> Unique Style <br /> Since 2014
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic border-l-4 border-[#F3E5D8] pl-6">
                        "We believe that fashion is more than just clothing—it's a form of self-expression.
                        Since our journey began, we've been dedicated to bringing you high-quality,
                        sustainable pieces that make you feel confident every single day.
                        Our mission is to blend comfort with elegance, ensuring you always stand out from the crowd."
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;