import React from 'react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: 'Anisa Zahra', role: 'Founder Milenial', text: 'Comfortable And Met All My Expectations! I Ordered A Medium And It Fit Perfectly' },
    { id: 2, name: 'Melissa Wallace', role: 'Founder Milenial', text: 'I Really Love This Shirt! It Feels More Like A Light Flannel Than A Jacket' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#2D241E] dark:text-white mb-4">What People Say About Us</h2>
      <p className="text-gray-500 italic mb-16 max-w-2xl mx-auto">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Ullamcorper Congue Eros</p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-[#FDF8F3] dark:bg-gray-800 p-12 rounded-xl flex flex-col items-center">
            <h4 className="text-lg font-bold text-[#2D241E] dark:text-white mb-6 max-w-xs uppercase leading-snug">
              "{rev.text}"
            </h4>
            <p className="text-gray-500 text-sm italic mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices.
            </p>
            <img 
              src={`https://i.pravatar.cc/150?u=${rev.id}`} 
              alt={rev.name} 
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white shadow-md"
            />
            <h5 className="font-bold text-[#2D241E] dark:text-white">{rev.name}</h5>
            <span className="text-xs text-gray-400">{rev.role}</span>
          </div>
        ))}
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        <div className="w-2 h-2 rounded-full bg-[#2D241E]"></div>
        <div className="w-2 h-2 rounded-full border border-gray-300"></div>
        <div className="w-2 h-2 rounded-full border border-gray-300"></div>
      </div>
    </section>
  );
};

export default Testimonials;