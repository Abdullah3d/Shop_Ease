import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Anisa Zahra',
      role: 'Fashion Consultant',
      text: 'The fabric quality is exceptional. It is comfortable and met all my expectations perfectly!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      id: 2,
      name: 'Melissa Wallace',
      role: 'Creative Director',
      text: 'I really love this shirt! It feels more like a premium light flannel than a regular jacket.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      id: 3,
      name: 'Sarah Rahman',
      role: 'Lifestyle Blogger',
      text: 'Finding modest yet trendy clothes was hard until I found this brand. Absolute perfection!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
    {
      id: 4,
      name: 'David Miller',
      role: 'Entrepreneur',
      text: 'The fit of the blazer is incredible. It gives a sharp, executive look for my meetings.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    },
    {
      id: 5,
      name: 'Ayesha Khan',
      role: 'Student',
      text: 'Affordable luxury at its best. The winter collection is super cozy and stylish.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <span className="text-[#2D241E]/60 dark:text-gray-400 uppercase tracking-[0.4em] text-[10px] font-bold">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D241E] dark:text-white">
            What People Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {reviews.map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className="bg-[#FDF8F3] dark:bg-gray-800 p-10 md:p-14 rounded-2xl flex flex-col items-center h-full transition-all duration-300 hover:shadow-lg">
                {/* Quote Icon */}
                <span className="text-4xl text-[#2D241E]/20 mb-4 font-serif">“</span>

                <h4 className="text-lg md:text-xl font-medium text-[#2D241E] dark:text-white mb-6 italic leading-relaxed">
                  {rev.text}
                </h4>

                <div className="mt-auto flex flex-col items-center">
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-sm"
                  />
                  <h5 className="font-bold text-[#2D241E] dark:text-white tracking-wide">{rev.name}</h5>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{rev.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Custom Styling */}
      <style jsx="true">{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d1d1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #2D241E !important;
          width: 24px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        .dark .swiper-pagination-bullet-active {
          background: #fff !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;