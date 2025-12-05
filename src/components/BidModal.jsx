import { useState, useEffect } from 'react';
import './BidModal.css';

const BidModal = ({ auction, onClose, showNotification }) => {
  const [bidAmount, setBidAmount] = useState(auction.currentBid + auction.minimumBid);
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

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft('Ended');
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [auction.endTime]);

  const handlePlaceBid = () => {
    if (bidAmount <= auction.currentBid) {
      showNotification('Bid must be higher than current bid', 'error');
      return;
    }

    showNotification(`Bid of €${bidAmount.toLocaleString()} placed successfully on ${auction.name}`, 'success');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal bid-modal">
      <div className="modal-overlay" onClick={handleOverlayClick}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={auction.image} alt={auction.name} />
            <div className="auction-badge-large">
              <svg className="pulse-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" />
              </svg>
              Live Auction
            </div>
          </div>
          <div className="modal-info">
            <div className="modal-collection">{auction.collection}</div>
            <h2 className="modal-title">{auction.name}</h2>
            
            <div className="auction-stats-large">
              <div className="stat-item">
                <span className="stat-label">Current Bid</span>
                <span className="stat-value">€{auction.currentBid.toLocaleString()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total Bids</span>
                <span className="stat-value">{auction.bids}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Time Left</span>
                <span className="stat-value">{timeLeft}</span>
              </div>
            </div>

            <p className="modal-description">{auction.description}</p>

            <div className="modal-details">
              <h3>Details</h3>
              <dl>
                <dt>Fabrication</dt>
                <dd>{auction.details.fabrication}</dd>
                <dt>Made In</dt>
                <dd>{auction.details.madeIn}</dd>
                <dt>Status</dt>
                <dd>{auction.details.unique}</dd>
                <dt>Condition</dt>
                <dd>{auction.details.condition}</dd>
              </dl>
            </div>

            <div className="bid-history">
              <h3>Bid History</h3>
              <div className="bid-history-list">
                {auction.bidHistory.map((bid, index) => (
                  <div key={index} className="bid-history-item">
                    <div className="bid-user">{bid.bidder}</div>
                    <div className="bid-amount">€{bid.amount.toLocaleString()}</div>
                    <div className="bid-time">
                      {new Date(bid.time).toLocaleString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bid-form">
              <h3>Place Your Bid</h3>
              <div className="bid-input-group">
                <span className="currency-symbol">€</span>
                <input 
                  type="number" 
                  value={bidAmount}
                  onChange={(e) => setBidAmount(Number(e.target.value))}
                  min={auction.currentBid + auction.minimumBid}
                  step={auction.minimumBid}
                />
              </div>
              <div className="bid-note">
                Minimum increment: €{auction.minimumBid.toLocaleString()}
              </div>
              <button className="btn-primary full-width" onClick={handlePlaceBid}>
                Place Bid
              </button>
            </div>

            <div className="modal-note">
              * All bids are final and binding. Please review our auction terms before bidding.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidModal;
