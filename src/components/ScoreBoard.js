import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = ({ score, missed }) => {
  return (
    <div className='score-board'>
      <div>Score: {score}</div>
      <div>Missed: {missed}</div>
    </div>
  );
};

export default ScoreBoard;
