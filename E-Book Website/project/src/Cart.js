// Cart.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import './Cart.css';

const Cart = ({ onLogout }) => {
  const people = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Smith',
    },
    {
      id: 3,
      name: 'Alice Johnson',
    },
    {
      id: 4,
      name: 'Bob Williams',
    },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('********');
  const [orderConfirmation, setOrderConfirmation] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPassword(showPassword ? '********' : 'abcd123ZXYZ'); 
  };

  const handleConfirmCart = () => {
    setOrderConfirmation(true);


    setTimeout(() => {
      setOrderConfirmation(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2 className="appp-title">Items in Cart</h2>
        <div className="content-container">
          <div className="people-section">
            {people.map((person) => (
              <div key={person.id} className="person-card">
                <div className="text-info">
                  <h3>{person.name}</h3>
                </div>
                <div className="button-group">
                  <button className="remove-button">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-section">
            <div className="menu-title">Cart Information</div>
            <div className="additional-info">
              <img
                className="cart-image"
                src="https://imzalikitabim.com/wp-content/uploads/2018/02/S%C4%B0TE-%C4%B0CON-03-min.png"
                alt="Cart Image"
              />
              <p>Number of Products: </p>
              <p>Product Total: </p>
            </div>
            <button onClick={handleConfirmCart} className="menuu-button">
              Confirm Cart
            </button>

            {orderConfirmation && (
              <div className="order-confirmation">
                <p>Order created successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
