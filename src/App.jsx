import React from 'react';
import Leaderboard from './components/Leaderboard';

const App = () => {
  const players = [
    { name: 'Selling with re entr', calmarRatio: 1.2, overallProfit: '₹100,000', avgDailyProfit: '₹2,500', winPercentage: '60%', price: '₹10,000', profit: 100000 },
    { name: 'strategy_name', calmarRatio: 1.1, overallProfit: '₹95,000', avgDailyProfit: '₹2,400', winPercentage: '58%', price: '₹9,500', profit: 95000 },
    { name: 'Based on premium and', calmarRatio: 1.3, overallProfit: '₹90,000', avgDailyProfit: '₹2,350', winPercentage: '62%', price: '₹9,000', profit: 90000 },
    { name: 'strategy_name', calmarRatio: 1.0, overallProfit: '₹85,000', avgDailyProfit: '₹2,200', winPercentage: '55%', price: '₹8,500', profit: 85000 },
    { name: 'strategy_name', calmarRatio: 1.4, overallProfit: '₹80,000', avgDailyProfit: '₹2,100', winPercentage: '65%', price: '₹8,000', profit: 80000 },
    { name: 'Based on premium wit', calmarRatio: 1.5, overallProfit: '₹75,000', avgDailyProfit: '₹2,000', winPercentage: '67%', price: '₹7,500', profit: 75000 },
    { name: 'strategy_name', calmarRatio: 1.2, overallProfit: '₹70,000', avgDailyProfit: '₹1,900', winPercentage: '60%', price: '₹7,000', profit: 70000 },
    { name: 'Wait and trade_Save', calmarRatio: 1.1, overallProfit: '₹65,000', avgDailyProfit: '₹1,800', winPercentage: '58%', price: '₹6,500', profit: 65000 },
    { name: 'iron condor', calmarRatio: 1.3, overallProfit: '₹60,000', avgDailyProfit: '₹1,750', winPercentage: '62%', price: '₹6,000', profit: 60000 },
    { name: 'strategy_name', calmarRatio: 1.0, overallProfit: '₹55,000', avgDailyProfit: '₹1,600', winPercentage: '55%', price: '₹5,500', profit: 55000 },
  ];

  return (
    <div className="app">
      <Leaderboard players={players} />
    </div>
  );
};

export default App;
