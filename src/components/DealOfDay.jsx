import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DealOfDay = () => {
    // কাউন্টডাউন লজিক
    const [timeLeft, setTimeLeft] = useState({
        days: '05',
        hours: '12',
        minutes: '45',
        seconds: '00'
    });

    useEffect(() => {
        const timer = setInterval(() => {
            // এখানে আপনি আপনার টার্গেট ডেট সেট করতে পারেন
            // আপাতত এটি ডামি হিসেবে রান করবে
            const sec = parseInt(timeLeft.seconds);
            if (sec > 0) {
                setTimeLeft({ ...timeLeft, seconds: (sec - 1).toString().padStart(2, '0') });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <section className="py-24 px-6 lg:px-12 bg-[#FDFCFB] dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto bg-[#F7F2EE] dark:bg-gray-800 rounded-3xl flex flex-col md:flex-row items-center relative shadow-2xl shadow-stone-200/50 dark:shadow-none">

                {/* Left: Content */}
                <div className="w-full md:w-1/2 p-12 lg:p-24 space-y-10 z-10">
                    <div className="space-y-3">
                        <span className="text-[#2D241E]/50 dark:text-gray-400 uppercase tracking-[0.4em] text-[10px] font-bold block">Limited Time Offer</span>
                        <h2 className="text-5xl lg:text-6xl font-serif text-[#2D241E] dark:text-white leading-tight">
                            Deal Of <br /> The Day
                        </h2>
                    </div>

                    <p className="text-[#5A4B41] dark:text-gray-300 max-w-sm text-sm leading-relaxed font-light">
                        Experience premium luxury at an exclusive price. Our handpicked collection is available at a special discount for a limited time only.
                    </p>

                    {/* Countdown Boxes */}
                    <div className="flex gap-4 md:gap-6">
                        {[
                            { val: timeLeft.days, label: 'Days' },
                            { val: timeLeft.hours, label: 'Hours' },
                            { val: timeLeft.minutes, label: 'Mins' },
                            { val: '30', label: 'Secs' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="bg-white dark:bg-gray-700 w-16 h-20 md:w-20 md:h-24 flex flex-col items-center justify-center rounded-xl shadow-sm border border-stone-100 dark:border-gray-600">
                                    <span className="text-2xl md:text-3xl font-bold text-[#2D241E] dark:text-white">{item.val}</span>
                                    <span className="text-[9px] uppercase tracking-widest text-gray-400 mt-1 font-bold">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Link
                            to="/shop"
                            className="group inline-flex items-center gap-3 bg-[#2D241E] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-black transition-all rounded-full shadow-lg"
                        >
                            Shop Collection
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Right: Image Section */}
                <div className="w-full md:w-1/2 h-[450px] md:h-[650px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F7F2EE] via-transparent to-transparent z-10 hidden md:block" />
                    <img
                        src="https://i.postimg.cc/rsFFhFvR/clothing.jpg"
                        alt="Deal of the day"
                        className="w-full h-full object-cover"
                    />

                    {/* Floating Badge */}
                    <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-full shadow-xl z-20 flex flex-col items-center justify-center w-28 h-28 border border-stone-100 animate-bounce-slow">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Save</span>
                        <span className="text-2xl font-bold text-[#2D241E]">40%</span>
                        <span className="text-[10px] uppercase font-bold text-gray-400">OFF</span>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-12 right-12 hidden lg:block opacity-30">
                        <div className="grid grid-cols-5 gap-2">
                            {[...Array(15)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default DealOfDay;