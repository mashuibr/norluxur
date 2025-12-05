import { upcomingReleases } from '../data/products';
import ProductCard from './ProductCard';
import './UpcomingReleases.css';

const UpcomingReleases = ({ onProductSelect }) => {
  return (
    <section id="upcoming" className="upcoming-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Curated Selection</span>
          <h2 className="section-title">Upcoming Releases</h2>
          <p className="section-subtitle">Reserve your place in the queue for our most anticipated pieces</p>
        </div>
        <div className="releases-grid">
          {upcomingReleases.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onProductSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingReleases;
