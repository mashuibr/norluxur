import { liveAuctions } from '../data/products';
import AuctionCard from './AuctionCard';
import './LiveAuctions.css';

const LiveAuctions = ({ onAuctionSelect }) => {
  return (
    <section id="auctions" className="auctions-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Exclusive Bidding</span>
          <h2 className="section-title">Live Auctions</h2>
          <p className="section-subtitle">Acquire one-of-a-kind masterpieces through our curated auction house</p>
        </div>
        <div className="auctions-grid">
          {liveAuctions.map(auction => (
            <AuctionCard 
              key={auction.id} 
              auction={auction} 
              onSelect={onAuctionSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveAuctions;
