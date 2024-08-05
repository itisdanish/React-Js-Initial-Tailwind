import React, { useState, useEffect } from 'react';
import Basket from './Basket';
import FallingItem from './FallingItem';
import './GameBoard.css';
import ScoreBoard from './Scoreboard';

const GameBoard = () => {
  const [basketPosition, setBasketPosition] = useState(50); // 50% position
  const [fallingItems, setFallingItems] = useState([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setBasketPosition((prev) => Math.max(prev - 10, 0));
      } else if (event.key === 'ArrowRight') {
        setBasketPosition((prev) => Math.min(prev + 10, 100));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingItems((prev) => [
        ...prev,
        { id: Math.random(), left: Math.random() * 100, top: 0 },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingItems((prev) =>
        prev.map((item) => ({ ...item, top: item.top + 5 }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFallingItems((prev) =>
      prev.filter((item) => {
        if (item.top > 90) {
          if (
            item.left > basketPosition - 10 &&
            item.left < basketPosition + 10
          ) {
            setScore((prev) => prev + 1);
            return false;
          } else {
            setMissed((prev) => prev + 1);
            return false;
          }
        }
        return true;
      })
    );
  }, [fallingItems, basketPosition]);

  return (
    <div className='game-board'>
      <Basket position={basketPosition} />
      {fallingItems.map((item) => (
        <FallingItem key={item.id} left={item.left} top={item.top} />
      ))}
      <ScoreBoard score={score} missed={missed} />
    </div>
  );
};

export default GameBoard;
