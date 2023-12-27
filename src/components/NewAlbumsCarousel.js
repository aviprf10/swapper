// src/components/NewAlbumsCarousel.jsx
import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import axios from 'axios';

const NewAlbumsCarousel = () => {
  const [newAlbums, setNewAlbums] = useState([]);

  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
      
      setNewAlbums(response.data);
    } catch (error) {
      console.error('Error fetching new albums:', error);
    }
  };

  useEffect(() => {
    fetchNewAlbums();
  }, []);

  useEffect(() => {
    new Swiper('.swiper-container-new', {
      // Swiper configuration options
      navigation: {
        nextEl: '.swiper-button-next-new',
        prevEl: '.swiper-button-prev-new',
      },
    });
  }, [newAlbums]);

  return (
    <div>
      <h2>New Albums</h2>
      <div className="swiper-container-new">
        <div className="swiper-wrapper">
          {newAlbums.map(album => (
            <div key={album.id} className="swiper-slide">
              <img src={album.image} alt={album.title} />
              <p>{album.title}</p>
              {/* Your card component with album details */}
            </div>
          ))}
        </div>
        <div className="swiper-button-next-new"></div>
        <div className="swiper-button-prev-new"></div>
      </div>
    </div>
  );
};

export default NewAlbumsCarousel;
