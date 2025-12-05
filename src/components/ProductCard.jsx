import { useState, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onSelect }) => {
  const [timeUntilRelease, setTimeUntilRelease] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const releaseDate = new Date(product.releaseDate);
      const now = new Date();
      const difference = releaseDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        
        if (days > 0) {
          setTimeUntilRelease(`${days}d ${hours}h`);
        } else {
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          setTimeUntilRelease(`${hours}h ${minutes}m`);
        }
      } else {
        setTimeUntilRelease('Available Now');
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(interval);
  }, [product.releaseDate]);

  const availabilityPercent = ((product.available - product.reserved) / product.available) * 100;

  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <span className="view-details">View Details</span>
        </div>
      </div>
      <div className="product-info">
        <div className="product-collection">{product.collection}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">{product.price}</div>
        <div className="product-release">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
          </svg>
          Releases in {timeUntilRelease}
        </div>
        <div className="product-availability">
          <div className="availability-bar">
            <div 
              className="availability-fill" 
              style={{ width: `${availabilityPercent}%` }}
            ></div>
          </div>
          <span className="availability-text">
            {product.available - product.reserved} of {product.available} available
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
