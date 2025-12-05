import { useState, useEffect } from 'react';
import './AuctionCard.css';

const AuctionCard = ({ auction, onSelect }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endTime = new Date(auction.endTime);
      const now = new Date();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h`);
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${minutes}m ${seconds}s`);
        }
      } else {
        setTimeLeft('Ended');
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [auction.endTime]);

  return (
    <div className="auction-card" onClick={() => onSelect(auction)}>
      <div className="auction-image-container">
        <img src={auction.image} alt={auction.name} className="auction-image" />
        <div className="auction-badge">
          <svg className="pulse-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" />
          </svg>
          Live Auction
        </div>
        <div className="auction-overlay">
          <span className="place-bid">Place Bid</span>
        </div>
      </div>
      <div className="auction-info">
        <div className="auction-collection">{auction.collection}</div>
        <h3 className="auction-name">{auction.name}</h3>
        <div className="auction-stats">
          <div className="auction-stat">
            <span className="stat-label">Current Bid</span>
            <span className="stat-value">€{auction.currentBid.toLocaleString()}</span>
          </div>
          <div className="auction-stat">
            <span className="stat-label">Bids</span>
            <span className="stat-value">{auction.bids}</span>
          </div>
        </div>
        <div className="auction-timer">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
          </svg>
          Ends in {timeLeft}
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
