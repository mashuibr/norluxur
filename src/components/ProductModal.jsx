import { useState, useEffect } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, showNotification }) => {
  const [timeUntilRelease, setTimeUntilRelease] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const releaseDate = new Date(product.releaseDate);
      const now = new Date();
      const difference = releaseDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        
        setTimeUntilRelease(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeUntilRelease('Available Now');
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(interval);
  }, [product.releaseDate]);

  const handlePreorder = () => {
    showNotification(`Pre-order placed for ${product.name}. You'll be notified when it becomes available.`, 'success');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal product-modal">
      <div className="modal-overlay" onClick={handleOverlayClick}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-info">
            <div className="modal-collection">{product.collection}</div>
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-price">{product.price}</div>
            
            <div className="modal-release">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
              </svg>
              <div>
                <span className="release-label">Releases in</span>
                <span className="release-time">{timeUntilRelease}</span>
              </div>
            </div>

            <div className="modal-availability">
              <div className="availability-header">
                <span>Availability</span>
                <span>{product.available - product.reserved} of {product.available} pieces</span>
              </div>
              <div className="availability-bar">
                <div 
                  className="availability-fill" 
                  style={{ width: `${((product.available - product.reserved) / product.available) * 100}%` }}
                ></div>
              </div>
            </div>

            <p className="modal-description">{product.description}</p>

            <div className="modal-details">
              <h3>Details</h3>
              <dl>
                <dt>Fabrication</dt>
                <dd>{product.details.fabrication}</dd>
                <dt>Made In</dt>
                <dd>{product.details.madeIn}</dd>
                <dt>Limited Edition</dt>
                <dd>{product.details.limited}</dd>
                <dt>Care Instructions</dt>
                <dd>{product.details.care}</dd>
              </dl>
            </div>

            <button className="btn-primary full-width" onClick={handlePreorder}>
              Reserve Your Place
            </button>

            <div className="modal-note">
              * Pre-order does not guarantee availability. Queue position is first-come, first-served.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
