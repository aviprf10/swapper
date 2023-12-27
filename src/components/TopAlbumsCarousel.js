// src/components/TopAlbumsCarousel.jsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import axios from 'axios';
import '../App.css';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const TopAlbumsCarousel = () => {
  const [topAlbums, setTopAlbums] = useState([]);

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
      setTopAlbums(response.data);
    } catch (error) {
      console.error('Error fetching top albums:', error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  return (
    <div>
      <h2>Top Albums</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      >
        {topAlbums.map(album => (
          <SwiperSlide key={album.id}>
            <img src={album.image} alt={album.title} />
            <p>{album.title}</p>
            {/* Your card component with additional album details */}
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default TopAlbumsCarousel;
