import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { allProducts } from "../data/products";

const AIRecommendation = () => {
    const [language, setLanguage] = useState("bn"); // 'bn' for Bangla, 'en' for English
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    
    // টেক্সট ডিকশনারি
    const content = {
        bn: {
            title: "AI Trial Conversation Studio",
            welcome: "AI Trial-এ স্বাগতম। আমি আপনার জন্য look তৈরি করতে, product compare করতে এবং style, budget ও occasion অনুযায়ী পরামর্শ দিতে পারি। একটি প্রশ্ন লিখুন অথবা ডান পাশে থাকা starter prompt ব্যবহার করুন।",
            placeholder: "লুক, তুলনা, বা বিকল্প নিয়ে প্রশ্ন করুন...",
            send: "পাঠান",
            reset: "রিসেট",
            langSelect: "ভাষা নির্বাচন",
            aiSuggest: "AI পরামর্শ: লুক আইডিয়া",
            thinking: "AI ভাবছে...",
            error: "দুঃখিত, এপিআই কানেকশনে সমস্যা হচ্ছে।",
            starters: [
                "$250 এর মধ্যে office day এর জন্য 3 piece look তৈরি করে দাও।",
                "একটি monochrome weekend outfit চাই, কিন্তু premium feel থাকতে হবে।",
                "date night এর জন্য একটি watch এবং একটি sneaker pairing সাজেস্ট করো।",
                "তোমাদের current catalog থেকে একটি capsule starter kit বানিয়ে দাও।",
                "travel look বানাও: একটি shirt, একটি pant, এবং একটি sneaker।"
            ]
        },
        en: {
            title: "AI Trial Conversation Studio",
            welcome: "Welcome to AI Trial. I can help you create looks, compare products, and give advice based on style, budget, and occasion. Write a question or use a starter prompt from the right.",
            placeholder: "Ask about looks, comparisons, or alternatives...",
            send: "Send",
            reset: "Reset",
            langSelect: "Language Selection",
            aiSuggest: "AI Suggestions: Look Ideas",
            thinking: "AI is thinking...",
            error: "Sorry, there is a problem with the API connection.",
            starters: [
                "Create a 3-piece office look within $250.",
                "I want a monochrome weekend outfit with a premium feel.",
                "Suggest a watch and sneaker pairing for a date night.",
                "Make a capsule starter kit from your current catalog.",
                "Create a travel look: a shirt, a pant, and a sneaker."
            ]
        }
    };

    const [messages, setMessages] = useState([
        {
            role: "ai",
            content: content[language].welcome
        }
    ]);

    // ভাষা পরিবর্তন হলে ওয়েলকাম মেসেজ আপডেট করা
    useEffect(() => {
        setMessages([{ role: "ai", content: content[language].welcome }]);
    }, [language]);

    const chatEndRef = useRef(null);
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleAskAI = async (selectedPrompt) => {
        const query = selectedPrompt || prompt;
        if (!query.trim()) return;

        const newMessages = [...messages, { role: "user", content: query }];
        setMessages(newMessages);
        setPrompt("");
        setLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey) throw new Error("API Key not found!");

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

            const fullPrompt = `
                You are a professional fashion consultant. 
                Product List: ${JSON.stringify(allProducts.slice(0, 15))} 
                User Request: "${query}"
                Rules: 
                1. Strictly answer in ${language === 'bn' ? 'Bengali' : 'English'}.
                2. Recommend specific products from the list.
                3. Keep the tone friendly and professional.
            `;

            const aiResult = await model.generateContent(fullPrompt);
            const response = await aiResult.response;
            const text = response.text();

            setMessages([...newMessages, { role: "ai", content: text }]);
        } catch (error) {
            setMessages([...newMessages, { role: "ai", content: content[language].error }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F0F7F9] p-4 md:p-10 font-sans text-slate-800">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-white">

                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Gemini Co-Pilot</span>
                        <h1 className="text-2xl font-serif mt-2 font-semibold text-slate-700">{content[language].title}</h1>
                    </div>
                    <button onClick={() => setMessages([{ role: "ai", content: content[language].welcome }])} className="text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <span>🔄 {content[language].reset}</span>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row h-[600px]">
                    {/* Left: Chat Area */}
                    <div className="flex-1 flex flex-col border-r border-gray-50 bg-white">
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-4 rounded-2xl ${msg.role === 'user'
                                        ? 'bg-cyan-500 text-white rounded-tr-none'
                                        : 'bg-gray-50 border border-gray-100 text-slate-700 rounded-tl-none'
                                    }`}>
                                        {msg.role === 'ai' && <p className="text-[10px] font-bold opacity-50 mb-1 uppercase tracking-widest">AI TRIAL</p>}
                                        <div className="whitespace-pre-wrap leading-relaxed text-sm">
                                            {msg.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-50 p-4 rounded-2xl animate-pulse text-gray-400 text-sm">{content[language].thinking}</div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-gray-100 bg-white">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                                    placeholder={content[language].placeholder}
                                    className="w-full p-4 pr-32 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-cyan-400 transition-all text-sm"
                                />
                                <button
                                    onClick={() => handleAskAI()}
                                    disabled={loading}
                                    className="absolute right-2 bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2"
                                >
                                    {loading ? "..." : content[language].send} <span>✈️</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="w-full md:w-80 bg-gray-50/50 p-6 overflow-y-auto">
                        <div className="mb-6">
                            <p className="text-xs font-bold text-cyan-600 mb-4 uppercase tracking-widest">{content[language].langSelect}</p>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setLanguage("bn")}
                                    className={`flex-1 py-2 rounded-md border text-xs font-medium transition-all ${language === 'bn' ? 'border-cyan-200 bg-cyan-50 text-cyan-700' : 'border-gray-200 bg-white text-gray-500'}`}
                                >
                                    বাংলা
                                </button>
                                <button 
                                    onClick={() => setLanguage("en")}
                                    className={`flex-1 py-2 rounded-md border text-xs font-medium transition-all ${language === 'en' ? 'border-cyan-200 bg-cyan-50 text-cyan-700' : 'border-gray-200 bg-white text-gray-500'}`}
                                >
                                    English
                                </button>
                            </div>
                        </div>

                        <p className="text-xs font-bold text-orange-500 mb-4 uppercase tracking-widest">{content[language].aiSuggest}</p>
                        <div className="space-y-3">
                            {content[language].starters.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAskAI(item)}
                                    className="w-full text-left p-3 text-xs bg-white border border-gray-100 rounded-lg hover:border-cyan-300 hover:shadow-sm transition-all text-slate-600 leading-relaxed"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIRecommendation;