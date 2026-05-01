import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 px-6 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left: Info */}
                    <div>
                        <h1 className="text-6xl font-serif text-[#2D241E] dark:text-white mb-8">Get In Touch</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-md">
                            Have a question about our collection or an existing order? Our team is here to help you find exactly what you're looking for.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-[#F3E5D8] flex items-center justify-center rounded-full text-[#2D241E]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">Phone</h4>
                                    <p className="text-[#2D241E] dark:text-white font-medium">0188879-0045</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-[#F3E5D8] flex items-center justify-center rounded-full text-[#2D241E]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">Email</h4>
                                    <p className="text-[#2D241E] dark:text-white font-medium">abdullah.ibrahim.2411@gmail.com
</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-[#FDF8F3] dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                                    <input type="text" className="p-4 bg-white dark:bg-gray-700 outline-none border border-transparent focus:border-[#2D241E] transition" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                    <input type="email" className="p-4 bg-white dark:bg-gray-700 outline-none border border-transparent focus:border-[#2D241E] transition" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                <input type="text" className="p-4 bg-white dark:bg-gray-700 outline-none border border-transparent focus:border-[#2D241E] transition" placeholder="Order Inquiry" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                                <textarea rows="5" className="p-4 bg-white dark:bg-gray-700 outline-none border border-transparent focus:border-[#2D241E] transition resize-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full bg-[#2D241E] text-white py-4 font-bold uppercase tracking-widest hover:opacity-90 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;