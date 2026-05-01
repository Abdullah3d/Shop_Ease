import React from 'react';

const NewCollection = () => {
  const collections = [
    { id: 1, name: 'SWEATER', image: 'https://i.postimg.cc/q7bjSt3G/sweter.jpg' },
    { id: 2, name: 'LONG SLEEVE', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=500&auto=format&fit=crop' },
    { id: 3, name: 'T-SHIRT', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop' },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D241E] dark:text-white mb-4">
          New Collection
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic">
          Elevate your everyday wardrobe with our curated selection of premium essentials. We blend timeless elegance with modern trends to help you express your unique style        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {collections.map((item) => (
          <div key={item.id} className="relative group overflow-hidden cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* White Label Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-white py-3 shadow-lg">
              <p className="text-center font-bold tracking-widest text-sm text-[#2D241E]">
                {item.name}
              </p>
            </div>
          </div>
        ))}

        {/* Decorative dots in background */}
        <div className="absolute -bottom-10 -right-4 text-[#2D241E] opacity-10 text-2xl select-none hidden lg:block">
          ••••••••<br />••••••••<br />••••••••
        </div>
      </div>
    </section>
  );
};

export default NewCollection;