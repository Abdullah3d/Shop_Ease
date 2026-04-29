import React from 'react';
import { Link } from 'react-router-dom';

const DealOfDay = () => {
    return (
        <section className="py-20 px-6 lg:px-12 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto bg-[#F3E5D8] flex flex-col md:flex-row items-center overflow-hidden relative">

                {/* Left: Content */}
                <div className="w-full md:w-1/2 p-10 lg:p-20 space-y-8 z-10">
                    <h2 className="text-5xl font-serif text-[#2D241E] leading-tight">Deal Of The Day</h2>
                    <p className="text-[#5A4B41] max-w-sm">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Ullamcorper Congue Erosget Tincidunt.
                    </p>

                    {/* Countdown Boxes */}
                    <div className="flex gap-4">
                        {[{ val: '04', label: 'Days' }, { val: '04', label: 'Hours' }, { val: '14', label: 'Min' }].map((item, idx) => (
                            <div key={idx} className="bg-white w-20 h-24 flex flex-col items-center justify-center shadow-sm">
                                <span className="text-3xl font-bold text-[#2D241E]">{item.val}</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        to="/shop"
                        className="bg-[#453C35] text-white px-10 py-4 uppercase tracking-[0.2em] font-bold hover:bg-black transition-colors"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Right: Image Section */}
                <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
                    <img
                        src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800"
                        alt="Deal background"
                        className="w-full h-full object-cover"
                    />
                    {/* Decorative Dot pattern overlay */}
                    <div className="absolute bottom-10 right-10 opacity-20 text-2xl text-black">
                        •••••<br />•••••<br />•••••
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealOfDay;