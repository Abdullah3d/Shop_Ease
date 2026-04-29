import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative w-full bg-[#F3E5D8] dark:bg-gray-900 pt-10 pb-20 px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="md:w-1/2 z-10">
                    <h1 className="text-5xl lg:text-7xl font-serif font-medium text-[#2D241E] dark:text-white leading-tight mb-6">
                        Find The Best <br /> Fashion Style <br /> For You
                    </h1>
                    <p className="text-[#5A4B41] dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut.
                    </p>
                    <Link
                        to="/shop"
                        className="bg-[#453C35] text-white px-10 py-4 uppercase tracking-[0.2em] font-bold hover:bg-black transition-colors"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2 mt-12 md:mt-0 relative">
                    {/* Decorative Dots */}
                    <div className="absolute -top-6 -right-6 text-[#2D241E] opacity-20 text-3xl grid grid-cols-4 gap-2">
                        {[...Array(12)].map((_, i) => <div key={i}>•</div>)}
                    </div>

                    {/* Image with Unique Shape */}
                    <div className="relative z-10 w-full max-w-[450px] ml-auto">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop"
                            alt="Fashion Model"
                            className="rounded-tl-[150px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] w-full h-[550px] object-cover shadow-2xl"
                        />
                    </div>

                    {/* Background Decorative Waves (CSS Only) */}
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#EBD9C8] dark:bg-gray-800 rounded-full blur-3xl opacity-50 -z-10"></div>
                </div>
            </div>

            {/* Subtle Wave SVG at bottom */}
            <div className="absolute bottom-0 left-0 w-full leading-[0]">
                <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.44,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F3E5D8" opacity=".25"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,104.5,22.75C592.7,40.1,644,61,701,61c47,0,93-18,141-18,48,0,94,22,142,22,48,0,94-22,141-22V0Z" fill="#F3E5D8" opacity=".5"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;