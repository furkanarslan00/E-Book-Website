// FeaturedCard.js

import React from 'react';
import './FeaturedCard.css';

const FeaturedCard = ({ title, description, imageUrl }) => {
  return (
    <div className="featured-card">
      <div className="card-image-container">
        <img src={imageUrl} alt="Product" className="card-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default FeaturedCard;
