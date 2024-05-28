import React, { useState } from 'react';
import './Leaderboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Leaderboard = ({ players }) => {
  const [slippage, setSlippage] = useState(1);

  const handleSlippageChange = (event) => {
    setSlippage(event.target.value);
  };

  return (
    <div className="leaderboard-container">
      <h1 className="main-heading">Leaderboard</h1>
      <div className="leaderboard">
        <div className='subs'>
            <h2 className="subheading">Basic Backtest</h2>
            <div className="slippage">
            <label htmlFor="slippage">Slippage: </label>
            <select id="slippage" value={slippage} onChange={handleSlippageChange}>
                <option value={1}>1</option>
                <option value={0.5}>0.5</option>
                <option value={0}>0</option>
            </select>
            </div>
        </div>
        <div className="table">
          <div className="header-row">
            <div className="header-cell">Rank</div>
            <div className="header-cell">Name</div>
            <div className="header-cell">Calmar Ratio</div>
            <div className="header-cell">Overall Profit</div>
            <div className="header-cell">Avg. Daily Profit</div>
            <div className="header-cell">Win % (Day)</div>
            <div className="header-cell">Price (Rs)</div>
            <div className="header-cell">Action</div>
          </div>
          {players.map((player, index) => (
            <div key={index} className="player-row">
              <div className="player-cell">{index + 1}</div>
              <div className="player-cell">{player.name}</div>
              <div className="player-cell calmar-ratio">
                <span>{player.calmarRatio}</span>
                <FontAwesomeIcon
                  icon={player.calmarRatio >= 1 ? faArrowUp : faArrowDown}
                  className={player.calmarRatio >= 1 ? 'calmar-icon profit' : 'calmar-icon loss'}
                />
              </div>
              <div className="player-cell">{player.overallProfit}</div>
              <div className="player-cell">{player.avgDailyProfit}</div>
              <div className="player-cell">{player.winPercentage}</div>
              <div className="player-cell">{player.price}</div>
              <div className="player-cell">
                <button className="action-button">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
