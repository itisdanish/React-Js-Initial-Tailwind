import React from 'react';
import './Basket.css';

const Basket = ({ position }) => {
  return (
    <div className='basket' style={{ left: `${position}%` }}>
      🧺
    </div>
  );
};

export default Basket;
