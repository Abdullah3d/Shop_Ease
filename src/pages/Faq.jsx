import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 py-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
            >
                <span className="text-lg font-serif font-bold text-[#2D241E] dark:text-white">{question}</span>
                <span className="text-2xl">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
};

const Faq = () => {
    const faqs = [
        { question: "What is your return policy?", answer: "We offer a 30-day return policy for all unworn items in their original packaging. Please visit our returns portal to start a claim." },
        { question: "How long does shipping take?", answer: "Domestic shipping typically takes 3-5 business days. International orders can take 7-14 business days depending on location." },
        { question: "Do you offer international shipping?", answer: "Yes, we ship to over 50 countries worldwide. Shipping costs will be calculated at checkout." },
        { question: "How can I track my order?", answer: "Once your order ships, you will receive an email with a tracking link and order number." }
    ];

    return (
        <div className="py-20 px-6 dark:bg-gray-900 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-serif text-center text-[#2D241E] dark:text-white mb-4">Frequently Asked Questions</h1>
                <p className="text-center text-gray-500 italic mb-16">Everything you need to know about your shop-ease experience.</p>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;