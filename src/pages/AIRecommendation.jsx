import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { allProducts } from "../data/products";

const AIRecommendation = () => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const handleAskAI = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        setResult("");

        try {
            // ১. এপিআই কি চেক করা
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            
            if (!apiKey) {
                throw new Error("API Key not found! Please check your .env file.");
            }

            const genAI = new GoogleGenerativeAI(apiKey);

            // ২. মডেল কনফিগারেশন (Stable Version ট্রাই করা হচ্ছে)
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
            });

            const fullPrompt = `
                You are a professional fashion consultant. 
                Based on this product list: ${JSON.stringify(allProducts.slice(0, 10))} 
                
                User Request: "${prompt}"

                Rules:
                1. Recommend 2-3 specific products from the list.
                2. Explain why they match the user's request.
                3. If no match is found, suggest the most relevant item.
            `;

            // ৩. সরাসরি কন্টেন্ট জেনারেট করা (Chat এর বদলে এটি বেশি রিলায়েবল)
            const aiResult = await model.generateContent(fullPrompt);
            const response = await aiResult.response;
            const text = response.text();
            
            setResult(text);

        } catch (error) {
            console.error("Detailed Error:", error);
            // ৪. এরর মেসেজ ইউজারকে দেখানো
            setResult(`Error: ${error.message || "এপিআই কানেকশনে সমস্যা হচ্ছে।"}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10 font-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center uppercase tracking-tighter">
                    AI Stylist
                </h1>

                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Describe your style (e.g., 'Formal look for a wedding')..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                        className="border border-gray-300 dark:border-gray-800 bg-transparent p-4 w-full rounded-lg outline-none focus:ring-1 focus:ring-gray-400"
                    />

                    <button
                        onClick={handleAskAI}
                        disabled={loading}
                        className="bg-black text-white dark:bg-white dark:text-black px-6 rounded-lg font-bold hover:opacity-90 disabled:opacity-50 transition-all min-w-[120px]"
                    >
                        {loading ? "SEARCHING..." : "ASK AI"}
                    </button>
                </div>

                <div className="mt-10 p-8 border border-gray-100 dark:border-gray-900 rounded-2xl bg-gray-50/50 dark:bg-zinc-950/50">
                    {loading ? (
                        <div className="flex items-center gap-3 justify-center">
                            <div className="animate-spin h-5 w-5 border-2 border-gray-500 border-t-transparent rounded-full"></div>
                            <p className="animate-pulse font-medium">Curating your style...</p>
                        </div>
                    ) : (
                        <div className="whitespace-pre-wrap leading-relaxed text-md opacity-90">
                            {result || "Write something and let the AI find your perfect match."}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIRecommendation;