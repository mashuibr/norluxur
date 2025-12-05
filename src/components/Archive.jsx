import { useState } from 'react';
import { archiveCollection } from '../data/products';
import './Archive.css';

const Archive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % archiveCollection.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? archiveCollection.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="archive" className="archive-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">The Vault</span>
          <h2 className="section-title">Archive Collection</h2>
          <p className="section-subtitle">Rare pieces from previous seasons, available by appointment only</p>
        </div>
        <div className="archive-carousel">
          <div className="archive-track" style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
            {archiveCollection.map((item) => (
              <div key={item.id} className="archive-item">
                <div className="archive-image-container">
                  <img src={item.image} alt={item.name} />
                  <div className="archive-overlay">
                    <span className="archive-status">{item.status}</span>
                  </div>
                </div>
                <div className="archive-info">
                  <div className="archive-year">{item.year}</div>
                  <h3 className="archive-name">{item.name}</h3>
                  <div className="archive-collection">{item.collection}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="archive-navigation">
          <button className="archive-nav-btn prev" onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="archive-nav-btn next" onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Archive;
