import React from 'react';
import './FallingItem.css';

const FallingItem = ({ left, top }) => {
  return (
    <div className='falling-item' style={{ left: `${left}%`, top: `${top}%` }}>
      🍕
    </div>
  );
};

export default FallingItem;
