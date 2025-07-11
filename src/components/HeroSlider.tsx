import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  '/condo1_hero.png',
  '/condo1_living.png',
  '/condo1_bedroom.png',
  '/condo1_balcony.png',
  '/condo1_banner.png',
];

const HeroSlider: React.FC = () => {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {slides.map((src) => (
          <SwiperSlide key={src}>
            <img src={src} alt="Jacó Beach Condo" style={{ width: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider; 