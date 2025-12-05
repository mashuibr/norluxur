import './Philosophy.css';

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="section-container">
        <div className="philosophy-content">
          <div className="philosophy-text">
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-title">Where Craftsmanship Meets Exclusivity</h2>
            <p className="philosophy-description">
              Each NORLUXUR piece is a testament to the enduring marriage of artisanal mastery 
              and contemporary vision. Our garments are not merely worn—they are experienced, 
              collected, and cherished as wearable art.
            </p>
            <p className="philosophy-description">
              We believe in the sanctity of anticipation. Our timed releases and exclusive 
              auctions ensure that each acquisition becomes a meaningful ritual, a moment 
              of connection between creator and connoisseur.
            </p>
          </div>
          <div className="philosophy-image">
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" 
                alt="Artisan craftsmanship" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
