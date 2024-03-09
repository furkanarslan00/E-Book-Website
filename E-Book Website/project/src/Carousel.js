// Carousel.js

import React, { useState } from 'react';
import FeaturedCard from './FeaturedCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <FaChevronLeft className="carousel-arrow carousel-left" onClick={handlePrevClick} />
      <FeaturedCard {...items[currentIndex]} />
      <FaChevronRight className="carousel-arrow carousel-right" onClick={handleNextClick} />
    </div>
  );
};

export default Carousel;
