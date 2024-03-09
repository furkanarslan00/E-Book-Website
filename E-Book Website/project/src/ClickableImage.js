// ClickableImage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ClickableImage.css';

const ClickableImage = () => {
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);

  const handleFavoriteClick = () => {
    setShowFavoriteMessage(true);
  };

  const handleCartClick = () => {
    setShowCartMessage(true);
  };

  return (
    <div className="clickable-image-container">
      <div className="clickable-image" onClick={handleFavoriteClick}>
        <img src="https://cdn-icons-png.flaticon.com/512/73/73814.png" alt="Favori" />
      </div>
      <div className="clickable-image" onClick={handleCartClick}>
        <img src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png" alt="Sepet" />
      </div>

      {showFavoriteMessage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowFavoriteMessage(false)}>
              &times;
            </span>
            <h4>Information box </h4>
            <p>Successfully added to favorites!</p>
          </div>
        </div>
      )}

      {showCartMessage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowCartMessage(false)}>
              &times;
            </span>
            <h4>Information box </h4>
            <p>Successfully added to cart!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickableImage;
