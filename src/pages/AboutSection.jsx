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

                    {/* Main Image with specific rounded corner */}
                    <div className="w-full h-[500px] rounded-tl-[150px] rounded-br-[20px] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop"
                            alt="About Fashion"
                            className="w-full h-full object-cover"
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
                            <p className="text-[10px] uppercase tracking-tighter text-gray-500">Product Sold</p>
                        </div>
                        <div className="w-[1px] bg-gray-200"></div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-[#2D241E] dark:text-white">3105+</h4>
                            <p className="text-[10px] uppercase tracking-tighter text-gray-500">Best Reviews</p>
                        </div>
                    </div>

                    {/* Decorative Beige Box behind image */}
                    <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-[#F3E5D8] -z-10"></div>
                </div>

                {/* Right Side: Content */}
                <div className="lg:w-1/2 mt-20 lg:mt-0">
                    <h2 className="text-5xl font-serif text-[#2D241E] dark:text-white leading-tight mb-8">
                        Best Fashion <br /> Since 2016
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Ullamcorper Congue Eros,
                        Eget Tincidunt Ipsum Eleifend Ut Orem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
                        Sed Ullamcorper Congue Eros Eleifend Ut Tincidunt Ipsum.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;